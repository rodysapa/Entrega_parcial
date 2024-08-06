import { StyleSheet, View, Image } from 'react-native'
import HeaderNavigation from '../components/HeaderNavigation';
import { PieChart } from 'react-native-svg-charts'

// https://files.catbox.moe/3torkn.png

const Relatorio = () => {

    const data = [
        {
            key: 1,
            value: 60,
            svg: { fill: '#600080' },
            arc: { outerRadius: '130%', cornerRadius: 10,  }
        },
        {
            key: 2,
            value: 50,
            svg: { fill: '#9900cc' }
        },
        {
            key: 3,
            value: 40,
            svg: { fill: '#c61aff' }
        },
        {
            key: 4,
            value: 95,
            svg: { fill: '#d966ff' }
        },
        {
            key: 5,
            value: 35,
            svg: { fill: '#ecb3ff' }
        }
    ]
    return (
        <View style={styles.container}>
            <PieChart
                style={{ height: 200 }}
                outerRadius={'70%'}
                innerRadius={10}
                data={data}
            />
        </View>
        /*<View style={styles.container}>
            <Image style={styles.fakeReport} source={require('../../assets/images/fakereport.png')}/>
        </View>*/


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