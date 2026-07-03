import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Portfólio - Enrico Malta',
  description: 'Desenvolvedor Full-stack, automação, criptografia, IA e software crítico',
  keywords: ['desenvolvedor', 'full-stack', 'javascript', 'typescript', 'python', 'lua'],
  authors: [{ name: 'Enrico Malta' }],
  openGraph: {
    title: 'Portfólio - Enrico Malta',
    description: 'Desenvolvedor Full-stack, automação, criptografia, IA e software crítico',
    type: 'website',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
