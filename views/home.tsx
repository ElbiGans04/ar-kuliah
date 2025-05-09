import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppDetailContext, useIsDeviceSupportAR} from 'hooks/index';
import {useContext, useState} from 'react';
import React, {
  BackHandler,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
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
  modalContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderRadius: 10,
    gap: 24,
  },
  modalText: {
    color: '#0A3180',
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalContainerAction: {
    gap: 12,
  },
  touchableButtonStyle: {
    overflow: 'hidden',
  },
  itemButton: {
    backgroundColor: '#0A3180',
    padding: 16,
    borderRadius: 10,
  },
  itemButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button2: {
    backgroundColor: '#CFCDCD',
    padding: 16,
    borderRadius: 10,
  },
  button2Text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0A3180',
  },
});

export default function HomeView({
  navigation,
}: NativeStackScreenProps<ScreenType, 'Home'>) {
  const appInfo = useContext(AppDetailContext);
  const [modal, setModal] = useState(false);
  const isSupportAR = useIsDeviceSupportAR();
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.containerHeadParent}>
          <View style={styles.imageBackgroundContainer}>
            <Image
              style={styles.containerImageBackground}
              source={require('assets/images/bg.png')}
            />
          </View>
          <View style={styles.containerHead}>
            <Text style={styles.containerHeadTitle}>
              {appInfo.appNameLong.toUpperCase() || 'App Name'}
            </Text>
            <Image
              style={styles.containerImage}
              source={require('assets/images/logo.png')}
            />
          </View>
        </View>
        <View style={styles.containerBody}>
          {/* Mulai Ar */}
          {isSupportAR && (
            <TouchableOpacity
              onPress={() => {
                setModal(true);
              }}
              activeOpacity={0.7}>
              <View style={styles.button}>
                <Image source={require('assets/icons/Camera-white.png')} />
                <Text style={styles.buttonText}>MULAI AR</Text>
              </View>
            </TouchableOpacity>
          )}
          {/* Materi */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Materi');
            }}
            activeOpacity={0.7}>
            <View style={styles.button}>
              <Image source={require('assets/icons/Book.png')} />
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
              <Image source={require('assets/icons/Test-white.png')} />
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
              <Image source={require('assets/icons/Index-white.png')} />
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
              <Image source={require('assets/icons/Info-white.png')} />
              <Text style={styles.buttonText}>TENTANG</Text>
            </View>
          </TouchableOpacity>
          {/* Keluar Aplikasi */}
          {/* Tombol Keluar khusus android */}
          {Platform.OS === 'android' && (
            <TouchableOpacity
              onPress={() => {
                BackHandler.exitApp();
              }}
              activeOpacity={0.7}>
              <View style={styles.button}>
                <Image source={require('assets/icons/Logout.png')} />
                <Text style={styles.buttonText}>KELUAR APLIKASI</Text>
              </View>
            </TouchableOpacity>
          )}

          {/* Modal */}
          <View>
            <ReactNativeModal isVisible={modal}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>Pilih Model</Text>
                <View style={styles.modalContainerAction}>
                  <TouchableHighlight
                    style={styles.touchableButtonStyle}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    onPress={() => {
                      setModal(false);
                      navigation.navigate('Ar', {
                        type: 'dog',
                        imageTracking: true,
                      });
                    }}>
                    <View style={styles.itemButton}>
                      <Text style={styles.itemButtonText}>Anjing</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.touchableButtonStyle}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    onPress={() => {
                      setModal(false);
                      navigation.navigate('Ar', {
                        type: 'chiken',
                        imageTracking: true,
                      });
                    }}>
                    <View style={styles.itemButton}>
                      <Text style={styles.itemButtonText}>Ayam</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.touchableButtonStyle}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    onPress={() => {
                      setModal(false);
                      navigation.navigate('Ar', {
                        type: 'elephant',
                        imageTracking: true,
                      });
                    }}>
                    <View style={styles.itemButton}>
                      <Text style={styles.itemButtonText}>Gajah</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.touchableButtonStyle}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    onPress={() => {
                      setModal(false);
                      navigation.navigate('Ar', {
                        type: 'kucing',
                        imageTracking: true,
                      });
                    }}>
                    <View style={styles.itemButton}>
                      <Text style={styles.itemButtonText}>Kucing</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.touchableButtonStyle}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    onPress={() => {
                      setModal(false);
                      navigation.navigate('Ar', {
                        type: 'kuda',
                        imageTracking: true,
                      });
                    }}>
                    <View style={styles.itemButton}>
                      <Text style={styles.itemButtonText}>Kuda</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.touchableButtonStyle}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    onPress={() => {
                      setModal(false);
                      navigation.navigate('Ar', {
                        type: 'rusa',
                        imageTracking: true,
                      });
                    }}>
                    <View style={styles.itemButton}>
                      <Text style={styles.itemButtonText}>Rusa</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.touchableButtonStyle}
                    underlayColor={'transparent'}
                    activeOpacity={0.6}
                    onPress={() => setModal(false)}>
                    <View style={styles.button2}>
                      <Text style={styles.button2Text}>Kembali</Text>
                    </View>
                  </TouchableHighlight>
                </View>
              </View>
            </ReactNativeModal>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
