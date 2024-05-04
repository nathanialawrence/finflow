/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as storage from "./app/utils/storage"

import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
import { persistor, store } from "./app/redux/store/store"

import { AppNavigator } from "./app/navigators/AppNavigator"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import React from "react"
import { ViewStyle } from "react-native"
import { useNavigationPersistence } from "./app/navigators/navigationUtilities"

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"

function App(): React.JSX.Element {
  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY)

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <GestureHandlerRootView style={$container}>
            <AppNavigator
              initialState={initialNavigationState}
              onStateChange={onNavigationStateChange}
            />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

export default App

const $container: ViewStyle = {
  flex: 1,
}
