import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabNavigator, TabNavigatorParamList } from "./TabNavigator"

import { AddTransactionScreen } from "../screens/transactions/AddTransactionScreen"
import { EditProfileScreen } from "../screens/authentication/EditProfileScreen"
import { EditTransactionScreen } from "../screens/transactions/EditTransactionScreen"
import { ProfileScreen } from "../screens/authentication/ProfileScreen"
import { Transaction } from "../models/transactions/Transaction"
import { WelcomeScreen } from "../screens/authentication/WelcomeScreen"
import { colors } from "../theme/colors"
import { navigationRef } from "./navigationUtilities"
import { useColorScheme } from "react-native"

export type AppStackParamList = {
  Welcome: undefined
  Profile: undefined
  EditProfile: undefined
  Tab: NavigatorScreenParams<TabNavigatorParamList>
  AddTransaction: undefined
  EditTransaction: { transactionItem: Transaction }
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
      }}
      initialRouteName={"Welcome"}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
      <Stack.Screen name="EditTransaction" component={EditTransactionScreen} />
    </Stack.Navigator>
  )
}

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}
