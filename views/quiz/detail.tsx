import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A3180',
    textAlign: 'center',
  },
  containerItem: {
    marginTop: 16,
    columnGap: 10,
    rowGap: 24,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#CFCDCD',
    borderRadius: 10,
    padding: 10,
    width: '45%',
  },
  itemImage: {
    width: 'auto',
    height: 100,
  },
  itemText: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#0A3180',
  },
  containerText: {},
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
        {next <= 1 && (
          <>
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
      </>
    </BackgroundWithSectionLayout>
  );
}
