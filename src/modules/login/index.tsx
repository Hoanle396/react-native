import Button from '@/components/Button';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = {};

const Login: FCC<Props> = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackRoute, 'login'>>();

  const onRegister = () => {
    navigation.navigate('register');
  };

  const onLogin = () => navigation.navigate('home');

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
        <Text style={styles.loginText}>Đăng Nhập</Text>
        <View style={styles.form}>
          <View style={styles.checkBoxForm}>
            <View />
            <Text style={styles.forGot}>Thay số đện thoại?</Text>
          </View>
          <View style={styles.formLogin}>
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput
              placeholder="Nhập số diện thoại"
              keyboardType="numeric"
              clearButtonMode="always"
              returnKeyType="go"
              style={styles.input}
            />
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.formLogin}>
            <Text style={styles.label}>Mật khẩu</Text>
            <TextInput
              placeholder="Nhập mật khẩu"
              keyboardType="visible-password"
              secureTextEntry
              clearButtonMode="always"
              textContentType="password"
              returnKeyType="go"
              style={styles.input}
            />
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.checkBoxForm}>
            <CheckBox
              rightText="Ghi nhớ"
              style={styles.flexOne}
              onClick={() => {}}
            />
            <Text style={styles.forGot}>Quên mật khẩu?</Text>
          </View>
        </View>
        <View style={styles.actionButton}>
          <Button variants="contained" onPress={onLogin}>
            Đăng Nhập
          </Button>
          <Button variants="outlined" onPress={onRegister}>
            Đăng kí
          </Button>
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

export default Login;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 33,
    width: '100%',
  },
  flexOne: {
    flex: 1,
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
  loginText: {
    fontSize: 17,
    fontWeight: '600',
  },
  formLogin: {
    width: '100%',
    paddingHorizontal: 24,
    display: 'flex',
    gap: 8,
  },
  forGot: {
    color: color.secondary.main,
    fontWeight: '600',
    fontSize: 13.9,
  },
  form: {
    width: '100%',
    display: 'flex',
    gap: 24,
  },
  checkBoxForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  label: {
    fontStyle: 'italic',
    fontSize: 13,
    color: color.text.main,
  },
  input: {
    fontStyle: 'italic',
    fontSize: 16,
    fontWeight: '600',
    color: color.text.main,
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
  dividerLine: {
    width: '100%',
    height: 1,
    backgroundColor: color.text.light,
  },
});
