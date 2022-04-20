import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../theme/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ( {navigation} : Props ) => {

  return (
    <View style={styles.globalMargins}>
        <Text style={styles.title}>Pagina Principal</Text>

        <Button
          title="Ir a Pagina 2"
          onPress={ () => navigation.navigate('Pagina2Screen') }
        ></Button>

        <Text style={styles.bodyText3}>Navegar con Parametros</Text>


        <TouchableOpacity
          onPress={() => navigation.navigate('NavigationApp', {
            id: 1,
            nombre: 'Pedro Pablo',
            direccion: 'Calle Falsa 123'
          })}
        >
          <Text style={styles.bodyText}>Pedro</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('NavigationApp', {
            id: 2,
            nombre: 'Juan Lara',
            direccion: 'Calle Falsa 123',
            salary: 30000,
            gender: 'male'
          })}
        >
          <Text style={styles.bodyText2}>Juan</Text>
        </TouchableOpacity>

    </View>
  )
}
