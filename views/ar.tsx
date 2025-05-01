import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARImageMarker,
  ViroARScene,
  ViroARSceneNavigator,
  ViroARTrackingTargets,
  ViroNode,
  ViroQuad,
  ViroSpinner,
  ViroSpotLight,
} from '@reactvision/react-viro';
import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {ScreenType} from 'routes';

ViroARTrackingTargets.createTargets({
  logo: {
    source: require('assets/ar/tesla.png'),
    orientation: 'Up',
    physicalWidth: 0.125, // real world width in meters
  },
});

function get10Percent(value: number): number {
  return (value * 10) / 100;
}

const materi = {
  kucing: {
    model: require('assets/ar/cat/12221_Cat_v1_l3_obj.obj'),
    assets: [
      require('assets/ar/cat/12221_Cat_v1_l3.mtl'),
      require('assets/ar/cat/Cat_bump.jpg'),
    ],
    initialValue: {
      scale: 0.04,
      scaleImageRecognition: 0.004,
      rotateX: -90,
      rotateY: 50,
      position: [0, -2, 0],
    },
  },
  rusa: {
    model: require('assets/ar/dear/12961_White-Tailed_Deer_v1_l2_obj.obj'),
    assets: [
      require('assets/ar/dear/12961_White-Tailed_Deer_v1_l2.mtl'),
      require('assets/ar/dear/12961_White-TailedDeer_diffuse.jpg'),
    ],
    initialValue: {
      scale: 0.05,
      scaleImageRecognition: 0.004,
      rotateX: -90,
      rotateY: -60,
      position: [0, -2, 0],
    },
  },
  kuda: {
    model: require('assets/ar/horse/10026_Horse_v01-it2_obj.obj'),
    assets: [
      require('assets/ar/horse/10026_Horse_v01-it2.mtl'),
      require('assets/ar/horse/Horse_v01.jpg'),
    ],
    initialValue: {
      scale: 0.0015,
      scaleImageRecognition: 0.0001,
      rotateX: -90,
      rotateY: 50,
      position: [0, -3, 0],
    },
  },
};

function Ar(props: any) {
  const {scale, rotateX, rotateY, paramType, imageTracking} = props
    .sceneNavigator.viroAppProps as {
    paramType: 'rusa' | 'kucing' | 'kuda';
    scale: number;
    rotateY: number;
    rotateX: number;
    imageTracking: boolean;
  };
  const selectedMateri = materi[paramType];
  const [state, setState] = useState({
    hasARInitialized: false,
    text: 'Initializing AR...',
  });

  const model3d = (
    <Viro3DObject
      position={
        imageTracking
          ? [0, 0, 0]
          : (selectedMateri.initialValue.position as [number, number, number])
      }
      // transformBehaviors={['billboardX']}
      source={selectedMateri.model}
      rotation={[rotateX || 0, rotateY || 0, 0]}
      scale={[scale || 0, scale || 0, scale || 0]}
      type="OBJ"
      lightReceivingBitMask={3}
      shadowCastingBitMask={2}
      resources={selectedMateri.assets}
      onLoadEnd={() => {
        setState({
          hasARInitialized: true,
          text: '',
        });
      }}
    />
  );

  return (
    <ViroARScene>
      {/* Jika Image Tracking */}
      {imageTracking && (
        <ViroARImageMarker target={'logo'}>{model3d}</ViroARImageMarker>
      )}
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
  const scaleValue = route.params.imageTracking
    ? selected.initialValue.scaleImageRecognition
    : selected.initialValue.scale;
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
