import { AppDetailContext } from '../hooks';
import { useContext } from 'react';
import React, {StyleSheet, Text, ScrollView, View} from 'react-native';

const styles = StyleSheet.create({
  scrollViewContainer: {},
  container: {
    padding: 10,
    rowGap: 16,
  },
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

export default function AboutView () {
  const appInfo = useContext(AppDetailContext);

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text>
          Selamat datang di {appInfo.appNameLong || '-'} yang membawa
          pengalaman belajar ke level baru!
        </Text>
        <Text>
          Aplikasi ini dikembangkan oleh Rhafael Bijaksana & Muhammad Ikmal
          Akbar sebagai bagian dari tugas penelitian akhir di Kampus kami.
          Tujuan utama aplikasi ini adalah untuk meningkatkan pengalaman belajar
          dengan menggantikan metode pembelajaran tradisional berbasis buku
          menjadi lebih interaktif dan menarik.
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
        <Text style={styles.textBold}>🌟 Versi Saat Ini: {appInfo.appVersionNumber || '-'}</Text>
        <Text>
          Dengan Aplikasi ini, belajar menjadi lebih hidup, menyenangkan, dan
          mudah dipahami. Ayo mulai jelajahi dunia pengetahuan dengan teknologi
          terbaru! 🚀
        </Text>
      </View>
    </ScrollView>
  );
}
