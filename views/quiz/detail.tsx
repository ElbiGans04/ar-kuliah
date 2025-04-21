import {
  EventListenerCallback,
  EventMapCore,
  StackNavigationState,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import {NativeStackNavigationEventMap} from 'node_modules/@react-navigation/native-stack/lib/typescript/commonjs/src';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
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
});

const answer = [
  {
    title: 'Apa saja ras kucing yang paling populer di dunia?',
    answer: [
      'Maine Coon, Siamese, Persian, Ragdoll',
      'Bengal, Sphynx, British Shorthair, Scottish Fold',
      'Abyssinian, Burmese, Munchkin, Exotic Shorthair',
      'Siamese, Russian Blue, Manx, Turkish Van',
    ],
  },
  {
    title: 'Mengapa kucing sering menjilati tubuhnya sendiri?',
    answer: [
      'Untuk memberi tanda teritorial',
      'Untuk menjaga kebersihan tubuhnya',
      'Untuk menenangkan diri',
      'Untuk mempercepat pertumbuhan bulu',
    ],
  },
];

export default function QuizDetailView({
  navigation,
}: NativeStackScreenProps<ScreenType, 'MateriDetail'>) {
  const [next, setNext] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [allowBack, setAllowBack] = useState(false);

  // Register Event
  useEffect(() => {
    const handler: EventListenerCallback<
      NativeStackNavigationEventMap &
        EventMapCore<StackNavigationState<ScreenType>>,
      'beforeRemove',
      true
    > = event => {
      console.log(`get called`);
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
      navigation.goBack();
    }
  }, [allowBack, navigation]);

  return (
    <BackgroundWithSectionLayout>
      <>
        <View style={styles.containerHeader}>
          <Text style={styles.textInfo}>Pertanyaan {next + 1} dari 2</Text>
          <Text style={styles.textHeader}>{answer[next].title}</Text>
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
          <ReactNativeModal isVisible={showModal2}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalHeading}>Selamat</Text>
              <Text>
                Anda telah menyelesaikan quiz. Anda mendapatkan point{' '}
                <Text style={styles.textBold}>sebesar 100/100</Text>
              </Text>

              {/* Button Action */}
              <View style={styles.modalContainerAction}>
                <TouchableOpacity
                  onPress={() => {
                    setShowModal2(false);
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

        <Image
          style={styles.image}
          source={require('../../assets/icons/Picture.png')}
        />

        {next <= 1 && (
          <>
            <View style={styles.containerText}>
              {answer[next].answer.map((val, index) => (
                <TouchableOpacity
                  key={`${val}-${index}`}
                  onPress={() => {
                    if (next !== 1) {
                      setNext(1);
                      return;
                    }

                    setShowModal2(true);
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
