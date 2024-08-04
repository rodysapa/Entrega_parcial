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
export async function updateSurvey(userId, surveyId, {name, date, imageFile}) {
  try {
    const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);

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
        `surveys/${userId}/${name || currentData.name}/${imageFile.name}`,
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
    // Verifica se o tipo de nota é válido
    const validRatings = ['terrible', 'bad', 'neutral', 'good', 'excellent'];
    if (!validRatings.includes(ratingType)) {
      throw new Error('Tipo de nota inválido');
    }

    const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);

    // Atualiza a nota selecionada, adicionando +1
    await updateDoc(surveyRef, {
      [`ratings.${ratingType}`]: increment(1),
    });

    console.log(
      `Nota ${ratingType} atualizada com sucesso na pesquisa com ID: ${surveyId}`,
    );
  } catch (error) {
    console.error('Erro ao atualizar nota:', error);
  }
}
