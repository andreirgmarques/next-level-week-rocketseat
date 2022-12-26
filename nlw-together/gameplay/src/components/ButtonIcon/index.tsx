import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
  Text,
  Image,
  View,
  ImageSourcePropType
} from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string,
  image: ImageSourcePropType,
}

export function ButtonIcon({ title, image, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={image} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
};

