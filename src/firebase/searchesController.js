// searchesController.js

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import app from './config';

// Inicializar Firebase
const db = getFirestore(app);
const storage = getStorage(app);

// Função para criar uma nova pesquisa
export async function createSurvey(name, date, imageFile) {
  try {
    // Armazenar a imagem no Firebase Storage
    const imageRef = ref(storage, `surveys/${name}/${imageFile.name}`);
    await uploadBytes(imageRef, imageFile);
    const imageUrl = await getDownloadURL(imageRef);

    // Adicionar a pesquisa ao Firestore
    const docRef = await addDoc(collection(db, 'surveys'), {
      name,
      date,
      imageUrl,
      ratings: {
        terrible: 0,
        bad: 0,
        neutral: 0,
        good: 0,
        excellent: 0,
      },
    });

    console.log('Pesquisa criada com ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Erro ao criar pesquisa:', error);
    throw error;
  }
}

// Função para ler todas as pesquisas
export async function getSurveys() {
  try {
    const q = query(collection(db, 'surveys'));
    const querySnapshot = await getDocs(q);
    const surveys = [];

    querySnapshot.forEach(doc => {
      surveys.push({id: doc.id, ...doc.data()});
    });

    return surveys;
  } catch (error) {
    console.error('Erro ao obter pesquisas:', error);
    throw error;
  }
}

// Função para atualizar uma pesquisa
export async function updateSurvey(id, {name, date, imageFile}) {
  try {
    const surveyRef = doc(db, 'surveys', id);

    // Obter os dados atuais da pesquisa
    const surveyDoc = await surveyRef.get();
    if (!surveyDoc.exists) {
      throw new Error('Pesquisa não encontrada');
    }

    const currentData = surveyDoc.data();

    let imageUrl = currentData.imageUrl;
    if (imageFile) {
      // Armazenar a nova imagem no Firebase Storage
      const imageRef = ref(
        storage,
        `surveys/${name || currentData.name}/${imageFile.name}`,
      );
      await uploadBytes(imageRef, imageFile);
      imageUrl = await getDownloadURL(imageRef);
    }

    // Atualizar a pesquisa no Firestore
    await updateDoc(surveyRef, {
      name: name || currentData.name,
      date: date || currentData.date,
      imageUrl,
    });

    console.log('Pesquisa atualizada com ID:', id);
  } catch (error) {
    console.error('Erro ao atualizar pesquisa:', error);
    throw error;
  }
}

// Função para deletar uma pesquisa
export async function deleteSurvey(id) {
  try {
    const surveyRef = doc(db, 'surveys', id);

    // Excluir o documento da pesquisa
    await deleteDoc(surveyRef);

    console.log('Pesquisa deletada com ID:', id);
  } catch (error) {
    console.error('Erro ao deletar pesquisa:', error);
    throw error;
  }
}

export async function addRating(surveyId, ratingType) {
  try {
    // Verifica se o tipo de nota é válido
    const validRatings = ['terrible', 'bad', 'neutral', 'good', 'excellent'];
    if (!validRatings.includes(ratingType)) {
      throw new Error('Tipo de nota inválido');
    }

    const surveyRef = doc(db, 'surveys', surveyId);

    // Atualiza a nota selecionada, adicionando +1
    await updateDoc(surveyRef, {
      [`ratings.${ratingType}`]: increment(1),
    });

    console.log(
      `Nota ${ratingType} atualizada com sucesso na pesquisa com ID: ${surveyId}`,
    );
  } catch (error) {
    console.error('Erro ao atualizar nota:', error);
    throw error;
  }
}
