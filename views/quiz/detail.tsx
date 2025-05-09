import {
  EventListenerCallback,
  EventMapCore,
  StackNavigationState,
} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  NativeStackNavigationEventMap,
} from '@react-navigation/native-stack';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import React, {useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  AppState,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import SoundPlayer from 'react-native-sound-player';
import {ScreenType} from 'routes';

const styles = StyleSheet.create({
  containerText: {
    gap: 24,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A3180',
    textAlign: 'center',
  },
  image: {
    width: 'auto',
    height: 256,
  },
  containerHeader: {
    gap: 24,
  },
  textInfo: {
    fontWeight: 700,
    color: '#0A3180',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#CFCDCD',
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0A3180',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    gap: 16,
  },
  modalHeading: {
    color: '#0A3180',
    fontSize: 20,
    fontWeight: 700,
  },
  textBold: {
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#CFCDCD',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  itemText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0A3180',
    textAlignVertical: 'center',
  },
  item2: {
    backgroundColor: '#0A3180',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  itemText2: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlignVertical: 'center',
  },
  modalContainerAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer3: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderRadius: 10,
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const answer = [
  {
    image: require('assets/images/quis/gajah-makan.jpg'),
    title: 'Gajah menggunakan apa untuk mengambil makanan?',
    answer: [
      'Taring',
      'Lidah',
      'Belalai',
      'Hidung biasa',
    ],
    rightAnswer: 'Belalai',
  },
  {
    image: require('assets/images/quis/kucing-mandi.jpg'),
    title: 'Mengapa kucing sering menjilati tubuhnya sendiri?',
    answer: [
      'Untuk memberi tanda teritorial',
      'Untuk menjaga kebersihan tubuhnya',
      'Untuk menenangkan diri',
      'Untuk mempercepat pertumbuhan bulu',
    ],
    rightAnswer: 'Untuk menjaga kebersihan tubuhnya',
  },
  {
    image: require('assets/images/quis/anjing-makan.png'),
    title: 'Anjing suka makan apa?',
    answer: [
      'Cokelat',
      'Dog food',
      'Es krim',
      'Permen',
    ],
    rightAnswer: 'Dog food',
  },
  {
    image: require('assets/images/quis/rusa-lari.jpg'),
    title: 'Rusa suka hidup di mana?',
    answer: [
      'Di kolam',
      'Di hutan',
      'Di langit',
      'Di laut',
    ],
    rightAnswer: 'Di hutan',
  },
  {
    image: require('assets/images/quis/anjing-menggonggong.jpg'),
    title: 'Anjing bersuara seperti apa?',
    answer: [
      'Meong',
      'Guk guk',
      'Kukuruyuk',
      'Moo',
    ],
    rightAnswer: 'Guk guk',
  },
];

function RandomArray(source: any[]) {
  const array = [...source];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export default function QuizDetailView({
  navigation,
}: NativeStackScreenProps<ScreenType, 'QuizDetail'>) {
  const [next, setNext] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState<{show: boolean; value: number}>({
    show: false,
    value: 0,
  });
  const [allowBack, setAllowBack] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [appReady, setAppReady] = useState(false);

  function PlayMusic() {
    try {
      setAppReady(false);
      SoundPlayer.playAsset(require('assets/songs/backsong.mp3'));
    } catch (err) {
      console.log('Gagal memutar Backsound');
    }
  }

  function StopMusic() {
    try {
      SoundPlayer.stop();
    } catch (err) {
      console.log('Failed To Stop Song');
    }
  }

  // Play Background Music
  useEffect(() => {
    PlayMusic();
  }, []);

  // Register Event
  // Prevent user to go back
  useEffect(() => {
    const handler: EventListenerCallback<
      NativeStackNavigationEventMap &
        EventMapCore<StackNavigationState<ScreenType>>,
      'beforeRemove',
      true
    > = event => {
      if (!allowBack) {
        event.preventDefault();
        setShowModal(true);
      }
    };
    navigation.addListener('beforeRemove', handler);

    return () => {
      navigation.removeListener('beforeRemove', handler);
    };
  }, [navigation, setShowModal, allowBack]);

  useEffect(() => {
    if (allowBack) {
      StopMusic();
      navigation.goBack();
    }
  }, [allowBack, navigation]);

  // Random Quistion
  const questionsRandom = useMemo(() => {
    const random = RandomArray(answer);
    return random.map((val: (typeof answer)[0]) => {
      const newVal = {...val};
      newVal.answer = RandomArray(newVal.answer);
      return newVal;
    });
  }, []);

  // Check Answer
  useEffect(() => {
    if (questionsRandom.length === selected.length) {
      const rateRight = questionsRandom.reduce(
        (prev, currentVal, currentIndex) => {
          return (
            prev + (currentVal.rightAnswer === selected[currentIndex] ? 1 : 0)
          );
        },
        0,
      );
      setShowModal2({
        show: true,
        value: Math.round((rateRight / questionsRandom.length) * 100),
      });
    }
  }, [selected, questionsRandom]);

  // Background
  useEffect(() => {
    const eventListener = AppState.addEventListener('change', event => {
      if (event === 'active') {
        PlayMusic();
      } else {
        StopMusic();
      }
    });

    return () => {
      eventListener.remove();
    };
  }, []);

  // Repeat Song
  useEffect(() => {
    const listener = SoundPlayer.addEventListener('FinishedPlaying', () => {
      PlayMusic();
    });

    const listener2 = SoundPlayer.addEventListener('FinishedLoading', () => {
      setAppReady(true);
    });

    return () => {
      listener.remove();
      listener2.remove();
    };
  }, []);

  return (
    <BackgroundWithSectionLayout>
      <>
        <View style={styles.containerHeader}>
          <Text style={styles.textInfo}>Pertanyaan {next + 1} dari {questionsRandom.length}</Text>
          <Text style={styles.textHeader}>{questionsRandom[next].title}</Text>
        </View>

        <View>
          <ReactNativeModal isVisible={showModal}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeading}>Peringatan</Text>
              <Text>
                Anda yakin ingin kembali ? Anda akan{' '}
                <Text style={styles.textBold}>kehilangan semua perubahan</Text>{' '}
                yang dilakukan.
              </Text>

              {/* Button Action */}
              <View style={styles.modalContainerAction}>
                <TouchableOpacity
                  onPress={() => {
                    setAllowBack(true);
                  }}
                  style={styles.item}>
                  <View>
                    <Text style={styles.itemText}>Lanjutkan</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setShowModal(false);
                  }}
                  style={styles.item2}>
                  <View>
                    <Text style={styles.itemText2}>Batalkan</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ReactNativeModal>
        </View>

        {/* Modal 2 */}
        <View>
          <ReactNativeModal isVisible={showModal2.show}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeading}>
                {showModal2.value < 70 ? 'Coba Lagi' : 'Selamat'}
              </Text>
              <Text>
                Anda telah menyelesaikan quiz. Anda{' '}
                {showModal2.value < 70 && 'Hanya'} mendapatkan point{' '}
                <Text style={styles.textBold}>
                  sebesar {showModal2.value}/100
                </Text>
              </Text>

              {/* Button Action */}
              <View style={styles.modalContainerAction}>
                <TouchableOpacity
                  onPress={() => {
                    setShowModal2({show: false, value: 0});
                    setAllowBack(true);
                  }}
                  style={styles.item}>
                  <View>
                    <Text style={styles.itemText}>Lanjutkan</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ReactNativeModal>
        </View>

        {/* Modal 3 */}
        <View>
          <ReactNativeModal isVisible={!appReady}>
            <View style={styles.modalContainer3}>
              <ActivityIndicator size="large" color="#0A3180" />
              <Text style={styles.modalHeading}>Memuat</Text>
            </View>
          </ReactNativeModal>
        </View>

        {next <= answer.length - 1 && (
          <>
            <Image style={styles.image} source={questionsRandom[next].image} />
            <View style={styles.containerText}>
              {questionsRandom[next].answer.map((val, index) => (
                <TouchableOpacity
                  key={`${val}-${index}`}
                  onPress={() => {
                    setSelected(selectedValue => {
                      return [...selectedValue, val];
                    });

                    // Prevent ketika sudah tidak ada soal lagi
                    if (next !== answer.length - 1) {
                      setNext(nextIndex => nextIndex + 1);
                    }
                  }}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{val}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </>
    </BackgroundWithSectionLayout>
  );
}
