import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import React, {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenType} from 'routes';

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A3180',
    textAlign: 'center',
  },
  containerItem: {
    marginTop: 16,
    columnGap: 10,
    rowGap: 24,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#CFCDCD',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  itemImage: {
    width: 'auto',
    height: 100,
    objectFit: 'contain',
  },
  itemText: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0A3180',
  },
});

export default function QuizView({
  navigation,
}: NativeStackScreenProps<ScreenType, 'Quiz'>) {
  return (
    <BackgroundWithSectionLayout>
      <>
        <Text style={styles.textHeader}>PILIH QUIZ</Text>
        <View style={styles.containerItem}>
          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('QuizDetail', {
                type: 'buah',
              });
            }}
            style={styles.item}>
            <View>
              <Image
                style={styles.itemImage}
                source={require('assets/images/quis/buah-buah.jpg')}
              />
              <Text style={styles.itemText}>Buah</Text>
            </View>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('QuizDetail', {
                type: 'hewan',
              });
            }}
            style={styles.item}>
            <View>
              <Image
                style={styles.itemImage}
                source={require('assets/images/quis/bg-icon-hewan.jpg')}
              />
              <Text style={styles.itemText}>Dino V1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('QuizDetail', {
                type: 'dino2',
              });
            }}
            style={styles.item}>
            <View>
              <Image
                style={styles.itemImage}
                source={require('assets/images/quis/bg-icon-hewan.jpg')}
              />
              <Text style={styles.itemText}>Dino V2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    </BackgroundWithSectionLayout>
  );
}
