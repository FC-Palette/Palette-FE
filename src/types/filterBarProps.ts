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
  titles?: React.ReactNode[]
  contents?: React.ReactNode[]
  filterText?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
