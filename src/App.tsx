import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppTheme } from './features/shared/styles/Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Helmet } from "react-helmet-async";
import store from './features/shared/redux/store';
import { TestPageRoute } from './Routes';

export const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Helmet>
        <title>AlpineCore</title>
      </Helmet>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </ThemeProvider>
  );
}

export const AppRoutes: React.FC<{}> = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="*" element={<TestPageRoute />} />
        </Routes>
      </HashRouter>
    </>
  );
}