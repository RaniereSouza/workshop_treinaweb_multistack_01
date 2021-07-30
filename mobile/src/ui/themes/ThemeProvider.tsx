import React                         from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { ThemeProvider as EmotionProvider } from '@emotion/react';

import AppTheme from './app-theme';

const ThemeProvider: React.FC = ({children}) => {
  return (
    <PaperProvider theme={AppTheme}>
      <EmotionProvider theme={AppTheme}>
        {children}
      </EmotionProvider>
    </PaperProvider>
  );
}

export default ThemeProvider;
