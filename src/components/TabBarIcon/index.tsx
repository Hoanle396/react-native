import React from 'react';
import Icon from '@expo/vector-icons/Fontisto';

const TabBarIcon = ({ color, size, route, navigation }) => {
  let iconName: 'doctor' | 'list-2' | 'person' | 'player-settings';

  if (route.name === 'doctor') {
    iconName = 'doctor';
  } else if (route.name === 'information') {
    iconName = 'list-2';
  } else if (route.name === 'profile') {
    iconName = 'person';
  } else if (route.name === 'settings') {
    iconName = 'player-settings';
  }
  return (
    <Icon
      name={iconName}
      size={size}
      color={color}
      onPress={() => {
        navigation.navigate(route.name);
      }}
    />
  );
};
export default TabBarIcon;
