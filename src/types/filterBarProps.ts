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
    title: React.ReactNode
    content: React.ReactNode
  }[]
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  count?: number
  centerText?: string
}
