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
} from '@reactvision/react-viro';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {ScreenType} from 'routes';

function get10Percent(value: number): number {
  return (value * 10) / 100;
}

const materi = {
  chirostenotes: {
    model: require('assets/ar/chirostenotes/13632_Chirostenotes_v1_L2.obj'),
    assets: [
      require('assets/ar/chirostenotes/13632_Chirostenotes_v1_L2-mtl.mtl'),
      // require('assets/ar/deinonychus/Deinonychus-images.jpg'),
    ],
    initialValue: {
      scale: 0.05,
      rotateX: -100,
      rotateY: -460,
      position: [0, -3, 0],
    },
  },
  dilophosaurus: {
    model: require('assets/ar/dilophosaurus/dilophosaurus.obj'),
    assets: [
      require('assets/ar/dilophosaurus/dilophosaurus-mtl.mtl'),
    ],
    initialValue: {
      scale: 0.81,
      rotateX: 0,
      rotateY: -100,
      position: [0, -3, -2],
    },
  },
  quetzalcoatlus: {
    model: require('assets/ar/quetzalcoatlus/13623_Quetzalcoatlus_v1_L2.obj'),
    assets: [
      require('assets/ar/quetzalcoatlus/13623_Quetzalcoatlus_v1_L2-mtl.mtl'),
      require('assets/ar/quetzalcoatlus/13623_Quetzalcoatlus.jpg'),
    ],
    initialValue: {
      scale: 0.0131,
      rotateX: -100,
      rotateY: -100,
      position: [0, -3, -1],
    },
  },
  trex: {
    model: require('assets/ar/trex/trex.obj'),
    assets: [
      require('assets/ar/trex/trex-mtl.mtl'),
    ],
    initialValue: {
      scale: 0.11,
      rotateX: -370,
      rotateY: 90,
      position: [0, -3, 0],
    },
  },
  velociraptor: {
    model: require('assets/ar/velociraptor/toy_dinosaur.obj'),
    assets: [
      require('assets/ar/velociraptor/toy_dinosaur-mtl.mtl'),
    ],
    initialValue: {
      scale: 0.41,
      rotateX: -10,
      rotateY: -100,
      position: [0, -3, 0],
    },
  },
};

function Ar(props: any) {
  const {scale, rotateX, rotateY, paramType} = props.sceneNavigator
    .viroAppProps as {
    paramType: keyof typeof materi;
    scale: number;
    rotateY: number;
    rotateX: number;
  };
  const selectedMateri = materi[paramType];
  const [state, setState] = useState({
    hasARInitialized: false,
    text: 'Initializing AR...',
  });

  const model3d = (
    <>
      {/* AmbientLight agar object menjadi terang */}
      <ViroAmbientLight color="#FFFFFF" />
      <Viro3DObject
        position={
          selectedMateri.initialValue.position as [number, number, number]
        }
        // transformBehaviors={['billboardX']}
        source={selectedMateri.model}
        rotation={[rotateX || 0, rotateY || 0, 0]}
        scale={[scale || 0, scale || 0, scale || 0]}
        type="OBJ"
        lightReceivingBitMask={3}
        shadowCastingBitMask={2}
        resources={selectedMateri.assets}
        onLoadStart={() => {
          console.log('Load Start');
        }}
        onError={() => {
          console.log('Load Failed');
        }}
        onLoadEnd={() => {
          setState({
            hasARInitialized: true,
            text: '',
          });
        }}
      />
    </>
  );

  useEffect(() => {
    console.log(
      `Rotate X : ${rotateX}, Rotate Y : ${rotateY}, Scale: ${scale}`,
    );
  }, [rotateX, rotateY, scale]);

  return (
    <ViroARScene>
      {/* Loading Text */}
      {!state.hasARInitialized && (
        <ViroSpinner type="light" position={[0, 0, -2]} />
      )}
      {/* Jika Image Tracking */}
      <ViroNode position={[0, 0, -3]} onDrag={() => {}}>
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

        {model3d}

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
}: NativeStackScreenProps<ScreenType, 'Ar'>) {
  const paramType = route.params.type;
  const selected = materi[paramType];
  const scaleValue = selected.initialValue.scale;
  const [scale, setScale] = useState(scaleValue);
  const [rotateX, setRotateX] = useState(selected.initialValue.rotateX);
  const [rotateY, setRotateY] = useState(selected.initialValue.rotateY);

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        viroAppProps={{
          scale,
          rotateX,
          rotateY,
          paramType,
          imageTracking: route.params.imageTracking,
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
              setScale(state => {
                const st = state - get10Percent(state);
                return st <= 0 ? 0.1 : st;
              });
            }}
            title="Scale Down"
          />
          <Button
            onPress={() => {
              setScale(scaleValue);
              setRotateX(selected.initialValue.rotateX);
              setRotateY(selected.initialValue.rotateY);
            }}
            title="Reset Position"
          />
          <Button
            onPress={() => {
              setScale(state => state + get10Percent(state));
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
