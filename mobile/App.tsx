import React from 'react';

import ThemeProvider from 'ui/themes/ThemeProvider';
import Router        from 'ui/router/Router';

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
