import {AppDetailContext} from 'hooks/index';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import {useContext} from 'react';
import React, {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerText: {
    gap: 10,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default function AboutView() {
  const appInfo = useContext(AppDetailContext);

  return (
    <BackgroundWithSectionLayout>
      <>
        <Text style={styles.textJustify}>
          Selamat datang di {appInfo.appNameLong || '-'} yang membawa pengalaman
          belajar ke level baru!
        </Text>
        <Text style={styles.textJustify}>
          Aplikasi ini dirancang sebagai media pembelajaran interaktif berbasis
          Augmented Reality (AR) untuk membantu anak-anak mengenal berbagai
          materi seperti organ tubuh manusia, hewan, warna, angka, dan lainnya
          dengan cara yang menyenangkan dan mudah dipahami. Dengan dukungan
          teknologi AR, anak-anak dapat melihat objek 3D secara langsung dari
          perangkat mereka, sehingga proses belajar menjadi lebih nyata dan
          menarik.
        </Text>
        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Tujuan Aplikasi</Text>
          <Text style={styles.textCenter}>
            📌 Meningkatkan interaksi dalam pembelajaran melalui penggunaan
            teknologi digital.
          </Text>
          <Text style={styles.textCenter}>
            📌 Memanfaatkan Augmented Reality (AR) untuk memberikan pengalaman
            belajar yang lebih mendalam.
          </Text>
          <Text style={styles.textCenter}>
            📌 Membantu siswa memahami materi lebih baik dengan model 3D yang
            dapat diakses secara langsung.
          </Text>
          <Text style={styles.textCenter}>
            📌 Menyediakan alternatif pembelajaran modern yang fleksibel dan
            mudah diakses kapan saja.
          </Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Fitur Utama Aplikasi</Text>
          <Text style={styles.textCenter}>
            ✅ Pembelajaran Digital – Materi tersedia dalam bentuk digital yang
            mudah diakses kapan saja.
          </Text>
          <Text style={styles.textCenter}>
            ✅ Augmented Reality (AR) – Menampilkan model 3D untuk pengalaman
            belajar yang lebih nyata.
          </Text>
          <Text style={styles.textCenter}>
            ✅ Interaktif & Menarik – Memberikan pengalaman belajar yang lebih
            menyenangkan dan efektif.
          </Text>
        </View>
        <Text style={{...styles.textBold, ...styles.textCenter}}>
          🌟 Versi Saat Ini: {appInfo.appVersionNumber || '-'}
        </Text>
        <Text style={styles.textJustify}>
          Dengan Aplikasi ini, belajar menjadi lebih hidup, menyenangkan, dan
          mudah dipahami. Ayo mulai jelajahi dunia pengetahuan dengan teknologi
          terbaru! 🚀
        </Text>
        <Text style={styles.textJustify}>
          Created By{' '}
          <Text style={styles.textBold}>
            Rhafael Bijaksana dan Muhammmad Ikmal Akbar{' '}
          </Text>
        </Text>
      </>
    </BackgroundWithSectionLayout>
  );
}
