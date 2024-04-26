import {View, StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import {useState, useEffect} from 'react';
import Header from '../components/Header';
import LabeledTextInput from '../components/LabeledTextInput';
import Button_Green from '../components/Button_Green';

const CreateAcount = props => {
  const [email, setEmail] = useState();
  const [emailValid, setEmailValid] = useState();

  useEffect(() => {
    email && email.trim() ? setEmailValid(false) : setEmailValid(true);
  }, [email]);
  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView>
        <View style={estilos.viewMother}>
          <View style={estilos.viewMiddle}>
            <View>
              <LabeledTextInput
                txtlabel="E-mail"
                label={email}
                setLabel={setEmail}
              />
              {emailValid && (
                <Text style={estilos.txtWarning}>Email Inválido</Text>
              )}
            </View>
            <Button_Green
              txtEntrar="RECUPERAR"
              onPress={() => props.navigation.pop()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewMother: {
    paddingHorizontal: '16%',
    backgroundColor: 'rgba(55, 39, 117, 1)',
    paddingVertical: '10%',
    flex: 1,
  },
  viewMiddle: {
    gap: 80,
  },
  txtWarning: {
    color: 'red',
  },
});

export default CreateAcount;
