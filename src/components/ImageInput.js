import { useState } from 'react'
import {StyleSheet, Text, View, Image, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { launchImageLibrary } from 'react-native-image-picker'

const ImageInput = props => {
  const setImage = props.setImageCallback

  const [imageURI, setImagePath] = useState('')

  const selectFile = async () => {
    let result 
    try {
      result = await launchImageLibrary({mediaType: 'photo'})
    } catch (error) {
      console.log('Erro ao selecionar imagem da galeria: ', error)
      return
    }
    if (result.didCancel) return
    console.log(result.assets)
    setImagePath(result.assets[0].uri)
    setImage(result.assets[0])
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Imagem</Text>
      </View>
      <TouchableOpacity onPress={selectFile}>
        <View style={styles.cImageInput}>
          { imageURI ? (
            <>
              <Image
                style={styles.image}
                label="Imagem"
                source={{uri: imageURI}}
              />
            </>
          ) : (
            <Text style={styles.txt}>Galeria de imagens</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
  },
  cImageInput: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    width: 250,
    height: 75,
  },
  label: {
    fontFamily: 'AveriaLibre',
    textAlign: 'left',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  image: {
    width: 250,
    height: 75,
  },
  txt: {
    fontFamily: 'AveriaLibre',
    textAlign: 'center',
    fontSize: 16,
    color: '#939393',
  },
});

export default ImageInput;
