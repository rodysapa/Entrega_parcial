import {View, Text, StyleSheet, Button, Touchable} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {useAuth} from '../Contexts/AuthContext';

const CustomDrawer = props => {
  const auth = useAuth();

  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text style={styles.email}>usuario@dominio.com</Text>
      </View>
      <View style={styles.lineStyle} />
      <DrawerItemList {...props} />
      <DrawerItem
        style={{marginTop: 150, marginBottom: 30}}
        labelStyle={styles.item}
        icon={() => (
          <Icon style={styles.icon} name="logout" size={32} color="#FFFFFF" />
        )}
        label="Sair"
        onPress={() => {
          auth.logout();
          props.navigation.popToTop();
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 1,
    borderColor: '#ECF8FF',
    marginTop: 20,
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 20,
  },
  email: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
    marginTop: 5,
  },
  item: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: 'white',
  },
  icon: {
    marginLeft: 24,
    marginRight: -24,
  },
});
