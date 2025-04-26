import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import React, {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {ScreenType} from 'routes';

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerText: {
    gap: 10,
  },
  textBold: {
    fontWeight: 'bold',
  },
  tautan: {
    color: 'blue',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
  image: {
    width: 'auto',
    height: 300,
  },
  touchableButtonStyle: {
    overflow: 'hidden',
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
});

const materi = {
  kucing: {
    image: require('../../assets/materi/amber-kipp-75715CVEJhI-unsplash.jpg'),
    content: [
      {
        head: 'Apa itu Kucing ?',
        body: [
          `Kucing adalah hewan peliharaan yang lucu dan menggemaskan. Mereka
              sering tinggal di rumah bersama manusia, dan bisa memiliki berbagai
              warna dan bentuk bulu.`,
        ],
      },
      {
        head: 'Ciri-ciri Kucing :',
        body: [
          `Kucing juga punya ekor panjang yang bisa bergerak-gerak.`,
          `Mereka memiliki mata besar yang bisa melihat dengan sangat baik,
              terutama di malam hari.`,
          `Kucing punya bulu yang lembut dan bisa berwarna putih, hitam,
              abu-abu, cokelat, atau kombinasi warna.`,
        ],
      },
      {
        head: 'Makanan Kucing, Apa itu ?',
        body: [
          `Kucing makan makanan khusus, seperti makanan kucing kering atau
              makanan basah yang dibeli di toko hewan. Mereka juga suka makan ikan
              atau ayam yang dimasak.`,
        ],
      },
    ],
  },
  rusa: {
    image: require('../../assets/materi/didin-hasbullah-piNiZmg-wlc-unsplash.jpg'),
    content: [
      {
        head: 'Apa itu Rusa ?',
        body: [
          `Rusa adalah hewan berkaki empat yang hidup di hutan, padang rumput, dan pegunungan. Rusa dikenal karena memiliki tanduk yang tumbuh di kepalanya, terutama pada rusa jantan.`,
        ],
      },
      {
        head: 'Ciri-ciri Rusa :',
        body: [
          `Memiliki tubuh ramping dan kaki panjang untuk berlari cepat.`,
          `Tanduknya bisa tumbuh besar dan rontok setiap tahun.`,
          `Bulunya berwarna cokelat, ada yang berbintik putih seperti rusa tutul.`,
        ],
      },
      {
        head: 'Makanan Rusa, Apa itu ?',
        body: [
          `Rusa adalah hewan pemakan tumbuhan (herbivora). Mereka suka makan rumput, daun, dan buah-buahan di hutan.`,
        ],
      },
    ],
  },
  kuda: {
    image: require('../../assets/materi/sinitta-leunen-nUl8Iz_EAkE-unsplash.jpg'),
    content: [
      {
        head: 'Apa itu Kuda ?',
        body: [
          `Kuda adalah hewan besar yang biasa digunakan untuk berkendara atau bekerja di ladang. Kuda memiliki tubuh yang kuat, kaki yang panjang, dan ekor yang lebat.`,
        ],
      },
      {
        head: 'Ciri-ciri Kuda :',
        body: [
          `Tubuhnya besar dan kuat, dengan kaki yang panjang untuk berlari cepat.`,
          `Memiliki ekor panjang yang digunakan untuk mengusir lalat dan serangga.`,
          `Kuda memiliki bulu yang halus dan bisa berwarna cokelat, hitam, putih, atau campuran.`,
        ],
      },
      {
        head: 'Makanan Kuda, Apa itu ?',
        body: [
          `Kuda adalah hewan pemakan tumbuhan (herbivora). Mereka suka makan rumput, jerami, dan kadang buah-buahan.`,
        ],
      },
    ],
  },
};

export default function MateriDetailView({
  route,
  navigation,
}: NativeStackScreenProps<ScreenType, 'MateriDetail'>) {
  const paramType = route.params.type;
  const selectedMateri = materi[paramType];

  return (
    <BackgroundWithSectionLayout>
      <>
        <Image style={styles.image} source={selectedMateri.image} />
        {selectedMateri &&
          selectedMateri.content.map((val, index) => {
            return (
              <View key={index} style={styles.containerText}>
                <Text style={styles.textHeader}>{val.head}</Text>
                <Text>{val.body}</Text>
              </View>
            );
          })}

        <TouchableHighlight
          style={styles.touchableButtonStyle}
          underlayColor={'transparent'}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Ar', {type: paramType})}>
          <View style={styles.itemButton}>
            <Text style={styles.itemButtonText}>Lihat Model AR</Text>
          </View>
        </TouchableHighlight>
      </>
    </BackgroundWithSectionLayout>
  );
}
