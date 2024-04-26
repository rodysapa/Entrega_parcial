
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6';

const iconSize = 48;

const ActionButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Icon name={props.icon} size={iconSize} color="white" />
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        maxWidth: 128,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#2b1d62',
        padding: 30,
        alignItems: 'center',
        gap: 8,
        height: 160,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ActionButton