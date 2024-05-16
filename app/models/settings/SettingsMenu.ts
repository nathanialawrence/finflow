import { IconTypes } from "../../components/general/Icon"

export interface SettingsMenu {
  id: string
  icon: IconTypes
  name: string
  onPress: () => void
}
