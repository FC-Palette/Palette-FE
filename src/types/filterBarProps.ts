export interface FilterBarProps {
  filterButton?: React.ReactNode
  filterOption?: React.ReactNode
  filterText?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export interface CategoryBarProps {
  // categoryList?: React.ReactNode
  categoryList?: string[]
  categoryFilter?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
