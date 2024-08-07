import { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import app from '../firebase/config';
import { useSurvey } from '../Contexts/SurveyContext';

const db = getFirestore(app);

const Relatorio = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { selectedSurvey } = useSurvey();

    useEffect(() => {
        const fetchData = async () => {
            const auth = getAuth();
            const user = auth.currentUser;

            if (!user) {
                setError('Usuário não autenticado.');
                setLoading(false);
                return;
            }

            const userId = user.uid;
            const surveyId = selectedSurvey?.id;

            if (!surveyId) {
                setError('ID da pesquisa não encontrado.');
                setLoading(false);
                return;
            }

            try {
                const surveyRef = doc(db, 'users', userId, 'surveys', surveyId);
                const surveyDoc = await getDoc(surveyRef);

                if (surveyDoc.exists()) {
                    const ratings = surveyDoc.data().ratings;

                    if (ratings) {
                        const data = [
                            { key: 'terrible', value: ratings.terrible, svg: { fill: '#53D8D8' }, arc: { outerRadius: '130%', cornerRadius: 10, } },
                            { key: 'bad', value: ratings.bad, svg: { fill: '#EA7288' } },
                            { key: 'neutral', value: ratings.neutral, svg: { fill: '#5FCDA4' } },
                            { key: 'good', value: ratings.good, svg: { fill: '#6994FE' } },
                            { key: 'excellent', value: ratings.excellent, svg: { fill: '#F1CE7E' } },
                        ];

                        const totalReactions = ratings.terrible + ratings.bad + ratings.neutral + ratings.good + ratings.excellent;

                        if (totalReactions === 0) {
                            setError('Nenhuma reação encontrada na pesquisa.');
                        } else {
                            setData(data);
                        }
                    } else {
                        setError('Dados de avaliação não encontrados.');
                    }
                } else {
                    setError('Nenhuma pesquisa encontrada.');
                }
            } catch (error) {
                console.error('Erro ao obter dados da pesquisa:', error);
                setError('Erro ao obter dados da pesquisa.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedSurvey]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    if (data.length === 0) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Nenhum dado disponível para exibição.</Text>
            </View>
        );
    }

    return (
        <View>
            <PieChart 
                style={{ height: 300, backgroundColor: '#372775'}}
                outerRadius={'70%'}
                innerRadius={10}
                data={data}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#372775',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#372775',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#372775',
    },
    errorText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Relatorio;
