/* eslint-disable react-native/no-inline-styles */
import { IStudent } from '@/types/interfaces';
import { RootStackRoute } from '@/types/navigation';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type IProps = {
  item: IStudent;
  onPress: () => void;
};

const Examples = () => {
  const navigation = useNavigation<NavigationProp<RootStackRoute, 'home'>>();
  const [students] = useState<Array<IStudent>>([
    ...Array.from({ length: 4 })
      .fill(0)
      .map(() => ({
        id: Math.random().toString(),
        name: 'Hoanle',
        avatar:
          'https://img.freepik.com/free-photo/full-shot-kid-using-tablet-indoors_23-2150909724.jpg',
        dateOfBirth: new Date(2002, 2, 27),
      })),
  ]);

  const handlePress = (item: IStudent) => {
    navigation.navigate('detail', item);
  };
  const Student = ({ item, onPress }: IProps) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 150, height: 150, borderRadius: 5 }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: '500' }}>{item.name}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>
            {item.dateOfBirth.toLocaleDateString().slice(0, 10)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      <FlatList
        scrollEnabled={false}
        data={students}
        renderItem={({ item }) => (
          <Student item={item} onPress={() => handlePress(item)} />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 12, width: 12 }} />
        )}
      />
    </ScrollView>
  );
};

export default Examples;
