import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/styles';


interface Props extends StackScreenProps<any, any> {};

export const NavigationApp = ({ route, navigation } : Props) => {

  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre as any
    });
  }, [])

  return (
    <View>
      <Text style={styles.bodyText3}>
        {
          JSON.stringify(params,null,3)
        }
      </Text>
    </View>
  )
}
