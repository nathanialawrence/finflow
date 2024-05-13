import { Transaction, TransactionType } from "../../models/transactions/Transaction"

import { $dimText } from "../../core/styles/generalStyle"
import React from "react"
import { Text } from "../general/Text"
import { View } from "react-native"
import { colors } from "../../theme"
import { formatNumber } from "../../utils/formatter/formatTransactions"
import moment from "moment"

interface TransactionItemProps {
  index: number
  data: Transaction[]
  item: Transaction
}

export function TransactionItem(props: TransactionItemProps) {
  const { index, data, item } = props
  const prevItem = data[index - 1]
  const isSameDay = prevItem && moment(item.date).isSame(prevItem.date, "day")
  const isSameMonth = prevItem && moment(item.date).isSame(prevItem.date, "month")

  return (
    <>
      {!isSameMonth && (
        <View style={{ marginTop: 8 }}>
          <Text
            text={moment(item.date).format("MMMM YYYY")}
            preset={"mono"}
            size={"md"}
            style={$dimText}
          />
        </View>
      )}
      {!isSameDay && (
        <View style={{ marginVertical: 8 }}>
          <Text
            text={moment(item.date).format("MMM Do")}
            preset={"mono"}
            size={"xs"}
            style={$dimText}
          />
        </View>
      )}
      <View
        style={{
          borderLeftWidth: 4,
          paddingHorizontal: 8,
          paddingVertical: 6,
          borderColor:
            item.type == TransactionType.Expense ? colors.palette.expense : colors.palette.income,
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
          <Text text={item.title} preset={"mono"} size={"xs"} />
          {item.notes && <Text text={item.notes} preset={"mono"} size={"xxxs"} style={$dimText} />}
        </View>
        <View style={{ alignItems: "flex-end", marginLeft: 4 }}>
          <Text text={formatNumber(item.amount)} preset={"monoSemiBold"} size={"xs"} />
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
            <Text text={item.category} preset={"mono"} size={"xxxs"} style={$dimText} />
          </View>
        </View>
      </View>
    </>
  )
}
