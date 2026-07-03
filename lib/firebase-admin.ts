import admin from 'firebase-admin';

const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

const credential = projectId && clientEmail && privateKey
  ? admin.credential.cert({ projectId, clientEmail, privateKey })
  : undefined;

if (!admin.apps.length) {
  admin.initializeApp({
    projectId,
    credential,
  });
}

export const db = admin.firestore();
export const auth = admin.auth();
export default admin;
