import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import app from './config';

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

export async function createUser(email, password) {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Usuário criado com sucesso
      const user = userCredential.user;
      return user;
    })
    .catch(error => {
      // Tratar erros
      console.error('Erro ao criar usuário:', error);
    });
}

export async function signInUser(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    console.log('Erro ao fazer login: ', error)
    return null
  }
}

export async function resetPassword(email) {
  return await sendPasswordResetEmail(auth, email)
    .then(() => {
      // Email de recuperação enviado com sucesso
      console.log('Email de recuperação enviado');
    })
    .catch(error => {
      // Tratar erros
      console.error('Erro ao enviar email de recuperação:', error);
    });
}
