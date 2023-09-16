import { useState } from 'react'

export const useSelectedItems = (initialItems: string[] = []) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(initialItems)

  const isItemSelected = (item: string) => {
    return selectedItems.includes(item)
  }

  const handleSelectedItem = (item: string) => {
    // 무관처리
    if (item === '무관') {
      // '무관'을 선택한 경우, 모든 선택된 아이템을 제거
      setSelectedItems(['무관'])
    } else {
      // '무관'이 아닌 다른 아이템을 선택한 경우, '무관'을 배열에서 제거
      setSelectedItems(prevItems =>
        prevItems.filter(prevItem => prevItem !== '무관')
      )

      const isSelected = isItemSelected(item)

      if (isSelected) {
        // 이미 선택된 경우, 해당 아이템을 배열에서 제거
        setSelectedItems(prevItems =>
          prevItems.filter(prevItem => prevItem !== item)
        )
      } else {
        // 선택되지 않은 경우, 해당 아이템을 배열에 추가
        setSelectedItems(prevItems => [...prevItems, item])
      }
    }
  }

  return { selectedItems, isItemSelected, handleSelectedItem }
}
