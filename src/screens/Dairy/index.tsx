import React from 'react';
import { Background } from '../../components/Background';

import { styles } from './styles';
import { LogBox } from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();
export function Dairy() {
  return (
    <Background>
      
    </Background>
  );
}