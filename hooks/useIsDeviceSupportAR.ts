import {isARSupportedOnDevice} from '@reactvision/react-viro';
import {useEffect, useState} from 'react';

export default function useIsDeviceSupportAR(): boolean {
  const [isSupport, setIsSupport] = useState(false);

  useEffect(() => {
    isARSupportedOnDevice()
      .then(val => {
        setIsSupport(val.isARSupported);
      })
      .catch(err => {
        console.log('\n\n\n');
        console.log('Hooks Error: ');
        console.log(err);
      });
  }, []);

  return isSupport;
}
