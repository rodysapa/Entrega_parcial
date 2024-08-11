import {View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import LabeledTextInput from './LabeledTextInput';
import Icon from 'react-native-vector-icons/FontAwesome6';

const LabelTextInput_Icon = ({label, inputValue, onChangeText}) => {
  return (
    <View style={styles.txtInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputIcon}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={onChangeText}
          inputMode="DATA"
        />
        <Icon name="calendar" size={20} color="gray" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'left',
    fontSize: 20,
    color: '#FFFFFF',
  },
  input: {
    fontSize: 18,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    flex: 0.99,
  },
  txtInputContainer: {
    marginTop: 10,
  },
  inputIcon: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 5,
    paddingRight: 5,
    height: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default LabelTextInput_Icon;
