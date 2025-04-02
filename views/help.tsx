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

function Help() {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text>
          Selamat datang ! Berikut adalah panduan untuk membantu Anda
          menggunakan aplikasi ini dengan mudah.
        </Text>

        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Cara Melihat Materi </Text>
          <Text>
            📌 Buka Aplikasi ( Pastikan Di Menu Utama )
          </Text>
          <Text>
                {'- On Proggres -'}
          </Text>
        </View>

        <Text>Jika mengalami kendala, silakan hubungi tim pengembang.</Text>

        <Text style={styles.textBold}>🌟 Versi Saat Ini: 1.0</Text>
        <Text>Dikembangkan oleh Rhafael Bijaksana & Muhammad Ikmal Akbar</Text>
      </View>
    </ScrollView>
  );
}

export default Help;
