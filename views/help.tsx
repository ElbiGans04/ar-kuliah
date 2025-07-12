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
  textJustify: {
    textAlign: 'justify',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default function HelpView() {
  return (
    <BackgroundWithSectionLayout>
      <>
        <Text style={styles.textJustify}>
          Selamat datang ! Berikut adalah panduan untuk membantu Anda
          menggunakan aplikasi ini dengan mudah.
        </Text>

        {/* Melihat Materi */}
        <View style={styles.containerText}>
          <Text style={{...styles.textHeader, ...styles.textCenter}}>Cara Menggunakan AR</Text>
          <Text style={styles.textCenter}>📌 Di Menu utama, pilih menu aplikasi "Mulai AR"</Text>
          <Text style={styles.textCenter}>📌 Lalu tinggal pilih model AR yang ingin di tampilkan</Text>
          <Text style={styles.textCenter}>📌 Setelah model AR muncul, anda dapat menggerakan model AR</Text>
        </View>

        {/* Melihat Materi */}
        <View style={styles.containerText}>
          <Text style={{...styles.textHeader, ...styles.textCenter}}>Cara Melihat Materi </Text>
          <Text style={styles.textCenter}>📌 Di Menu utama, pilih menu aplikasi "Materi"</Text>
          <Text style={styles.textCenter}>📌 Pilih materi yang ingin dibaca, dengan menekan tombol "Lihat selengkapnya"</Text>
          <Text style={styles.textCenter}>📌 Lalu materi akan tampil</Text>
          <Text style={styles.textCenter}>📌 Jika ingin menampilkan AR Model terkait materi, anda bisa menekan "Lihat model AR"</Text>
        </View>

        {/* Melihat Materi */}
        <View style={styles.containerText}>
          <Text style={{...styles.textHeader, ...styles.textCenter}}>Cara Melihat Kuis </Text>
          <Text style={styles.textCenter}>📌 Di Menu utama, pilih menu aplikasi "Quis"</Text>
          <Text style={styles.textCenter}>📌 Pilih kuis yang ingin anda buka</Text>
          <Text style={styles.textCenter}>📌 Lalu kuis-kuis akan tampil</Text>
        </View>

        <Text style={styles.textCenter}>Jika mengalami kendala, silakan hubungi tim pengembang.</Text>
      </>
    </BackgroundWithSectionLayout>
  );
}
