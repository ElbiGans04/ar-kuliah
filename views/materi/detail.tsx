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
      head?: string;
      body: string[];
      image?: ImageSourcePropType;
    }[];
  };
}

const materi: MateriType = {
  //   kucing: {
  //     image: require('assets/images/materi/amber-kipp-75715CVEJhI-unsplash.jpg'),
  //     content: [
  //       {
  //         head: 'Apa itu Kucing ?',
  //         body: [
  //           `Kucing adalah hewan peliharaan yang lucu dan menggemaskan. Mereka
  //               sering tinggal di rumah bersama manusia, dan bisa memiliki berbagai
  //               warna dan bentuk bulu.`,
  //         ],
  //       },
  //       {
  //         head: 'Ciri-ciri Kucing :',
  //         body: [
  //           `Kucing juga punya ekor panjang yang bisa bergerak-gerak.`,
  //           `Mereka memiliki mata besar yang bisa melihat dengan sangat baik,
  //               terutama di malam hari.`,
  //           `Kucing punya bulu yang lembut dan bisa berwarna putih, hitam,
  //               abu-abu, cokelat, atau kombinasi warna.`,
  //         ],
  //       },
  //       {
  //         head: 'Makanan Kucing, Apa itu ?',
  //         body: [
  //           `Kucing makan makanan khusus, seperti makanan kucing kering atau
  //               makanan basah yang dibeli di toko hewan. Mereka juga suka makan ikan
  //               atau ayam yang dimasak.`,
  //         ],
  //       },
  //     ],
  //   },
  //   rusa: {
  //     image: require('assets/images/materi/didin-hasbullah-piNiZmg-wlc-unsplash.jpg'),
  //     content: [
  //       {
  //         head: 'Apa itu Rusa ?',
  //         body: [
  //           `Rusa adalah hewan berkaki empat yang hidup di hutan, padang rumput, dan pegunungan. Rusa dikenal karena memiliki tanduk yang tumbuh di kepalanya, terutama pada rusa jantan.`,
  //         ],
  //       },
  //       {
  //         image: require('assets/images/materi/rusa.jpg'),
  //         head: 'Ciri-ciri Rusa :',
  //         body: [
  //           `Memiliki tubuh ramping dan kaki panjang untuk berlari cepat.`,
  //           `Tanduknya bisa tumbuh besar dan rontok setiap tahun.`,
  //           `Bulunya berwarna cokelat, ada yang berbintik putih seperti rusa tutul.`,
  //         ],
  //       },
  //       {
  //         head: 'Makanan Rusa, Apa itu ?',
  //         body: [
  //           `Rusa adalah hewan pemakan tumbuhan (herbivora). Mereka suka makan rumput, daun, dan buah-buahan di hutan.`,
  //         ],
  //       },
  //     ],
  //   },
  //   kuda: {
  //     image: require('assets/images/materi/sinitta-leunen-nUl8Iz_EAkE-unsplash.jpg'),
  //     content: [
  //       {
  //         head: 'Apa itu Kuda ?',
  //         body: [
  //           `Kuda adalah hewan besar yang biasa digunakan untuk berkendara atau bekerja di ladang. Kuda memiliki tubuh yang kuat, kaki yang panjang, dan ekor yang lebat.`,
  //         ],
  //       },
  //       {
  //         head: 'Ciri-ciri Kuda :',
  //         body: [
  //           `Tubuhnya besar dan kuat, dengan kaki yang panjang untuk berlari cepat.`,
  //           `Memiliki ekor panjang yang digunakan untuk mengusir lalat dan serangga.`,
  //           `Kuda memiliki bulu yang halus dan bisa berwarna cokelat, hitam, putih, atau campuran.`,
  //         ],
  //       },
  //       {
  //         head: 'Makanan Kuda, Apa itu ?',
  //         body: [
  //           `Kuda adalah hewan pemakan tumbuhan (herbivora). Mereka suka makan rumput, jerami, dan kadang buah-buahan.`,
  //         ],
  //       },
  //     ],
  //   },
  //   dog: {
  //     image: require('assets/images/materi/anjing.jpg'),
  //     content: [
  //       {
  //         head: 'Apa itu Anjing ?',
  //         body: [
  //           `Mereka bisa menggonggong "guk guk!" dan suka diajak bermain.
  // Anjing punya hidung yang sangat tajam, bisa mencium bau dari jauh.
  // Beberapa anjing juga dilatih untuk membantu orang, seperti menolong orang buta atau menjaga rumah.
  // Anjing senang diajak jalan-jalan dan bisa menjadi sahabat yang baik untuk anak-anak.`,
  //         ],
  //       },
  //       {
  //         head: 'Ciri-ciri Anjing :',
  //         body: [
  //           `Bersuara “guk guk” atau “woof” saat menggonggong.`,
  //           `Hidungnya tajam untuk mencium bau dari jauh.`,
  //           `Mereka suka bermain dan berlari-lari.`,
  //         ],
  //       },
  //       {
  //         head: 'Makanan Anjing, Apa itu ?',
  //         body: [
  //           `Anjing bisa makan daging atau sayur, Anjing tidak boleh makan cokelat atau makanan manusia yang terlalu asin dan manis.`,
  //         ],
  //       },
  //     ],
  //   },
  //   chiken: {
  //     image: require('assets/images/materi/ayam.jpg'),
  //     content: [
  //       {
  //         head: 'Apa itu Ayam ?',
  //         body: [
  //           `Ayam adalah hewan yang hidup di darat. Ayam punya dua kaki, dua sayap, dan paruh. Ayam bisa berkokok ‘kukuruyuk!’ dan bertelur`,
  //         ],
  //       },
  //       {
  //         head: 'Ciri-ciri Ayam :',
  //         body: [
  //           `Punya Dua Kaki dan Cakar`,
  //           `Ayam tidak punya gigi. Ia makan pakai paruh`,
  //           `Bulu ayam halus, warnanya bisa putih, merah, cokelat, atau hitam`,
  //         ],
  //       },
  //       {
  //         head: 'Makanan Ayam, Apa itu ?',
  //         body: [`Ayam suka makan biji-bijian, nasi, dan cacing`],
  //       },
  //     ],
  //   },
  //   elephant: {
  //     image: require('assets/images/materi/gajah.jpg'),
  //     content: [
  //       {
  //         head: 'Apa itu Gajah ?',
  //         body: [
  //           `Gajah adalah hewan darat terbesar di dunia.
  // Mereka hidup di hutan dan padang rumput, dan suka hidup berkelompok.
  // Gajah dikenal karena tubuhnya yang besar dan belalainya yang panjang`,
  //         ],
  //       },
  //       {
  //         head: 'Ciri-ciri Gajah :',
  //         body: [
  //           `Memiliki tubuh besar dan kuat`,
  //           `Punya belalai panjang untuk mengambil makanan dan minum`,
  //           `Memiliki telinga lebar yang bisa digerakkan`,
  //         ],
  //       },
  //       {
  //         head: 'Makanan Gajah, Apa itu ?',
  //         body: [`Gajah suka makan rumput, daun, buah-buahan, dan kulit pohon.`],
  //       },
  //     ],
  //   },
  trex: {
    image: require('assets/images/materi/tirex.jpg'),
    content: [
      {
        head: 'Apa itu Trex ?',
        body: ['T-Rex adalah dinosaurus yang sangat besar dan terkenal.'],
      },
      {
        body: [
          'Ia hidup jutaan tahun yang lalu, jauh sebelum manusia ada dan T-Rex punya gigi yang tajam, tubuh besar, dan dua kaki kuat untuk berlari.',
          'Meskipun besar dan menakutkan, tangannya sangat kecil, lho!',
          'T-Rex makan daging, jadi dia disebut hewan pemakan daging atau karnivora.',
        ],
      },
      {
        image: require('assets/images/materi/tirex-tinggi.jpg'),
        head: 'Ciri-ciri Trex : ',
        body: [
          `Punya tubuh besar dan tinggi`,
          `Punya dua tangan kecil di depan`,
          `Berdiri dengan 2 Kaki`,
        ],
      },
    ],
  },
  quetzalcoatlus: {
    image: require('assets/images/materi/dino-burung.jpg'),
    content: [
      {
        head: 'Apa itu Quetzalcoatlus ?',
        body: [
          'Quetzalcoatlus adalah salah satu hewan terbang terbesar yang pernah hidup di zaman dinosaurus.',
          'Meski mirip burung, dia bukan burung, tapi reptil terbang yang disebut pterosaurus.',
          'Sayapnya sangat lebar—bisa sepanjang bus sekolah!',
          'Ia hidup jutaan tahun yang lalu dan terbang tinggi di langit untuk mencari makan.',
        ],
      },
      {
        image: require('assets/images/materi/tirex-tinggi.jpg'),
        head: 'Ciri-ciri Quetzalcoatlus : ',
        body: [
          `Tubuhnya ringan agar bisa terbang`,
          `Punya sayap besar dan lebar`,
          `Lehernya panjang dan ramping`,
        ],
      },
    ],
  },
  dilophosaurus: {
    image: require('assets/images/materi/dilophosaurus.jpg'),
    content: [
      {
        head: 'Apa itu Dilophosaurus ?',
        body: [
          'Dilophosaurus adalah dinosaurus yang punya dua jambul di kepalanya. Ia hidup sangat lama, dan berjalan dengan dua kaki.',
        ],
      },
      {
        head: 'Ciri-ciri Dilophosaurus : ',
        body: [
          `Punya dua jambul di atas kepala`,
          `Berjalan dengan dua kaki`,
          `Memiliki gigi tajam`,
        ],
      },
    ],
  },
  velociraptor: {
    image: require('assets/images/materi/velociraptor.jpg'),
    content: [
      {
        head: 'Apa itu Velociraptor ?',
        body: [
          'Velociraptor adalah dinosaurus kecil yang sangat cepat dan cerdas. Meski kecil, dia adalah pemburu hebat!',
        ],
      },
      {
        head: 'Ciri-ciri Velociraptor : ',
        body: [
          `Berukuran kecil seperti anjing besar`,
          `Punya cakar tajam di kakinya`,
          `Berlari dengan 2 Kaki`,
        ],
      },
    ],
  },
  chirostenotes: {
    image: require('assets/images/materi/chirostenotes.jpg'),
    content: [
      {
        head: 'Apa itu Chirostenotes ?',
        body: [
          'Chirostenotes adalah dinosaurus yang mirip burung dengan tangan panjang seperti cakar. Namanya berarti “tangan sempit”! Chirostenotes mungkin makan buah-buahan, serangga, dan telur.',
        ],
      },
      {
        head: 'Ciri-ciri Chirostenotes : ',
        body: [
          `Tubuhnya ramping dan tinggi`,
          `Tidak bergigi`,
          `Memiliki leher panjang dan paruh`,
        ],
      },
    ],
  },
  introduction: {
    image: require('assets/images/materi/chirostenotes.jpg'),
    content: [
      {
        head: 'Kenalan dengan Dinosaurus!',
        body: [
          'Halo, teman-teman! Hari ini kita akan belajar tentang hewan purba yang seru dan besar, namanya dinosaurus!',
          'Dinosaurus hidup di zaman purba, yaitu waktu yang sangat, sangat lama sebelum manusia ada.',
          'Mereka tinggal di hutan besar, padang rumput luas, dan pegunungan yang tinggi. Wah, tempatnya pasti seru, ya!',
        ],
      },
      {
        head: 'Bentuk dan Jenis Dinosaurus',
        body: [
          'Dinosaurus adalah hewan yang sangat beragam.',
          'Ada yang tubuhnya sangat besar, seperti Brachiosaurus, yang lehernya panjang dan suka makan daun tinggi di pohon.',
          'Ada juga yang kecil dan lincah, seperti Velociraptor. Mereka ada yang berjalan dengan dua kaki, dan ada juga yang berjalan dengan empat kaki.',
          'Bentuknya macam-macam, ada yang punya tanduk, leher panjang, atau punggung berduri.',
        ],
      },
      {
        head: 'Dinosaurus Pemakan Tumbuhan',
        body: [
          'Tahukah kamu? Dinosaurus ada yang suka makan tumbuhan.',
          'Mereka makan daun dan rumput, bukan roti atau permen, apalagi batu!',
          'Dinosaurus jenis ini disebut herbivora. Mereka senang mengunyah tanaman yang tumbuh di sekitar mereka.',
        ],
      },
      {
        head: 'Dinosaurus Pemakan Daging',
        body: [
          'Tidak semua dinosaurus makan tumbuhan, lho.',
          'Ada juga yang makan daging, namanya karnivora.',
          'Dinosaurus seperti Tyrannosaurus rex suka berburu dan memakan hewan lain.',
          'Giginya tajam dan kuat untuk menggigit mangsanya. Wah, terdengar menegangkan, ya!',
        ],
      },
      {
        head: 'Bagian Tubuh untuk Berjalan',
        body: [
          'Kalau berjalan, dinosaurus tidak pakai sayap atau sirip.',
          'Mereka berjalan dengan kaki mereka yang besar dan kuat.',
          'Ada dinosaurus yang kakinya tinggi, ada juga yang pendek dan gemuk, tapi semuanya dipakai untuk berjalan-jalan mencari makan.',
        ],
      },
      {
        head: 'Dinosaurus yang Kuat',
        body: [
          'Dinosaurus yang besar dan kuat biasanya punya kaki yang besar juga.',
          'Kaki itu membantu mereka berdiri tegak dan berjalan dengan tubuh yang berat.',
          'Bayangkan, satu dinosaurus bisa seberat 10 gajah! Tapi mereka tetap bisa melangkah perlahan.',
        ],
      },
      {
        head: 'Suara Dinosaurus',
        body: [
          'Saat dinosaurus ingin bicara atau mengeluarkan suara, mereka tidak bilang “meong” seperti kucing atau “guk guk” seperti anjing.',
          'Suara dinosaurus terdengar keras dan menggelegar, seperti “Raaaarrr!”.',
          'Suara itu bisa digunakan untuk berkomunikasi atau menakuti musuh.',
        ],
      },
      {
        head: 'Jejak dan Tulang Dinosaurus',
        body: [
          'Walaupun dinosaurus sudah tidak hidup sekarang, para ilmuwan bisa menemukan tulang dan jejak kaki mereka yang tertinggal di tanah.',
          'Tulang-tulang itu disebut fosil.',
          'Dari fosil, kita bisa tahu seperti apa bentuk dinosaurus, apa yang mereka makan, dan di mana mereka tinggal. Keren banget, ya!',
        ],
      },
      {
        head: 'Kenapa Dinosaurus Punah?',
        body: [
          'Dinosaurus sudah punah, artinya sudah tidak hidup lagi di dunia.',
          'Para ilmuwan percaya bahwa dulu pernah terjadi tabrakan besar dari luar angkasa—seperti meteor raksasa—yang menyebabkan dinosaurus tidak bisa bertahan hidup.',
          'Tapi jejak mereka masih ada dan bisa kita pelajari bersama!',
        ],
      },
      {
        head: 'Ayo Terus Belajar!',
        body: [
          'Nah, sekarang kamu sudah kenal dengan dinosaurus!',
          'Ada yang makan tumbuhan, ada yang makan daging, ada yang jalannya pakai kaki besar, dan ada juga yang suaranya “Raaaarrr!”.',
          'Kita bisa belajar tentang mereka dari buku, gambar, bahkan museum!',
          'Tetap semangat belajar, ya! Karena siapa tahu, suatu hari nanti kamu bisa jadi ilmuwan hebat yang menemukan fosil dinosaurus baru! 🦕✨',
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
                {val.head && <Text style={styles.textHeader}>{val.head}</Text>}
                {val.body.map((val, idx) => (
                  <Text key={`idx-${idx}`}>{val}</Text>
                ))}
              </View>
            );
          })}

        {/* Tombol Lihat model ar hilangkan dulu */}
        {/* Kalau Device Support AR, maka munculkan tombol lihat model ar */}
        {false && isSupportAR && (
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
