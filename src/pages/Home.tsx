import {
  NavArea,
  Footer,
  Template,
  AreaTitle,
  Navigation
} from 'components/index'
import { HOME_TEXTS } from 'constants/index'
import { MoreNews } from 'components/index'
export const Home = () => {
  return (
    <>
      <Template>
        <NavArea>
          <AreaTitle
            title={HOME_TEXTS.news}
            subitem={<MoreNews />}
            between={true}
          />
          <Navigation>
            하단 내비게이션 아이콘들입니다. 현재는 chidren으로 넘기기만 해놔서
            스타일 아무것도 없습니다. 컴포넌트 생성 후 여백 고려해서 스타일 적용
            예정{' '}
          </Navigation>{' '}
        </NavArea>
        <NavArea>
          <AreaTitle title={HOME_TEXTS.residents} />
          <Navigation>
            하단 내비게이션 아이콘들입니다. 현재는 chidren으로 넘기기만 해놔서
            스타일 아무것도 없습니다. 컴포넌트 생성 후 여백 고려해서 스타일 적용
            예정
          </Navigation>
        </NavArea>
        <NavArea>
          <AreaTitle title={HOME_TEXTS.community} />
          <Navigation>
            하단 내비게이션 아이콘들입니다. 현재는 chidren으로 넘기기만 해놔서
            스타일 아무것도 없습니다. 컴포넌트 생성 후 여백 고려해서 스타일 적용
            예정
          </Navigation>
        </NavArea>
        <NavArea>
          {/* datenow */}
          <AreaTitle
            title={HOME_TEXTS.timetable}
            subitem={'2023년 10월 2일 마감...'}
          />
          <Navigation>
            하단 내비게이션 아이콘들입니다. 현재는 chidren으로 넘기기만 해놔서
            스타일 아무것도 없습니다. 컴포넌트 생성 후 여백 고려해서 스타일 적용
            예정
          </Navigation>
        </NavArea>
      </Template>
      <Footer />
    </>
  )
}
