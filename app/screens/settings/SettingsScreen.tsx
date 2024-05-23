import { $dimText, $rowContainer, $screenContentContainer } from "../../core/styles/generalStyle"
import { FlatList, TouchableOpacity, View } from "react-native"
import React, { FC } from "react"

import Divider from "../../components/general/Divider"
import { Icon } from "../../components/general/Icon"
import { Screen } from "../../components/general/Screen"
import { SettingsMenu } from "../../models/settings/SettingsMenu"
import { TabNavigatorScreenProps } from "../../navigators/TabNavigator"
import { Text } from "../../components/general/Text"
import { colors } from "../../theme"
import { deleteAllTransactions } from "../../redux/actions/transactionsActions"
import { useDispatch } from "react-redux"

export const SettingsScreen: FC<TabNavigatorScreenProps<"Settings">> = function SettingsScreen(
  _props,
) {
  const { navigation } = _props
  const dispatch = useDispatch()

  const settingsMenuData: SettingsMenu[] = [
    {
      id: "1",
      icon: "community",
      name: "Edit Profile",
      onPress: () => handleEditProfile(),
    },
    {
      id: "2",
      icon: "bell",
      name: "Clear All Transactions",
      onPress: () => handleClearTransactions(),
    },
  ]

  const handleEditProfile = () => {
    navigation.navigate("EditProfile")
  }

  const handleClearTransactions = () => {
    dispatch(deleteAllTransactions())
  }
  return (
    <Screen preset={"fixed"} contentContainerStyle={$screenContentContainer}>
      <FlatList
        data={settingsMenuData}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => {
          return <Text text={"Settings"} preset={"semiBold"} size={"xl"} />
        }}
        ListHeaderComponentStyle={{ marginBottom: 8 }}
        ItemSeparatorComponent={() => {
          return <Divider />
        }}
        renderItem={({ item }) => (
          <TouchableOpacity style={[$rowContainer, { paddingVertical: 16 }]} onPress={item.onPress}>
            <Icon
              icon={item.icon}
              size={24}
              color={colors.palette.neutral700}
              style={{ marginRight: 12 }}
            />
            <Text text={item.name} preset={"default"} size={"xs"} style={$dimText} />
          </TouchableOpacity>
        )}
      />
    </Screen>
  )
}
