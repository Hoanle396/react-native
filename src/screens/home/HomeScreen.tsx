import Button from '@/components/Button';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = {};

const HomeScreen: FCC<Props> = ({}) => {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <View style={styles.logo}>
          <Image
            style={styles.image}
            source={require('@/assets/logo.png')}
            alt="Logo Image"
          />
          <Text style={styles.textLogo}>VnCare</Text>
        </View>

        <View style={styles.actionButton}>
          <Button variants="contained">Đăng Nhập</Button>
          <Button variants="outlined">Đăng kí</Button>
          <Button
            variants="text"
            textStyle={{
              color: color.secondary.main,
            }}
          >
            Đăng nhập với VNPT ID
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 33,
    width: '100%',
  },
  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    gap: 13,
    marginTop: 33,
  },
  textLogo: {
    height: 48,
    color: color.secondary.light,
    fontSize: 48,
    fontWeight: '500',
  },
  actionButton: {
    width: '100%',
    paddingHorizontal: 16,
    display: 'flex',
    gap: 12,
  },
  image: {
    alignSelf: 'center',
    width: 80,
    height: 80,
  },
});
