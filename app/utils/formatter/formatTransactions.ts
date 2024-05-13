export function formatNumber(amount: number) {
  const formattedNumber = Math.abs(amount).toLocaleString("id-ID")
  return amount < 0 ? `-Rp${formattedNumber}` : `Rp${formattedNumber}`
}
