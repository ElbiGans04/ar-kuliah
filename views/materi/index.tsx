import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import React, {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {ScreenType} from 'routes';

const materi = [
  {
    key: 'kucing',
    textShow: 'Kucing',
    brief:
      'Kucing bisa tidur sampai 16 jam sehari. Wah, kamu bisa nggak ya kayak kucing?',
  },
  {
    key: 'kuda',
    textShow: 'Kuda',
    brief: 'Kuda bisa mengenali suara temannya dari jauh! Hebat, ya?',
  },
  {
    key: 'rusa',
    textShow: 'Rusa',
    brief: 'Rusa bisa menumbuhkan tanduk baru setiap tahun. Kok bisa, ya?',
  },
] as const;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerText: {
    gap: 24,
  },
  textBold: {
    fontWeight: 'bold',
  },
  tautan: {
    color: 'blue',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  textInputStyle: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 18,
    backgroundColor: '#CFCDCD',
    color: 'black',
    fontWeight: 'bold',
    flexGrow: 6,
    // flexShrink: 1
  },
  containerTextInput: {
    flex: 1,
    flexDirection: 'row',
  },
  textInputButton: {
    backgroundColor: '#0A3180',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderTopEndRadius: 10,
    borderEndEndRadius: 10,
    overflow: 'hidden',
  },
  textInputButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  touchableButtonStyle: {
    overflow: 'hidden',
  },
  tabContainer: {
    backgroundColor: '#CFCDCD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 10,
  },
  tabItem: {
    flexGrow: 1,
    padding: 10,
    borderRadius: 10,
  },
  tabItemText: {
    textAlign: 'center',
    color: '#0A3180',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#CFCDCD',
    borderRadius: 16,
    padding: 16,
  },
  itemHead: {
    color: '#0A3180',
    fontSize: 18,
    fontWeight: 700,
  },
  itemText: {
    color: '#0A3180',
    fontWeight: 700,
  },
  itemButton: {
    backgroundColor: '#0A3180',
    padding: 10,
    borderRadius: 10,
  },
  itemButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemImage: {
    width: 'auto',
    height: 255,
  },
  itemContainerText: {
    marginTop: 10,
    marginBottom: 16,
  },
});

export default function MateriView() {
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreenType, 'Materi'>>();

  return (
    <BackgroundWithSectionLayout>
      <>
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor="black"
            placeholder="Cari Materi"
          />
          <TouchableHighlight
            style={styles.touchableButtonStyle}
            underlayColor={'transparent'}
            activeOpacity={0.6}>
            <View style={styles.textInputButton}>
              <Text style={styles.textInputButtonText}>Cari</Text>
            </View>
          </TouchableHighlight>
        </View>

        {/* Active Category */}
        <View style={styles.tabContainer}>
          <View style={[styles.tabItem, {backgroundColor: '#0A3180'}]}>
            <Text style={[styles.tabItemText, {color: 'white'}]}>Hewan</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabItemText}>Buah</Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabItemText}>Angka</Text>
          </View>
        </View>

        <View style={styles.containerText}>
          {materi.map(val => (
            <View key={val.key} style={styles.item}>
              <Image
                style={styles.itemImage}
                source={require('../../assets/icons/Picture.png')}
              />
              <View style={styles.itemContainerText}>
                <Text style={styles.itemHead}>{val.textShow}</Text>
                <Text style={styles.itemText}>{val.brief}</Text>
              </View>
              <TouchableHighlight
                style={styles.touchableButtonStyle}
                underlayColor={'transparent'}
                activeOpacity={0.6}
                onPress={() => {
                  navigation.navigate('MateriDetail', {
                    type: val.key,
                  });
                }}>
                <View style={styles.itemButton}>
                  <Text style={styles.itemButtonText}>Lihat Selengkapnya</Text>
                </View>
              </TouchableHighlight>
            </View>
          ))}
        </View>
      </>
    </BackgroundWithSectionLayout>
  );
}
