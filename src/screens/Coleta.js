import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome6'

const FeedbackButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Icon name={props.icon} color={props.color} size={50} />
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const Coleta = (props) => {

    const [feedbackLevel, setFeedbackLevel] = useState(0)

    const collectFeedback = (level) => {
        setFeedbackLevel(level)
        props.navigation.navigate('AgradecimentoParticipacao')
    }

    const gotoBackstage = () => {
        // Navega para a tela de configuração da pesquisa
        props.navigation.navigate('AcoesPesquisa')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.invisibleButton} onPress={gotoBackstage}></TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.text}>O que você achou do Carnaval 2024?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <FeedbackButton text='Péssimo' icon='face-frown' color='#d71616' onPress={() => collectFeedback(0)}/>
                <FeedbackButton text='Ruim' icon='face-frown-open' color='#ff360a' onPress={() => collectFeedback(1)}/>
                <FeedbackButton text='Neutro' icon='face-meh' color='#ffc631' onPress={() => collectFeedback(2)}/>
                <FeedbackButton text='Bom' icon='face-grin-wide' color='#37bd6d' onPress={() => collectFeedback(3)}/>
                <FeedbackButton text='Excelente' icon='face-grin-stars' color='#25bc22' onPress={() => collectFeedback(4)}/>
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 8,
    },
    textContainer: {
        flex: 2,
        justifyContent: 'flex-end',
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'AveriaLibre-Regular',
    },
    invisibleButton: {
        padding: 20,
        alignSelf: 'flex-end',
        backgroundColor: 'red',        
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular',
    }, 
})

export default Coleta;