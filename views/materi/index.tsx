import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BackgroundWithSectionLayout from 'layouts/backgroundWithSection';
import React, {Pressable, StyleSheet, Text, View} from 'react-native';
import {ScreenType} from 'routes';

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
  tautan: {
    color: 'blue',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});

export default function MateriView() {
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreenType, 'Materi'>>();

  return (
    <BackgroundWithSectionLayout>
      <>
        <View style={styles.containerText}>
          <Text style={styles.textHeader}>Daftar Isi</Text>
          <View style={styles.containerText}>
            <Text style={styles.textBold}>Kategori Hewan</Text>
            <Text>
              Mari kita belajar tentang berbagai hewan yang lucu dan menarik! Di
              buku ini, kalian akan mengenal hewan-hewan yang hidup di darat,
              air, dan udara. Yuk, mulai petualangan seru bersama! 🐶🐱🐦🐠✨
            </Text>

            {/* Daftar Isi */}
            <Pressable
              onPress={() => {
                navigation.navigate('MateriDetail', {
                  type: 'kucing',
                });
              }}>
              <Text style={styles.tautan}>Kucing</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('MateriDetail', {
                  type: 'kuda',
                });
              }}>
              <Text style={styles.tautan}>Kuda</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('MateriDetail', {
                  type: 'rusa',
                });
              }}>
              <Text style={styles.tautan}>Rusa</Text>
            </Pressable>
          </View>
        </View>
      </>
    </BackgroundWithSectionLayout>
  );
}
