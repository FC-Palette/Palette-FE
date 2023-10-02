import { COMMUNITY_TEXTS } from 'constants/index'
import { NavTab, TabsGrid } from 'components/index'
export const CommunityTabs = () => {
  return (
    <TabsGrid>
      {COMMUNITY_TEXTS.map(tab => (
        <NavTab
          key={tab[0]}
          icon={tab[0]}
          title={tab[1]}></NavTab>
      ))}
    </TabsGrid>
  )
}
