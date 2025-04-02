import {useNavigation} from '@react-navigation/native';
import React, {Button, Text, View} from 'react-native';

function Home() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This Is Home Page</Text>
      <Button
        onPress={() => {
          navigation.navigate('About' as never);
        }}
        title="Go To About"
      />
       <Button
        onPress={() => {
          navigation.navigate('Ar' as never);
        }}
        title="Go To Ar"
      />
    </View>
  );
}

export default Home;
