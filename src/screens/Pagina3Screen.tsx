import React from 'react';
import {View, Text, Button} from 'react-native';
import { styles } from '../theme/styles';

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation} : Props) => {
  return (
    <View style={styles.globalMargins}>
        <Text>Pagina3Screen</Text>

        <Button
          title="Regresar"
          onPress={ () => navigation.pop() }
        ></Button>

<Button
          title="Ir a Pagina 1"
          onPress={ () => navigation.popToTop() }
        ></Button>

    </View>
  )
}
