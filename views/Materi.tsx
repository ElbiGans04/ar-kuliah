import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import React, {StyleSheet, Text, ScrollView, View, Button} from 'react-native';

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

const answer = [
  {
    title: 'Apa saja ras kucing yang paling populer di dunia?',
    answer: [
      'Maine Coon, Siamese, Persian, Ragdoll',
      'Bengal, Sphynx, British Shorthair, Scottish Fold',
      'Abyssinian, Burmese, Munchkin, Exotic Shorthair',
      'Siamese, Russian Blue, Manx, Turkish Van',
    ],
  },
  {
    title: 'Mengapa kucing sering menjilati tubuhnya sendiri?',
    answer: [
      'Untuk memberi tanda teritorial',
      'Untuk menjaga kebersihan tubuhnya',
      'Untuk menenangkan diri',
      'Untuk mempercepat pertumbuhan bulu',
    ],
  },
];

function Materi() {
  const [next, setNext] = useState(0);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Apa itu Kucing ? </Text>
          <Text>
            Kucing adalah hewan peliharaan yang lucu dan menggemaskan. Mereka
            sering tinggal di rumah bersama manusia, dan bisa memiliki berbagai
            warna dan bentuk bulu.
          </Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Ciri-ciri Kucing :</Text>
          <Text>
            Kucing punya bulu yang lembut dan bisa berwarna putih, hitam,
            abu-abu, cokelat, atau kombinasi warna.
          </Text>
          <Text>
            Mereka memiliki mata besar yang bisa melihat dengan sangat baik,
            terutama di malam hari.
          </Text>
          <Text>Kucing juga punya ekor panjang yang bisa bergerak-gerak.</Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Makanan Kucing, Apa itu ? </Text>
          <Text>
            Kucing makan makanan khusus, seperti makanan kucing kering atau
            makanan basah yang dibeli di toko hewan. Mereka juga suka makan ikan
            atau ayam yang dimasak.
          </Text>
        </View>

        <Button onPress={() => navigation.navigate("Ar" as never)} title={'Lihat Model Kucing AR'} />

        {next <= 1 && (
          <View style={{opacity: 0}}>
            <Text style={styles.textHeader}>{answer[next].title}</Text>
            <View style={styles.containerText}>
              <Button
                onPress={() => setNext(1)}
                title={answer[next].answer[0]}
              />
              <Button
                onPress={() => setNext(1)}
                title={answer[next].answer[1]}
              />
              <Button
                onPress={() => setNext(1)}
                title={answer[next].answer[2]}
              />
              <Button
                onPress={() => setNext(1)}
                title={answer[next].answer[3]}
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default Materi;
