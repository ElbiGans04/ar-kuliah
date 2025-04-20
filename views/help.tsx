import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
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

export default function HelpView() {
  return (
    <BackgroundWithSectionLayout>
      <>
        <Text>
          Selamat datang ! Berikut adalah panduan untuk membantu Anda
          menggunakan aplikasi ini dengan mudah.
        </Text>

        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Cara Melihat Materi </Text>
          <Text>📌 Buka Aplikasi ( Pastikan Di Menu Utama )</Text>
          <Text>{'- On Proggres -'}</Text>
        </View>

        <Text>Jika mengalami kendala, silakan hubungi tim pengembang.</Text>
      </>
    </BackgroundWithSectionLayout>
  );
}
