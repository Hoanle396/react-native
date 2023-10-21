import Button from '@/components/Button';
import Header from '@/components/Header';
import { color } from '@/constants/color';
import { useToggle } from '@/hooks/useToggle';
import { FCC } from '@/types';
import { RootStackRoute } from '@/types/navigation';
import { Entypo, Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CheckBox from 'react-native-check-box';
type Props = {};

const Register: FCC<Props> = ({}) => {
  const [toggle, onToggle] = useToggle();
  const [toggleConfirm, onToggleConfirm] = useToggle();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackRoute, 'register'>>();
  const onBack = () => {
    navigation.canGoBack() && navigation.goBack();
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
            <Text style={styles.label}>
              Họ và tên{' '}
              <Fontisto name="asterisk" size={8} color={color.error.light} />
            </Text>
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
            <Text style={styles.label}>
              Số điện thoại{' '}
              <Fontisto name="asterisk" size={8} color={color.error.light} />
            </Text>
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
            <Text style={styles.label}>
              Mật khẩu{' '}
              <Fontisto name="asterisk" size={8} color={color.error.light} />
            </Text>
            <TextInput
              placeholder="Nhập mật khẩu"
              keyboardType="visible-password"
              secureTextEntry={toggle}
              clearButtonMode="never"
              textContentType="password"
              returnKeyType="go"
              style={styles.input}
            />
            {toggle ? (
              <Entypo
                name="eye"
                style={styles.eyeButton}
                size={24}
                onPress={onToggle}
                color={color.text.main}
              />
            ) : (
              <Entypo
                name="eye-with-line"
                style={styles.eyeButton}
                size={24}
                onPress={onToggle}
                color={color.text.main}
              />
            )}
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.formRegister}>
            <Text style={styles.label}>
              Xác nhận mật khẩu{' '}
              <Fontisto name="asterisk" size={8} color={color.error.light} />
            </Text>
            <TextInput
              placeholder="Xác nhận mật khẩu"
              keyboardType="visible-password"
              secureTextEntry={toggleConfirm}
              clearButtonMode="never"
              textContentType="password"
              returnKeyType="go"
              style={styles.input}
            />
            {toggleConfirm ? (
              <Entypo
                name="eye"
                style={styles.eyeButton}
                size={24}
                onPress={onToggleConfirm}
                color={color.text.main}
              />
            ) : (
              <Entypo
                name="eye-with-line"
                style={styles.eyeButton}
                size={24}
                onPress={onToggleConfirm}
                color={color.text.main}
              />
            )}
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.note}>
            <Text style={styles.noteTitle}>Lưu ý:</Text>
            <Text style={styles.noteContent}>
              Họ tên phải là tên trên các giấy tờ tùy thân như CMND/ CCCD/ Hộ
              Chiếu
            </Text>
            <Text style={styles.noteContent}>
              Mật khẩu phải có độ dài ít nhất 6 ký tự, bao gồm ít nhất:
            </Text>
            <View>
              <Text style={styles.noteSubContent}>• 1 ký tự hoa</Text>
              <Text style={styles.noteSubContent}>• 1 ký tự số</Text>
            </View>
          </View>
          <View style={styles.checkBoxForm}>
            <CheckBox
              style={styles.flexOne}
              onClick={() => {}}
              checkedCheckBoxColor={color.secondary.light}
              uncheckedCheckBoxColor={color.text.light}
              isChecked
              rightTextView={
                <View style={styles.termsOfService}>
                  <Text style={styles.read}>Tôi đã đọc và đồng ý với </Text>
                  <Text style={styles.tos}>Điều khoản sử dụng</Text>
                </View>
              }
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
    gap: 52,
    width: '100%',
    backgroundColor: color.white,
    marginTop: 42,
  },
  flexOne: {
    flex: 1,
  },
  formRegister: {
    width: '100%',
    paddingHorizontal: 24,
    display: 'flex',
    gap: 8,
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    bottom: 7,
    right: 26,
  },
  termsOfService: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  read: {
    fontSize: 13,
    fontWeight: '600',
    color: color.text.light,
  },
  tos: {
    fontSize: 13,
    fontWeight: '600',
    color: color.secondary.light,
    textDecorationLine: 'underline',
  },
  form: {
    width: '100%',
    display: 'flex',
    gap: 24,
  },
  note: {
    width: '100%',
    display: 'flex',
    gap: 12,
    paddingHorizontal: 18,
  },
  noteTitle: {
    color: color.error.light,
    fontSize: 13,
    fontWeight: '600',
  },
  noteContent: {
    fontSize: 13,
  },
  noteSubContent: {
    fontSize: 13,
    paddingLeft: 14,
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
