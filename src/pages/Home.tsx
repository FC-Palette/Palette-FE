import {
  NavArea,
  Footer,
  Template,
  AreaTitle,
  Navigation
} from 'components/index'
import { HOME_TEXTS, NEWS_TEXTS } from 'constants/index'
import {
  MoreNews,
  NavContainer,
  NewsTab,
  NavTabs,
  CommunityTabs,
  ImgArea
} from 'components/index'
import { formatLocalDateTime } from 'utils/index'

export const Home = () => {
  return (
    <>
      <Template>
        <ImgArea />
        <NavArea>
          <AreaTitle
            title={HOME_TEXTS.news}
            subitem={<MoreNews />}
            $between={true}
          />
          <Navigation>
            <NavContainer
              $top={8}
              $middle={20}
              $bottom={17}>
              <NewsTab
                title={NEWS_TEXTS.inspection}
                content={NEWS_TEXTS.cleaning}
              />
              <NewsTab
                title={NEWS_TEXTS.living}
                content={NEWS_TEXTS.reservation}
              />
              <NewsTab
                title={NEWS_TEXTS.inspection}
                content={NEWS_TEXTS.lift}
              />
            </NavContainer>
          </Navigation>
        </NavArea>
        <NavArea>
          <AreaTitle title={HOME_TEXTS.residents} />
          <Navigation>
            <NavTabs />
          </Navigation>
        </NavArea>
        <NavArea>
          <AreaTitle title={HOME_TEXTS.community} />
          <Navigation>
            <CommunityTabs />
          </Navigation>
        </NavArea>
        <NavArea>
          {/* datenow */}
          <AreaTitle
            title={HOME_TEXTS.timetable}
            subitem={formatLocalDateTime(new Date())}
          />
          <Navigation> </Navigation>
        </NavArea>
      </Template>
      <Footer $fixed={false} />
    </>
  )
}
