
3+69  
import { View, Text, StyleSheet } from 'react-native'  

const AgradecimentoParticipacao = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Obrigado por participar da pesquisa!</Text>
            <Text style={styles.text}>Aguardamos você no próximo ano!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
    },  
    text: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
    }
})

export default AgradecimentoParticipacao;