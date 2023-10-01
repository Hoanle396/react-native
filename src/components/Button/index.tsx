import { color } from '@/constants/color';
import { FCC } from '@/types';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

type Props = TouchableOpacityProps & {
  variants?: 'contained' | 'outlined' | 'text';
  textStyle?: StyleProp<TextStyle>;
};

const Button: FCC<Props> = ({
  children,
  style,
  textStyle,
  variants = 'contained',
  ...props
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.button,
          variants === 'contained' && styles.containedButton,
          variants === 'text' && styles.textButton,
          style,
        ]}
        {...props}
      >
        <Text
          style={[
            styles.buttonText,
            variants === 'contained' && styles.containedButton,
            textStyle,
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: color.primary,
    fontSize: 15,
    fontWeight: '500',
  },
  containedButton: {
    backgroundColor: color.primary,
    color: '#ffffff',
  },
  textButton: {
    borderWidth: 0,
  },
  textButtonText: {
    color: color.secondary.main,
  },
});
