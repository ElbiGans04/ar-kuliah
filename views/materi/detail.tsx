import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useIsDeviceSupportAR} from 'hooks';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import React, {
  Image,
  ImageSourcePropType,
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
  imageContent: {
    width: 'auto',
    height: 200,
    objectFit: 'contain',
  },
});

interface MateriType {
  [index: string]: {
    image: ImageSourcePropType;
    content: {
      head: string;
      body: string[];
      image?: ImageSourcePropType;
    }[];
  };
}

const materi: MateriType = {
  kucing: {
    image: require('assets/images/materi/amber-kipp-75715CVEJhI-unsplash.jpg'),
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
    image: require('assets/images/materi/didin-hasbullah-piNiZmg-wlc-unsplash.jpg'),
    content: [
      {
        head: 'Apa itu Rusa ?',
        body: [
          `Rusa adalah hewan berkaki empat yang hidup di hutan, padang rumput, dan pegunungan. Rusa dikenal karena memiliki tanduk yang tumbuh di kepalanya, terutama pada rusa jantan.`,
        ],
      },
      {
        image: require('assets/images/materi/rusa.jpg'),
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
    image: require('assets/images/materi/sinitta-leunen-nUl8Iz_EAkE-unsplash.jpg'),
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
  dog: {
    image: require('assets/images/materi/anjing.jpg'),
    content: [
      {
        head: 'Apa itu Anjing ?',
        body: [
          `Mereka bisa menggonggong "guk guk!" dan suka diajak bermain.
Anjing punya hidung yang sangat tajam, bisa mencium bau dari jauh.
Beberapa anjing juga dilatih untuk membantu orang, seperti menolong orang buta atau menjaga rumah.
Anjing senang diajak jalan-jalan dan bisa menjadi sahabat yang baik untuk anak-anak.`,
        ],
      },
      {
        head: 'Ciri-ciri Anjing :',
        body: [
          `Bersuara “guk guk” atau “woof” saat menggonggong.`,
          `Hidungnya tajam untuk mencium bau dari jauh.`,
          `Mereka suka bermain dan berlari-lari.`,
        ],
      },
      {
        head: 'Makanan Anjing, Apa itu ?',
        body: [
          `Anjing bisa makan daging atau sayur, Anjing tidak boleh makan cokelat atau makanan manusia yang terlalu asin dan manis.`,
        ],
      },
    ],
  },
  chiken: {
    image: require('assets/images/materi/ayam.jpg'),
    content: [
      {
        head: 'Apa itu Ayam ?',
        body: [
          `Ayam adalah hewan yang hidup di darat. Ayam punya dua kaki, dua sayap, dan paruh. Ayam bisa berkokok ‘kukuruyuk!’ dan bertelur`,
        ],
      },
      {
        head: 'Ciri-ciri Ayam :',
        body: [
          `Punya Dua Kaki dan Cakar`,
          `Ayam tidak punya gigi. Ia makan pakai paruh`,
          `Bulu ayam halus, warnanya bisa putih, merah, cokelat, atau hitam`,
        ],
      },
      {
        head: 'Makanan Ayam, Apa itu ?',
        body: [`Ayam suka makan biji-bijian, nasi, dan cacing`],
      },
    ],
  },
  elephant: {
    image: require('assets/images/materi/gajah.jpg'),
    content: [
      {
        head: 'Apa itu Gajah ?',
        body: [
          `Gajah adalah hewan darat terbesar di dunia.
Mereka hidup di hutan dan padang rumput, dan suka hidup berkelompok.
Gajah dikenal karena tubuhnya yang besar dan belalainya yang panjang`,
        ],
      },
      {
        head: 'Ciri-ciri Gajah :',
        body: [
          `Memiliki tubuh besar dan kuat`,
          `Punya belalai panjang untuk mengambil makanan dan minum`,
          `Memiliki telinga lebar yang bisa digerakkan`,
        ],
      },
      {
        head: 'Makanan Gajah, Apa itu ?',
        body: [`Gajah suka makan rumput, daun, buah-buahan, dan kulit pohon.`],
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
  const isSupportAR = useIsDeviceSupportAR();

  return (
    <BackgroundWithSectionLayout>
      <>
        <Image style={styles.image} source={selectedMateri.image} />
        {selectedMateri &&
          selectedMateri.content.map((val, index) => {
            return (
              <View key={index} style={styles.containerText}>
                {val.image && (
                  <Image style={styles.imageContent} source={val.image} />
                )}
                <Text style={styles.textHeader}>{val.head}</Text>
                <Text>{val.body}</Text>
              </View>
            );
          })}

        {/* Kalau Device Support AR, maka munculkan tombol lihat model ar */}
        {isSupportAR && (
          <TouchableHighlight
            style={styles.touchableButtonStyle}
            underlayColor={'transparent'}
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('Ar', {type: paramType, imageTracking: false})
            }>
            <View style={styles.itemButton}>
              <Text style={styles.itemButtonText}>Lihat Model AR</Text>
            </View>
          </TouchableHighlight>
        )}
      </>
    </BackgroundWithSectionLayout>
  );
}
