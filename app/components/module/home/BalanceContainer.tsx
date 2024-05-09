import { $dimText } from "../../../core/styles/generalStyle"
import React from "react"
import { Text } from "../../general/Text"

interface BalanceContainerProps {
  totalBalance: string
}

export function BalanceContainer(props: BalanceContainerProps) {
  return (
    <>
      <Text text={"Balance"} preset={"mono"} size={"xs"} style={$dimText} />
      <Text text={props.totalBalance} preset={"monoSemiBold"} size="xl" />
    </>
  )
}
