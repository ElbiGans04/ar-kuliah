import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroNode,
  ViroQuad,
  ViroSpinner,
  ViroSpotLight,
  ViroTrackingStateConstants,
} from '@reactvision/react-viro';
import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

const materi = {
  kucing: {
    model: require('../assets/ar/cat/12221_Cat_v1_l3_obj.obj'),
    assets: [
      require('../assets/ar/cat/12221_Cat_v1_l3.mtl'),
      require('../assets/ar/cat/Cat_bump.jpg'),
    ],
  },
  rusa: {
    model: require('../assets/ar/dear/12961_White-Tailed_Deer_v1_l2_obj.obj'),
    assets: [
      require('../assets/ar/dear/12961_White-Tailed_Deer_v1_l2.mtl'),
      require('../assets/ar/dear/12961_White-TailedDeer_diffuse.jpg'),
    ],
  },
  kuda: {
    model: require('../assets/ar/horse/10026_Horse_v01-it2_obj.obj'),
    assets: [
      require('../assets/ar/horse/10026_Horse_v01-it2.mtl'),
      require('../assets/ar/horse/Horse_v01.jpg'),
    ],
  },
};

function Ar(props: any) {
  const {scale, rotateX, rotateY, paramType} = props.sceneNavigator
    .viroAppProps as {
    paramType: 'rusa' | 'kucing' | 'kuda';
    scale: number;
    rotateY: number;
    rotateX: number;
  };
  const selectedMateri = materi[paramType];
  const [state, setState] = useState({
    hasARInitialized: false,
    text: 'Initializing AR...',
  });

  function onTrackingUpdated(stateParam: ViroTrackingStateConstants) {
    if (
      !state.hasARInitialized &&
      stateParam === ViroTrackingStateConstants.TRACKING_NORMAL
    ) {
      setState({
        hasARInitialized: true,
        text: 'Hello World!',
      });
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onTrackingUpdated}>
      <ViroNode position={[0, 0, -3]} onDrag={() => {}}>
        {/* Loading Text */}
        {!state.hasARInitialized && (
          <ViroSpinner type="light" position={[0, 0, -2]} />
        )}
        {/* AmbientLight agar object menjadi terang */}
        <ViroAmbientLight color="#FFFFFF" />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={25}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={5}
          shadowOpacity={0.7}
        />

        {/* Button Over 3DObject */}
        {/* <ViroButton
          source={require('./assets/mobil.jpg')}
          position={[0.25, 0.6, 0]}
          height={0.3}
          width={0.3}
          style={{flex: 2}}
          onClick={() => console.log('Hello World' + Date.now())}
        />
        <ViroButton
          source={require('./assets/mobil.jpg')}
          position={[-0.25, 0.6, 0]}
          height={0.3}
          width={0.3}
          style={{flex: 2}}
        /> */}

        <Viro3DObject
          position={[5, 0, 0]}
          // transformBehaviors={['billboardX']}
          source={selectedMateri.model}
          rotation={[rotateX || 0, rotateY || 0, 0]}
          scale={[scale || 0, scale || 0, scale || 0]}
          type="OBJ"
          lightReceivingBitMask={3}
          shadowCastingBitMask={2}
          resources={selectedMateri.assets}
        />

        {/* <Viro3DObject
          // transformBehaviors={['billboardX']}
          source={require('../assets/ar/dear/12961_White-Tailed_Deer_v1_l2_obj.obj')}
          rotation={[rotateX || 0, rotateY || 0, 0]}
          scale={[scale || 0, scale || 0, scale || 0]}
          type="OBJ"
          lightReceivingBitMask={3}
          shadowCastingBitMask={2}
          resources={[
            require('../assets/ar/dear/12961_White-Tailed_Deer_v1_l2.mtl'),
            require('../assets/ar/dear/12961_White-TailedDeer_diffuse.jpg'),
          ]}
        /> */}

        <ViroQuad
          rotation={[-90, 0, 0]}
          width={0.5}
          height={0.5}
          arShadowReceiver={true}
          lightReceivingBitMask={2}
        />
      </ViroNode>
    </ViroARScene>
  );
}

export default function ArView({
  route,
}: NativeStackScreenProps<
  {
    Ar: {
      type: 'rusa' | 'kucing' | 'kuda';
    };
  },
  'Ar'
>) {
  const [scale, setScale] = useState(0.1);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const paramType = route.params.type;

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        viroAppProps={{
          scale,
          rotateX,
          rotateY,
          paramType,
        }}
        initialScene={{
          scene: Ar as any,
        }}
        style={styles.f1}
      />
      <View style={styles.containerAction}>
        <View style={styles.containerActionHead}>
          <Button
            onPress={() => {
              setScale(state => state - 0.1);
            }}
            title="Scale Down"
          />
          <Button
            onPress={() => {
              setScale(0.2);
              setRotateX(0);
              setRotateY(0);
            }}
            title="Reset Position"
          />
          <Button
            onPress={() => {
              setScale(state => state + 0.1);
            }}
            title="Scale Up"
          />
        </View>
        <View style={styles.containerActionHead}>
          <Button
            onPress={() => {
              setRotateX(state => state - 10);
            }}
            title="Right"
          />
          <Button
            onPress={() => {
              setRotateX(state => state + 10);
            }}
            title="Left"
          />
          <Button
            onPress={() => {
              setRotateY(state => state + 10);
            }}
            title="Down"
          />
          <Button
            onPress={() => {
              setRotateY(state => state - 10);
            }}
            title="Up"
          />
        </View>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  containerAction: {
    width: '100%',
    flex: 1,
    position: 'absolute',
    // backgroundColor: 'red',
    bottom: 0,
    padding: 20,
    gap: 24,
  },
  containerActionHead: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerActionBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  action: {
    width: 'auto',
    padding: 10,
  },
  f1: {flex: 2},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

/*

  Template Original React Native 0.76

*/
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
