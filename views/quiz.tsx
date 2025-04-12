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

export default function QuizView() {
  const [next, setNext] = useState(0);

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        {next <= 1 && (
          <>
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
          </>
        )}
      </View>
    </ScrollView>
  );
}
