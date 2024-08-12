import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const SearchBar = props => {
  const placeholder = props.placeholder;
  const inputValue = props.inputValue;
  const onChangeText = props.onChangeText;

  return (
    <View style={styles.containerInput}>
      <Icon style={styles.iconStyle} name="magnifying-glass" size={30} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingLeft: 5,
    height: 32,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'AveriaLibre-Regular',
    color: '#3F92C5',
    backgroundColor: '#FFFFFF',
    paddingLeft: 5,
    height: 32,
    padding: 0,
  },
  iconStyle: {
    color: '#aaaaaa',
  },
});

export default SearchBar;
