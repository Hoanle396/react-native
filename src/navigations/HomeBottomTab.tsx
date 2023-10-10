import TabBarIcon from '@/components/TabBarIcon';
import { color } from '@/constants/color';
import Examples from '@/modules/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

const Tab = createBottomTabNavigator();

const HomeBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: props => (
          <TabBarIcon {...props} navigation={navigation} route={route} />
        ),
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: color.text.main,
        header: () => null,
      })}
    >
      <Tab.Screen
        name="doctor"
        options={{ title: 'Đăng ký khám' }}
        component={Examples}
      />
      <Tab.Screen
        name="information"
        options={{ title: 'Thông tin khám' }}
        component={Examples}
      />
      <Tab.Screen
        name="profile"
        options={{ title: 'Hồ sơ' }}
        component={Examples}
      />
      <Tab.Screen
        name="settings"
        options={{ title: 'Cài đặt' }}
        component={Examples}
      />
    </Tab.Navigator>
  );
};
export default HomeBottomTab;
