import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';;
import {getFirestore, doc, setDoc} from 'firebase/firestore';
import app from './config';

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

export async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Adicionar o usuário à coleção `users`
    await setDoc(doc(db, 'users', user.uid), {
      email,
      createdAt: new Date(),
    });

    return user;
  } catch (error) {
    console.log('Erro ao criar usuário: ', error);
    return null;
  }
}

export async function signInUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user;
  } catch (error) {
    console.log('Erro ao fazer login: ', error);
    return null;
  }
}

export async function resetPassword(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log('Email de recuperação enviado');
  } catch (error) {
    console.error('Erro ao enviar email de recuperação:', error);
  }
}

export default auth;
