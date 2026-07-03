import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';
import { checkRateLimit } from '@/lib/rate-limit';
import { validateContactForm, sanitizeContactData } from '@/lib/validation';

interface ContactFormData {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  [key: string]: unknown;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    const rateLimitConfig = {
      limit: parseInt(process.env.RATE_LIMIT_REQUESTS || '5', 10),
      windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '3600000', 10),
    };

    const rateLimitResult = checkRateLimit(ip, rateLimitConfig.limit, rateLimitConfig.windowMs);

    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: 'Muitas requisições. Tente novamente mais tarde.',
          retryAfter: rateLimitResult.retryAfter,
        },
        {
          status: 429,
          headers: {
            'Retry-After': rateLimitResult.retryAfter.toString(),
          },
        }
      );
    }

    const body = (await request.json()) as ContactFormData;

    const validation = validateContactForm(body);
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const sanitizedData = sanitizeContactData(body);

    const docRef = await db.collection('contacts').add({
      ...sanitizedData,
      ipAddress: ip,
      userAgent: request.headers.get('user-agent') ?? null,
      createdAt: new Date().toISOString(),
      status: 'new',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso!',
        id: docRef.id,
      },
      {
        status: 201,
        headers: {
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error('Erro ao processar contato:', error);

    const message = error instanceof Error ? error.message : 'Erro ao processar sua requisição. Tente novamente mais tarde.';

    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: 'ok' });
}
