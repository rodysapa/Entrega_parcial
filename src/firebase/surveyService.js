import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  increment,
} from 'firebase/firestore';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import app from './config';

const db = getFirestore(app);
const storage = getStorage(app);

export async function createSurvey(userId, name, date, imageAsset) {
  try {
    // Abrir o blob da imagem
    const file = await fetch(imageAsset.uri);
    const blob = await file.blob();

    // Armazenar a imagem no Firebase Storage
    const imageRef = ref(
      storage,
      `surveys/${userId}/${name}/${imageAsset.fileName}`,
    );
    await uploadBytes(imageRef, blob, {contentType: imageAsset.type});

    const imageUrl = await getDownloadURL(imageRef);

    // Adicionar a pesquisa à subcoleção do usuário no Firestore
    const docRef = await addDoc(collection(db, 'users', userId, 'surveys'), {
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
  }
}

// Função para obter todas as pesquisas de um usuário
export async function getSurveys(userId) {
  const surveys = [];
  try {
    const querySnapshot = await getDocs(
      collection(db, 'users', userId, 'surveys'),
    );

    querySnapshot.forEach(doc => {
      console.log(doc.data());
      surveys.push({id: doc.id, ...doc.data()});
    });

    return surveys;
  } catch (error) {
    console.error('Erro ao obter pesquisas:', error);
    return surveys;
  }
}

// Função para atualizar uma pesquisa
export async function updateSurvey(userId, surveyId, name, date, image) {
  try {
    const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);

    let imageUrl = image;
    if (typeof image != 'string') {
      // Armazenar a nova imagem no Firebase Storage

      const imageRef = ref(
        storage,
        `surveys/${userId}/${name || currentData.name}/${image.name}`,
      );
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }

    // Atualizar a pesquisa no Firestore
    await updateDoc(surveyRef, {
      name: name,
      date: date,
      imageUrl: imageUrl,
    });

    console.log('Pesquisa atualizada com ID:', surveyId);
  } catch (error) {
    console.error('Erro ao atualizar pesquisa:', error);
  }
}

// Função para deletar uma pesquisa
export async function deleteSurvey(userId, surveyId) {
  try {
    const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);

    // Excluir o documento da pesquisa
    await deleteDoc(surveyRef);

    console.log('Pesquisa deletada com ID:', surveyId);
  } catch (error) {
    console.error('Erro ao deletar pesquisa:', error);
  }
}

export async function addRating(userId, surveyId, ratingType) {
  try {
    const validRatings = ['terrible', 'bad', 'neutral', 'good', 'excellent'];
    if (!validRatings.includes(ratingType)) {
      throw new Error('Tipo de nota inválido');
    }

    const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);
    await updateDoc(surveyRef, {
      [`ratings.${ratingType}`]: increment(1),
    });

    console.log('dados pesquisa', surveyId);
    console.log(
      `Nota ${ratingType} atualizada com sucesso na pesquisa com ID: ${surveyId}`,
    );
  } catch (error) {
    console.error('Erro ao atualizar nota:', error);
  }
}
