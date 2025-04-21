import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppDetailContext} from 'hooks/index';
import {useContext} from 'react';
import React, {
  BackHandler,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenType} from 'routes';

const styles = StyleSheet.create({
  container: {height: '100%', flex: 1},
  scrollViewContainer: {flex: 1},
  containerImage: {
    marginVertical: 20,
    width: 156,
    height: 156,
    objectFit: 'contain',
  },
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
    textAlign: 'center',
  },
  containerBody: {
    backgroundColor: '#FFFFFF',
    marginTop: -40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 20,
    rowGap: 10,
    width: 'auto',
  },
  button: {
    backgroundColor: '#0A3180',
    padding: 20,
    flex: 1,
    borderRadius: 30,
    // justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: 'auto',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 16,
  },
  containerImageBackground: {
    position: 'relative',
    width: 'auto',
    height: 500,
    top: 125,
    // left: 0,
    // right: 0,
    // bottom: 0,
    // objectFit: 'fill'
  },
  containerHeadParent: {
    position: 'relative',
  },
  imageBackgroundContainer: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#0A3180',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default function HomeView() {
  const appInfo = useContext(AppDetailContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreenType, 'Home'>>();

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.containerHeadParent}>
          <View style={styles.imageBackgroundContainer}>
            <Image
              style={styles.containerImageBackground}
              source={require('assets/bg.png')}
            />
          </View>
          <View style={styles.containerHead}>
            <Text style={styles.containerHeadTitle}>
              {appInfo.appNameLong.toUpperCase() || 'App Name'}
            </Text>
            <Image
              style={styles.containerImage}
              source={require('../assets/logo.png')}
            />
          </View>
        </View>
        <View style={styles.containerBody}>
          {/* Mulai Ar */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Materi');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Camera-white.png')} />
              <Text style={styles.buttonText}>MULAI AR</Text>
            </View>
          </TouchableOpacity>
          {/* Materi */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Materi');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Book.png')} />
              <Text style={styles.buttonText}>MATERI</Text>
            </View>
          </TouchableOpacity>
          {/* Quiz */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Quiz');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Test-white.png')} />
              <Text style={styles.buttonText}>QUIZ</Text>
            </View>
          </TouchableOpacity>
          {/* Panduan */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Help');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Index-white.png')} />
              <Text style={styles.buttonText}>PANDUAN</Text>
            </View>
          </TouchableOpacity>
          {/* Tentang Aplikasi */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Info-white.png')} />
              <Text style={styles.buttonText}>TENTANG</Text>
            </View>
          </TouchableOpacity>
          {/* Keluar Aplikasi */}
          <TouchableOpacity
            onPress={() => {
              BackHandler.exitApp();
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('../assets/icons/Logout.png')} />
              <Text style={styles.buttonText}>KELUAR APLIKASI</Text>
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
