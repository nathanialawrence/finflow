import { Transaction, TransactionType } from "../../models/transactions/Transaction"

import { $dimText } from "../../core/styles/generalStyle"
import React from "react"
import { Text } from "../general/Text"
import { View } from "react-native"
import { colors } from "../../theme"

interface TransactionItemProps {
  index: number
  data: Transaction[]
  item: Transaction
}

export function TransactionItem(props: TransactionItemProps) {
  const isSameDay = props.data[props.index - 1]
    ? props.item.date == props.data[props.index - 1].date
    : false

  return (
    <>
      {!isSameDay && (
        <View style={{ marginVertical: 8 }}>
          <Text text={"Sunday, May 5"} preset={"mono"} size={"xs"} style={$dimText} />
        </View>
      )}
      <View
        style={{
          borderLeftWidth: 4,
          paddingHorizontal: 8,
          paddingVertical: 6,
          borderColor:
            props.item.type == TransactionType.Expense
              ? colors.palette.expense
              : colors.palette.income,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            marginRight: 4,
          }}
        >
          <Text text={props.item.title} preset={"mono"} size={"xs"} />
          {props.item.notes && (
            <Text
              text={`Notes: ${props.item.notes}`}
              preset={"mono"}
              size={"xxxs"}
              style={$dimText}
            />
          )}
        </View>
        <View style={{ alignItems: "flex-end", marginLeft: 4 }}>
          <Text text={"Rp45.000"} preset={"monoSemiBold"} size={"xs"} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 16,
                backgroundColor: colors.palette.accent500,
                marginRight: 4,
              }}
            />
            <Text text={props.item.category} preset={"mono"} size={"xxxs"} style={$dimText} />
          </View>
        </View>
      </View>
    </>
  )
}
