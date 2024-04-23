import { StyleSheet, View, Text } from 'react-native' 

import HeaderNavigation from '../components/HeaderNavigation';
import Icon from 'react-native-vector-icons/FontAwesome6';

const AcoesPesquisa = () => {

    const iconSize = 50;

    return (
        <>
            <HeaderNavigation title="Carnaval" />
            <View style={styles.container}>
                <View style={styles.button}>
                    <Icon name="file-pen" size={iconSize} color="white" />
                    <Text style={styles.text}>Modificar</Text>
                </View>
                <View style={styles.button}>
                    <Icon name="chalkboard" size={iconSize} color="white" />
                    <Text style={styles.text}>Coletar Dados</Text>
                </View>
                <View style={styles.button}>
                    <Icon name="table-list" size={iconSize} color="white" />
                    <Text style={styles.text}>Relatório</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        height: 'auto',
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
    },
    button: {
        backgroundColor: '#2b1d62',
        padding: 30,
        alignItems: 'center',
        gap: 8
    }
})

export default AcoesPesquisa;