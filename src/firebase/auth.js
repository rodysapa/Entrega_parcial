import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';

import app from './config';

const auth = getAuth(app);

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
  return await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Usuário logado com sucesso
      const user = userCredential.user;
      return user;
    })
    .catch(error => {
      // Tratar erros
      console.error('Erro ao fazer login:', error);
    });
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
