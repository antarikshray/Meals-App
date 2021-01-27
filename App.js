import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import MealsNavigator from './navigation/MealsNavigator';
import { Provider } from 'react-redux';
import mealsReducer from './store/reducers/meal';

const rootReducer = combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {

  const [fontLoaded, setFontLoadded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => { setFontLoadded(true) }}
    />;
  }

  return <Provider store={store}>
    <MealsNavigator />
  </Provider>;
}

const styles = StyleSheet.create({

});
