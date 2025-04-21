import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  containerText: {
    gap: 24,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A3180',
    textAlign: 'center',
  },
  image: {
    width: 'auto',
    height: 256,
  },
  containerHeader: {
    gap: 24,
  },
  textInfo: {
    fontWeight: 700,
    color: '#0A3180',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#CFCDCD',
    padding: 16,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0A3180',
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

export default function QuizDetailView() {
  const [next, setNext] = useState(0);

  return (
    <BackgroundWithSectionLayout>
      <>
        <View style={styles.containerHeader}>
          <Text style={styles.textInfo}>Pertanyaan {next + 1} dari 2</Text>
          <Text style={styles.textHeader}>{answer[next].title}</Text>
        </View>

        <Image
          style={styles.image}
          source={require('../../assets/icons/Picture.png')}
        />

        {next <= 1 && (
          <>
            <View style={styles.containerText}>
              {answer[next].answer.map((val, index) => (
                <TouchableOpacity
                  key={`${val}-${index}`}
                  onPress={() => setNext(1)}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>{val}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </>
    </BackgroundWithSectionLayout>
  );
}
