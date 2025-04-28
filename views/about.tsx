import {AppDetailContext} from 'hooks/index';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import {useContext} from 'react';
import React, {StyleSheet, Text, View} from 'react-native';

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
});

export default function AboutView() {
  const appInfo = useContext(AppDetailContext);

  return (
    <BackgroundWithSectionLayout>
      <>
        <Text>
          Selamat datang di {appInfo.appNameLong || '-'} yang membawa pengalaman
          belajar ke level baru!
        </Text>
        <Text>
          Aplikasi ini dirancang sebagai media pembelajaran interaktif berbasis
          Augmented Reality (AR) untuk membantu anak-anak mengenal berbagai
          materi seperti organ tubuh manusia, hewan, warna, angka, dan lainnya
          dengan cara yang menyenangkan dan mudah dipahami. Dengan dukungan
          teknologi AR, anak-anak dapat melihat objek 3D secara langsung dari
          perangkat mereka, sehingga proses belajar menjadi lebih nyata dan
          menarik.
        </Text>
        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Tujuan Aplikasi:</Text>
          <Text>
            📌 Meningkatkan interaksi dalam pembelajaran melalui penggunaan
            teknologi digital.
          </Text>
          <Text>
            📌 Memanfaatkan Augmented Reality (AR) untuk memberikan pengalaman
            belajar yang lebih mendalam.
          </Text>
          <Text>
            📌 Membantu siswa memahami materi lebih baik dengan model 3D yang
            dapat diakses secara langsung.
          </Text>
          <Text>
            📌 Menyediakan alternatif pembelajaran modern yang fleksibel dan
            mudah diakses kapan saja.
          </Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Fitur Utama Aplikasi:</Text>
          <Text>
            ✅ Pembelajaran Digital – Materi tersedia dalam bentuk digital yang
            mudah diakses kapan saja.
          </Text>
          <Text>
            ✅ Augmented Reality (AR) – Menampilkan model 3D untuk pengalaman
            belajar yang lebih nyata.
          </Text>
          <Text>
            ✅ Interaktif & Menarik – Memberikan pengalaman belajar yang lebih
            menyenangkan dan efektif.
          </Text>
        </View>
        <Text style={styles.textBold}>
          🌟 Versi Saat Ini: {appInfo.appVersionNumber || '-'}
        </Text>
        <Text>
          Dengan Aplikasi ini, belajar menjadi lebih hidup, menyenangkan, dan
          mudah dipahami. Ayo mulai jelajahi dunia pengetahuan dengan teknologi
          terbaru! 🚀
        </Text>
        <Text>
          Dibuat dengan ❤️ oleh{' '}
          <Text style={styles.textBold}>
            Rhafael Bijaksana dan Muhammmad Ikmal Akbar{' '}
          </Text>
        </Text>
      </>
    </BackgroundWithSectionLayout>
  );
}
