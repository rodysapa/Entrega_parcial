import {StyleSheet, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'

const Coleta = () => {

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>O que você achou do Carnaval 2024?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Icon name='face-frown' color='#d71616' size={50} />
                    <Text style={styles.buttonText}>Péssimo</Text>
                </View>
                <View style={styles.button}>
                    <Icon name='face-frown-open' color='#ff360a' size={50} />
                    <Text style={styles.buttonText}>Ruim</Text>
                </View>
                <View style={styles.button}>
                    <Icon name='face-meh' color='#ffc631' size={50} />
                    <Text style={styles.buttonText}>Neutro</Text>
                </View>
                <View style={styles.button}>
                    <Icon name='face-grin-wide' color='#37bd6d' size={50} />
                    <Text style={styles.buttonText}>Bom</Text>
                </View>
                <View style={styles.button}>
                    <Icon name='face-grin-stars' color='#25bc22' size={50} />
                    <Text style={styles.buttonText}>Excelente</Text>
                </View>
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