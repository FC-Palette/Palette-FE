import { styled } from 'styled-components'
import { TABS_TEXTS } from 'constants/index'
import { NavTab } from 'components/index'

export const NavTabs = () => {
  return (
    <TabsGrid>
      {' '}
      {TABS_TEXTS.map(tab => (
        <NavTab
          key={tab[0]}
          icon={tab[0]}
          title={tab[1]}></NavTab>
      ))}
    </TabsGrid>
  )
}
export const TabsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 14px 20px 22px;
  row-gap: 12px;
`
