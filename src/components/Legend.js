import { Text, View, StyleSheet } from 'react-native';

const Legend = (props) => {
  return (
    <View style={estilos.legend}>
      <View style={[estilos.square, { backgroundColor: props.squareColor}]}></View>
      <Text style={estilos.textLegend}>{props.txtLegend}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  square: {
    width: 25,
    height: 25,
  },
  textLegend: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 25,
  },
});

export default Legend;
