import {StyleSheet, TouchableOpacity, Text} from 'react-native'

const ModalButton = (props) => {
    return (
        <TouchableOpacity style={{...styles.container, backgroundColor: props.backgroundColor}} onPress={props.onPress}>
            <Text style={{...styles.text, color: props.textColor}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        fontSize: 16,
    }
})

export default ModalButton