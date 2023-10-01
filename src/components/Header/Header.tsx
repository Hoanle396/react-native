/* eslint-disable react/no-unstable-nested-components */
import { color } from '@/constants/color';
import Icon from '@expo/vector-icons/Ionicons';
import { Header, HeaderOptions, Layout } from '@react-navigation/elements';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../Button';

export interface HeaderProps extends HeaderOptions {
  variant?: 'primary' | 'white' | 'secondary';
  leftBtnVariant?: 'skip' | 'close' | 'back';
  rightBtnVariant?: 'new' | 'calendar' | 'info' | 'search' | 'add' | 'home';
  onPressLeftButton?: () => void;
  // onPressSkipButton?: () => void;
  // onPressBackButton?: () => void;
  onPressRightButton?: () => void;
  // filled up the rest of the props from @react-navigation/elements/src/Header/Header
  modal?: boolean;
  layout?: Layout;
  title: string | JSX.Element;
  subTitle?: string;
  headerTitleAlign?: 'left' | 'center';
}
const HeaderJP = React.memo(function HeaderJP({
  variant,
  leftBtnVariant,
  rightBtnVariant,
  onPressLeftButton,
  onPressRightButton,
  title,
  headerTitleAlign = 'center',
  ...props
}: HeaderProps) {
  const backgroundColor =
    !variant || variant === 'white'
      ? color.white
      : variant === 'secondary'
      ? color.secondary.main
      : color.primary;
  const elementColor =
    !variant || variant === 'white'
      ? color.text.dark
      : variant === 'secondary'
      ? color.white
      : color.white;

  let headerLeft = props.headerLeft;
  let headerRight = props.headerRight;
  //LeftButton
  if (
    !headerLeft &&
    onPressLeftButton &&
    (leftBtnVariant == null || leftBtnVariant === 'close')
  ) {
    headerLeft = () => (
      <TouchableOpacity onPress={onPressLeftButton}>
        <Icon name="close" size={24} color={elementColor} />
      </TouchableOpacity>
    );
  }

  if (!headerLeft && onPressLeftButton && leftBtnVariant === 'back') {
    headerLeft = () => (
      <TouchableOpacity onPress={onPressLeftButton}>
        <Icon name="md-arrow-back" size={24} color={elementColor} />
      </TouchableOpacity>
    );
  }

  if (!headerLeft && onPressLeftButton && leftBtnVariant === 'skip') {
    headerLeft = () => (
      <Button
        variants="text"
        style={styles.padding}
        onPress={onPressLeftButton}
      >
        Skip
      </Button>
    );
  }

  //Right button
  if (
    !headerRight &&
    onPressRightButton &&
    (rightBtnVariant === 'new' || rightBtnVariant == null)
  ) {
    headerRight = () => (
      <Button
        variants="text"
        style={styles.padding}
        onPress={onPressLeftButton}
      >
        Add new
      </Button>
    );
  }

  if (!headerRight && onPressRightButton && rightBtnVariant === 'calendar') {
    headerRight = () => (
      <TouchableOpacity onPress={onPressRightButton}>
        <Icon name="calendar" size={24} fill={elementColor} />
      </TouchableOpacity>
    );
  }

  if (!headerRight && onPressRightButton && rightBtnVariant === 'info') {
    headerRight = () => (
      <TouchableOpacity onPress={onPressRightButton}>
        <Icon name="information-circle" size={24} fill={elementColor} />
      </TouchableOpacity>
    );
  }

  if (!headerRight && onPressRightButton && rightBtnVariant === 'add') {
    headerRight = () => (
      <TouchableOpacity onPress={onPressRightButton}>
        <Icon name="md-add-circle-outline" size={24} fill={elementColor} />
      </TouchableOpacity>
    );
  }

  if (!headerRight && onPressRightButton && rightBtnVariant === 'search') {
    headerRight = () => (
      <TouchableOpacity onPress={onPressRightButton}>
        <Icon name="search" size={24} fill={elementColor} />
      </TouchableOpacity>
    );
  }

  if (!headerRight && onPressRightButton && rightBtnVariant === 'home') {
    headerRight = () => (
      <TouchableOpacity onPress={onPressRightButton}>
        <Icon name="home" size={24} fill={elementColor} />
      </TouchableOpacity>
    );
  }
  const isStringTitle = typeof title === 'string';

  return (
    <Header
      headerTitle={({ children }) => {
        return (
          <View>
            {isStringTitle ? (
              <View style={styles.header}>
                <Text
                  style={[styles.textHeader, { color: elementColor }]}
                >{`${children}`}</Text>
              </View>
            ) : (
              title
            )}
          </View>
        );
      }}
      title={isStringTitle ? title : ''}
      headerLeft={headerLeft}
      headerRight={headerRight}
      headerLeftContainerStyle={styles.headerLeftContainer}
      headerRightContainerStyle={styles.headerRightContainer}
      headerStyle={{
        backgroundColor,
      }}
      headerTitleAlign={headerTitleAlign}
      {...props}
    />
  );
});

export default HeaderJP;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    padding: 6,
  },
  textHeader: {
    fontSize: 17,
    fontWeight: '600',
  },
  headerLeftContainer: {
    paddingLeft: 12,
    justifyContent: 'center',
  },
  headerRightContainer: {
    paddingRight: 12,
    justifyContent: 'center',
  },
});
