/* eslint-disable react-native/no-inline-styles */
import Button from '@/components/Button';
import { FCC } from '@/types';
import { IStudent } from '@/types/interfaces';
import { RootStackRoute } from '@/types/navigation';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, View } from 'react-native';
interface IPageProps {
  navigation: NativeStackNavigationProp<RootStackRoute, 'detail'>;
  route: RouteProp<{ params: IStudent }, 'params'>;
}

const Details: FCC<IPageProps> = ({ navigation, route: { params } }) => {
  return (
    <View>
      <Image
        source={{ uri: params.avatar }}
        style={{ width: 150, height: 150, borderRadius: 5 }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: '500' }}>{params.name}</Text>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>
          {params.dateOfBirth.toLocaleDateString().slice(0, 10)}
        </Text>
      </View>
      <Button
        variants="text"
        onPress={() => navigation.canGoBack() && navigation.goBack()}
      >
        Back to list
      </Button>
    </View>
  );
};

export default Details;
