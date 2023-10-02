// export interface FilterBarProps {
//   filterButton?: React.ReactNode
//   filterOption?: React.ReactNode
//   filterText?: React.ReactNode
//   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
// }

// export interface CategoryBarProps {
//   categoryList?: string[]
//   categoryFilter?: React.ReactNode
//   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
// }
// export interface SideBarProps {
//   items?: {
//     title: React.ReactNode
//     content: React.ReactNode
//   }[]
//   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
//   count?: number
//   centerText?: string
//   icon?: boolean
// }둪

// 태욱
export interface FilterBarProps {
  filterButton?: React.ReactNode
  filterOption?: React.ReactNode
  filterText?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface CategoryBarProps {
  categoryList?: string[]
  categoryFilter?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface SideBarProps {
  items?: {
    title: string
    content: any
  }[]
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  count?: number
  centerText?: string
  icon?: boolean
}
