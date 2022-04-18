import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import { styles } from '../theme/styles';

interface Props extends StackScreenProps<any, any>{};

export const Pagina1Screen = ( {navigation} : Props ) => {

  return (
    <View style={styles.globalMargins}>
        <Text>Pagina1Screen</Text>

        <Button
          title="Ir a Pagina 2"
          onPress={ () => navigation.navigate('Pagina2Screen') }
        ></Button>
    </View>
  )
}
