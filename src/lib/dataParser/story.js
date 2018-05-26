export const reader = item => {
  const rawContent = JSON.parse(item.data)
  const name = rawContent.blocks[0].text
  return {
    ...item,
    name,
    rawContent
  }
}
