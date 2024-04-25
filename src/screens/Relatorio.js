import { StyleSheet, View, Image } from 'react-native'
import HeaderNavigation from '../components/HeaderNavigation';

// https://files.catbox.moe/3torkn.png

const Relatorio = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.fakeReport} source={require('../../assets/images/fakereport.png')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#372775'
    },
    fakeReport: {
        flex: 1,
        width: null,
        resizeMode: 'contain'
    }
})

export default Relatorio;