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
        <Text style={styles.textHeader}>PILIH KATEGORI QUIZ</Text>
        <View style={styles.containerItem}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('QuizDetail');
            }}
            style={styles.item}>
            <View>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/Picture.png')}
              />
              <Text style={styles.itemText}>HEWAN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('QuizDetail');
            }}
            style={styles.item}>
            <View>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/Picture.png')}
              />
              <Text style={styles.itemText}>HEWAN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('QuizDetail');
            }}
            style={styles.item}>
            <View>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/Picture.png')}
              />
              <Text style={styles.itemText}>HEWAN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    </BackgroundWithSectionLayout>
  );
}
