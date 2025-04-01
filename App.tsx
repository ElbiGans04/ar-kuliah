import {
  Viro3DObject,
  // Viro3DObject,
  // ViroQuad,
  // ViroSpotLight,
  ViroARScene,
  ViroARSceneNavigator,
  ViroButton,
  // ViroButton,
  ViroNode,
  ViroQuad,
  ViroSpotLight,
  // ViroCamera,
  // ViroTrackingReason,
  ViroTrackingStateConstants,
} from '@reactvision/react-viro';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

function HelloWorldSceneAR(props: any) {
  const {scale, rotateX} = props.sceneNavigator.viroAppProps;
  // const scale = 0, rotateX = 0, rotateY = 0;
  useEffect(() => {
    console.log(`Rotate X Update : ${rotateX}`);
  }, [rotateX]);

  // useEffect(() => {
  //   console.log(`rotateX Update : ${rotateX}`);
  // }, [rotateX]);
  // const [text, setText] = useState('Initializing AR...');
  const [state, setState] = useState({
    hasARInitialized: false,
    text: 'Initializing AR...',
  });

  // function onInitialized(state: any, reason: ViroTrackingReason) {
  //   console.log('onInitialized', state, reason);
  //   if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
  //     setText('Hello World!');
  //   } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
  //     // Handle loss of tracking
  //   }
  // }

  function onTrackingUpdated(stateParam: ViroTrackingStateConstants) {
    // if the state changes to "TRACKING_NORMAL" for the first time, then
    // that means the AR session has initialized!
    if (
      !state.hasARInitialized &&
      stateParam == ViroTrackingStateConstants.TRACKING_NORMAL
    ) {
      setState({
        hasARInitialized: true,
        text: 'Hello World!',
      });
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onTrackingUpdated}>
      <ViroNode
        position={[-0.5, -0.5, -0.5]}
        //dragType="FixedToWorld"
        onDrag={() => {}}>
        <ViroSpotLight
          innerAngle={5}
          outerAngle={45}
          direction={[0, -1, -0.2]}
          position={[0, 3, 0]}
          color="#ffffff"
          castsShadow={true}
          influenceBitMask={2}
          shadowMapSize={2048}
          shadowNearZ={2}
          shadowFarZ={5}
          shadowOpacity={0.7}
        />

        <ViroButton
          source={require('./assets/mobil.jpg')}
          position={[0.25, 0.6, 0]}
          height={0.3}
          width={0.3}
          dragType="FixedToWorld"
          style={{flex: 2}}
          onClick={() => console.log('Hello World')}
        />
        <ViroButton
          source={require('./assets/mobil.jpg')}
          position={[-0.25, 0.6, 0]}
          height={0.3}
          width={0.3}
          dragType="FixedToWorld"
          style={{flex: 2}}
        />

        <Viro3DObject
          source={require('./assets/ar/emoji_smile.vrx')}
          rotation={[45, 90, 0]}
          scale={[scale || 0, scale || 0, scale || 0]}
          type="VRX"
          lightReceivingBitMask={3}
          shadowCastingBitMask={2}
          transformBehaviors={['billboard']}
          resources={[
            require('./assets/ar/emoji_smile_diffuse.png'),
            require('./assets/ar/emoji_smile_specular.png'),
            require('./assets/ar/emoji_smile_normal.png'),
          ]}
        />

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

export default () => {
  const [scale, setScale] = useState(0.2);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        viroAppProps={{
          scale,
          rotateX,
          rotateY,
        }}
        initialScene={{
          scene: HelloWorldSceneAR as any,
        }}
        style={styles.f1}
      />
      <View style={styles.containerAction}>
        <View style={styles.containerActionHead}>
          <Button
            onPress={() => {
              console.log('Down');
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
              console.log('Up');
              setScale(state => state + 0.1);
            }}
            title="Scale Up"
          />
        </View>
        <View style={styles.containerActionHead}>
          <Button
            onPress={() => {
              setRotateX(state => state + 10);
            }}
            title="Right"
          />
          <Button
            onPress={() => {
              setRotateX(state => state - 10);
            }}
            title="Left"
          />
          <Button
            onPress={() => {
              setRotateY(state => state - 10);
            }}
            title="Down"
          />
          <Button
            onPress={() => {
              setRotateY(state => state + 10);
            }}
            title="Up"
          />
        </View>
      </View>
    </View>
  );
};

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
