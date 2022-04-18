import React from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from '../theme/styles';
import { useNavigation } from '@react-navigation/core'

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  return (
    <View style={styles.globalMargins}>
        <Text>Pagina2Screen</Text>

        <Button
          title="Ir a Pagina 3"
          onPress={ () => navigator.navigate('Pagina3Screen') }
        ></Button>

    </View>
  )
}
