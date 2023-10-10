import { color } from '@/constants/color';
import React, { FC } from 'react';
import {
  StatusBar as RNStatusBar,
  StatusBarProps,
  StyleSheet,
  View,
} from 'react-native';

const StatusBar: FC<StatusBarProps> = ({ ...props }) => {
  return (
    <View style={styles.StatusBar}>
      <RNStatusBar translucent barStyle="dark-content" {...props} />
    </View>
  );
};
export default StatusBar;
const styles = StyleSheet.create({
  StatusBar: {
    height: 39,
    backgroundColor: color.primary,
  },
});
