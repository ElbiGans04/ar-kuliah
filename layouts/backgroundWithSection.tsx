import {ScrollView, View, Image, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  scrollViewContainer: {
    position: 'relative',
  },
  container: {
    rowGap: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    color: '#0A3180',
  },
  containerBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: 'auto',
    height: 'auto',
  },
  containerBackgroundImage: {
    top: -150,
    bottom: 0,
    right: 0,
    left: 0,
    width: 'auto',
    // height: ,
    minHeight: 'auto',
    objectFit: 'contain',
  },
  parentContainer: {
    backgroundColor: '#0A3180',
    paddingHorizontal: 28,
    paddingVertical: 24,
    minHeight: '100%',
    position: 'relative',
  },
});

export default function BackgroundWithSectionLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.parentContainer}>
        <View style={styles.containerBackground}>
          <Image
            style={styles.containerBackgroundImage}
            source={require('assets/bg.png')}
          />
        </View>
        <View style={styles.container}>{children}</View>
      </View>
    </ScrollView>
  );
}
