import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import {Dispatch, SetStateAction, useMemo, useState} from 'react';
import React, {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenType} from 'routes';

const materi = [
  {
    key: 'kucing',
    category: 'Hewan',
    textShow: 'Kucing',
    image: require('assets/images/materi/amber-kipp-75715CVEJhI-unsplash.jpg'),
    brief:
      'Kucing bisa tidur sampai 16 jam sehari. Wah, kamu bisa nggak ya kayak kucing?',
  },
  {
    key: 'kuda',
    category: 'Hewan',
    textShow: 'Kuda',
    image: require('assets/images/materi/sinitta-leunen-nUl8Iz_EAkE-unsplash.jpg'),
    brief: 'Kuda bisa mengenali suara temannya dari jauh! Hebat, ya?',
  },
  {
    key: 'rusa',
    category: 'Hewan',
    textShow: 'Rusa',
    image: require('assets/images/materi/didin-hasbullah-piNiZmg-wlc-unsplash.jpg'),
    brief: 'Rusa bisa menumbuhkan tanduk baru setiap tahun. Kok bisa, ya?',
  },
  {
    key: 'dog',
    category: 'Hewan',
    textShow: 'Anjing',
    image: require('assets/images/materi/anjing.jpg'),
    brief:
      'Anjing bisa mencium bau 100.000 kali lebih tajam dari manusia! Wah, kira-kira mereka bisa mencium apa aja, ya?',
  },
  {
    key: 'chiken',
    category: 'Hewan',
    textShow: 'Ayam',
    image: require('assets/images/materi/ayam.jpg'),
    brief: 'Tahukah kamu? Ayam bisa mengingat lebih dari 100 wajah ayam lain!',
  },
  {
    key: 'elephant',
    category: 'Hewan',
    textShow: 'Gajah',
    image: require('assets/images/materi/gajah.jpg'),
    brief:
      'Gajah bisa mengenali dirinya sendiri di cermin! Itu artinya, mereka punya otak yang sangat pintar dan bisa sadar siapa diri mereka. Wah, seperti manusia ya?',
  },
] as const;

const tab = ['Hewan', 'Buah', 'Angka'] as const;

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
  tabItemTouchable: {
    flexGrow: 1,
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
  tabActive: {backgroundColor: '#0A3180'},
  tabTextActive: {color: 'white'},
});

export default function MateriView({
  navigation,
}: NativeStackScreenProps<ScreenType, 'Materi'>) {
  const [tabActive, setTabActive] = useState<
    (typeof tab)[0] | (typeof tab)[1] | (typeof tab)[2]
  >('Hewan');
  const [finalSearch, setFinalSearch] = useState('');

  const listValue = useMemo(() => {
    return materi
      .filter(val => val.category === tabActive)
      .filter(val => {
        // Kalau Text Input Belum Kembalikan true
        if (!finalSearch) {
          return true;
        }
        const found = val.textShow
          .toLowerCase()
          .search(finalSearch.toLowerCase());
        return found !== -1;
      })
      .sort((a, b) => a.textShow.localeCompare(b.textShow));
  }, [finalSearch, tabActive]);

  return (
    <BackgroundWithSectionLayout>
      <>
        <SearchBar setFinalSearch={setFinalSearch} />
        {/* Active Category */}
        <View style={styles.tabContainer}>
          {tab.map(val => (
            <TouchableOpacity
              key={val}
              style={styles.tabItemTouchable}
              onPress={() => setTabActive(val)}>
              <View
                key={val}
                style={[
                  styles.tabItem,
                  val === tabActive ? styles.tabActive : {},
                ]}>
                <Text
                  style={[
                    styles.tabItemText,
                    val === tabActive ? styles.tabTextActive : {},
                  ]}>
                  {val}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.containerText}>
          {listValue.length === 0 && (
            <Text style={styles.textBold}>Maaf, Data tidak ditemukan</Text>
          )}
          {listValue.map(val => (
            <View key={val.key} style={styles.item}>
              <Image style={styles.itemImage} source={val.image} />
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

function SearchBar({
  setFinalSearch,
}: {
  setFinalSearch: Dispatch<SetStateAction<string>>;
}) {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.containerTextInput}>
      <TextInput
        style={styles.textInputStyle}
        placeholderTextColor="black"
        placeholder="Cari Materi"
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <TouchableHighlight
        onPress={() => setFinalSearch(search)}
        style={styles.touchableButtonStyle}
        underlayColor={'transparent'}
        activeOpacity={0.6}>
        <View style={styles.textInputButton}>
          <Text style={styles.textInputButtonText}>Cari</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
