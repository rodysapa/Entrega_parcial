import { StyleSheet, View, Text, Touchable, TouchableOpacity } from 'react-native' 

import HeaderNavigation from '../components/HeaderNavigation';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ActionButton from '../components/ActionButton';


const AcoesPesquisa = (props) => {

    return (
        <>
            <View style={styles.container}>
                <ActionButton icon="file-pen" text="Modificar pesquisa" onPress={() => console.log('Navega para algum lugar')} />
                <ActionButton icon="chalkboard" text="Coletar dados" onPress={() => props.navigation.navigate('Coleta')}/>
                <ActionButton icon="table-list" text="Relatório" onPress={() => props.navigation.navigate('Relatorio')}/>
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
})

export default AcoesPesquisa;