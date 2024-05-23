import { TouchableOpacity, View } from "react-native"
import {
  Transaction,
  TransactionCategory,
  TransactionType,
} from "../../models/transactions/Transaction"
import { colors, spacing } from "../../theme"

import { $dimText } from "../../core/styles/generalStyle"
import React from "react"
import { Text } from "../general/Text"
import { formatNumber } from "../../utils/formatter/formatTransactions"
import moment from "moment"
import { transactionCategoryData } from "../../data/transactions/transactionCategoryData"

interface TransactionItemProps {
  index: number
  data: Transaction[]
  item: Transaction
  onTransactionPress: () => void
}

export function TransactionItem(props: TransactionItemProps) {
  const { index, data, item, onTransactionPress } = props
  const prevItem = data[index - 1]
  const isSameDay = prevItem && moment(item.date).isSame(prevItem.date, "day")
  const isSameMonth = prevItem && moment(item.date).isSame(prevItem.date, "month")

  const getCategoryColor = (category: TransactionCategory) => {
    const categoryData = transactionCategoryData.find((item) => item.value === category)
    return categoryData ? categoryData.color : null
  }

  return (
    <>
      {!isSameMonth && (
        <View style={{ marginTop: spacing.xs }}>
          <Text
            text={moment(item.date).format("MMMM YYYY")}
            preset={"default"}
            size={"md"}
            style={$dimText}
          />
        </View>
      )}
      {!isSameDay && (
        <View style={{ marginVertical: spacing.xs }}>
          <Text
            text={moment(item.date).format("ddd Do")}
            preset={"default"}
            size={"xs"}
            style={$dimText}
          />
        </View>
      )}
      <TouchableOpacity
        style={{
          borderLeftWidth: spacing.xxs,
          paddingHorizontal: spacing.xs,
          paddingVertical: spacing.xxs,
          borderColor:
            item.type == TransactionType.Expense ? colors.palette.expense : colors.palette.income,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={onTransactionPress}
      >
        <View style={{ flex: 1, alignItems: "flex-start", marginRight: spacing.xxs }}>
          <Text text={item.title} preset={"default"} size={"xs"} />
          {item.notes && (
            <Text text={item.notes} preset={"default"} size={"xxxs"} style={$dimText} />
          )}
        </View>
        <View style={{ alignItems: "flex-end", marginLeft: spacing.xxs }}>
          <Text text={formatNumber(item.amount)} preset={"semiBold"} size={"xs"} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                height: spacing.xs,
                width: spacing.xs,
                borderRadius: spacing.md,
                backgroundColor: getCategoryColor(item.category) ?? colors.palette.pale100,
                marginRight: spacing.xxs,
              }}
            />
            <Text text={item.category} preset={"default"} size={"xxxs"} style={$dimText} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}
