import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { AppDetailContext } from '../hooks';
import { useContext } from 'react';
import React, {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenType} from 'routes';

const styles = StyleSheet.create({
  container: {height: '100%', flex: 1},
  scrollViewContainer: {height: '100%', flex: 1},
  containerHead: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 50,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeadTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  containerBody: {
    backgroundColor: '#D9D9D9',
    marginTop: -40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 25,
    columnGap: 15,
    justifyContent: 'center',
    flexShrink: 1,
  },
  button: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default function HomeView () {
  const appInfo = useContext(AppDetailContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreenType, 'Home'>>();

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <LinearGradient colors={['#513CCA', '#281E64']}>
          <View style={styles.containerHead}>
            <Text style={styles.containerHeadTitle}>{appInfo.appNameLong || 'App Name'}</Text>
            <Image source={require('../assets/icons/Picture.png')} />
          </View>
        </LinearGradient>
        <View style={styles.containerBody}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Materi');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Camera.png')} />
              <Text style={styles.buttonText}>Materi</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Quiz');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Test.png')} />
              <Text style={styles.buttonText}>Quiz</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Help');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Index.png')} />
              <Text style={styles.buttonText}>Panduan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Info.png')} />
              <Text style={styles.buttonText}>Tentang</Text>
            </View>
          </TouchableOpacity>
          {/* <Button
            onPress={() => {
              navigation.navigate('About');
            }}
            title="Go To About"
          />
          <Button
            onPress={() => {
              navigation.navigate('Ar');
            }}
            title="Go To Ar"
          /> */}
        </View>
      </View>
    </ScrollView>
  );
}
