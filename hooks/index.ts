import appDetail from 'constants/app-detail';
import {createContext} from 'react';

export const AppDetailContext = createContext(appDetail);
export {default as useIsDeviceSupportAR} from 'hooks/useIsDeviceSupportAR';
