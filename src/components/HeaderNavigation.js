import Icon from 'react-native-vector-icons/FontAwesome6';
import { StyleSheet, Text, View } from 'react-native'

const HeaderNavigation = (props) => {
    return (
        <View style={styles.container}>
            <Icon name="arrow-left" size={25} color={'white'}/>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 20,
            backgroundColor: '#2b1d62',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
        },
        text: {
            fontSize: 24,
            fontFamily: 'AveriaLibre-Regular',
            color: 'white'
        }
    }
)

export default HeaderNavigation;