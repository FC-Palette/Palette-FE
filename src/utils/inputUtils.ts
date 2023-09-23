//공동구매 인풋

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

// 중고거래 인풋
export const secondHandUtils = (
  text,
  field,
  setSecondHandGlobalState,
  maxTitleLength
) => {
  switch (field) {
    case 'title':
      if (text.length <= maxTitleLength) {
        setSecondHandGlobalState(prev => ({
          ...prev,
          title: text
        }))
      }
      break
    case 'price':
      setSecondHandGlobalState(prev => ({
        ...prev,
        price: text
      }))
      break
    default:
      break
  }
}
