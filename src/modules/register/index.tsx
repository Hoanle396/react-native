import Button from '@/components/Button';
import Header from '@/components/Header';
import { color } from '@/constants/color';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CheckBox from 'react-native-check-box';
type Props = {};

const Register: FCC<Props> = ({}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackRoute, 'register'>>();
  const onBack = () => {
    navigation.canGoBack && navigation.goBack();
  };
  return (
    <>
      <Header
        title="Đăng Kí"
        leftBtnVariant="back"
        onPressLeftButton={onBack}
      />
      <View style={styles.root}>
        <View style={styles.form}>
          <View style={styles.formRegister}>
            <Text style={styles.label}>Họ và tên</Text>
            <TextInput
              placeholder="Nhập họ và tên"
              keyboardType="default"
              clearButtonMode="always"
              returnKeyType="go"
              style={styles.input}
            />
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.formRegister}>
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput
              placeholder="Nhập số điện thoại"
              keyboardType="numeric"
              clearButtonMode="always"
              returnKeyType="go"
              style={styles.input}
            />
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.formRegister}>
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
          <View style={styles.formRegister}>
            <Text style={styles.label}>Xác nhận mật khẩu</Text>
            <TextInput
              placeholder="Xác nhận mật khẩu"
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
              rightText="Tôi đã đọc và đồng ý với điều khoản sử dụng"
              style={styles.flexOne}
              onClick={() => {}}
            />
          </View>
        </View>
        <View style={styles.actionButton}>
          <Button variants="contained">Đăng ký tài khoản</Button>
        </View>
      </View>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 33,
    width: '100%',
    backgroundColor: color.white,
    marginTop: 43,
  },
  flexOne: {
    flex: 1,
  },
  formRegister: {
    width: '100%',
    paddingHorizontal: 24,
    display: 'flex',
    gap: 8,
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
    paddingHorizontal: 18,
  },
  label: {
    fontStyle: 'italic',
    fontSize: 13,
    fontWeight: '600',
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
  dividerLine: {
    width: '100%',
    height: 1,
    backgroundColor: color.text.light,
  },
});
