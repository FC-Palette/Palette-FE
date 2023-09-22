export const inputUtils = (
  text,
  field,
  setTradesGlobalState,
  maxTitleLength
) => {
  switch (field) {
    case 'title':
      if (text.length <= maxTitleLength) {
        setTradesGlobalState(prev => ({
          ...prev,
          title: text
        }))
      }
      break
    case 'shopUrl':
      setTradesGlobalState(prev => ({
        ...prev,
        shopUrl: text
      }))
      break
    case 'price':
      setTradesGlobalState(prev => ({
        ...prev,
        price: text
      }))
      break
    case 'headCount':
      setTradesGlobalState(prev => ({
        ...prev,
        headCount: text
      }))
      break
    default:
      break
  }
}
