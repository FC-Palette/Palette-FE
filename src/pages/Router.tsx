import { createBrowserRouter } from 'react-router-dom'
import { ErrorComponent } from 'components/index'
import {
  CareerMain,
  GroupPurchase,
  Layout,
  SignIn,
  SignUp,
  FindId,
  FindPassword,
  MyPage,
  Alarm,
  Setting,
  SettingAlarm,
  SettingNotice,
  SettingPassword,
  SettingService,
  SecondHand,
  GroupUpload,
  ChatList,
  ChatOn,
  ChatAnnList,
  ChatAnnDetail,
  CareerDetail,
  CareerDetailMemberSeeMore,
  SecondHandUpload,
  CareerMeetingsCreate,
  SecondHandDetail,
  GroupPurchaseDetail,
  CareerIsNotUserInfo,
  CareerIsNotApprovedJoinMeeting,
  ModifyProfile,
  CareerMeetingConfirm,
  CareerEdit,
  Home,
  Friend,
  GroupEdit,
  SecondHandEdit
} from 'pages/index'
import type { RouteObject } from 'react-router-dom'
import { Start } from './Start'
import CareerIsApprovedJoinMeeting from './CareerIsApprovedJoinMeeting'

//페이지 정보를 담고있는 객체를 반환하는 함수.
const generateRoute = (path, component, children?): RouteObject => {
  return {
    path: path,
    element: component,
    errorElement: <ErrorComponent />,
    children: children
  }
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [generateRoute('/', <Start />), generateRoute('/home', <Home />)]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/groupPurchase', <GroupPurchase />),
      generateRoute('/secondHand', <SecondHand />),
      generateRoute('/secondHandUpload/:stepId', <SecondHandUpload />),
      generateRoute('/GroupUpload/:stepId', <GroupUpload />),
      generateRoute('/secondHand/:productId', <SecondHandDetail />),
      generateRoute('/groupPurchase/:offerId', <GroupPurchaseDetail />),
      generateRoute('/GroupEdit/:stepId', <GroupEdit />),
      generateRoute('/secondhandEdit/:stepId', <SecondHandEdit />)
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/career', <CareerMain />),
      generateRoute('/profile', <CareerIsNotUserInfo />),
      generateRoute('/participate/confirm/:checkid', <CareerMeetingConfirm />),
      generateRoute('/create/:createstepid', <CareerMeetingsCreate />),
      generateRoute(
        '/joinmeeting/approved/:approvedstepid',
        <CareerIsApprovedJoinMeeting />
      ),
      generateRoute('/joinmeeting/not', <CareerIsNotApprovedJoinMeeting />),
      generateRoute('detail/:detailid', <CareerDetail />),
      generateRoute('detail/:detailid/members', <CareerDetailMemberSeeMore />),
      generateRoute('/edit/:editstep', <CareerEdit />)
    ]
  },

  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/start', <Start />),
      generateRoute('/signup', <SignUp />),
      generateRoute('/signin', <SignIn />),
      generateRoute('/findid', <FindId />),
      generateRoute('/findpassword', <FindPassword />)
    ]
  },

  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/mypage', <MyPage />),
      generateRoute('/mypage/:member_id', <MyPage />),
      generateRoute('/modifyprofile', <ModifyProfile />),
      generateRoute('/simpleprofile', <ModifyProfile />),
      generateRoute('/friend', <Friend />),
      generateRoute('/setting', <Setting />),
      generateRoute('/alarm', <Alarm />),
      generateRoute('/setting/password', <SettingPassword />),
      generateRoute('/setting/alarm', <SettingAlarm />),
      generateRoute('/setting/notice', <SettingNotice />),
      generateRoute('/setting/service', <SettingService />)
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/chatlist/:chattype', <ChatList />),
      generateRoute('/chat', <ChatOn />),
      generateRoute('/chatannlist', <ChatAnnList />),
      generateRoute('/chatann', <ChatAnnDetail />)
    ]
  }
]

export const router = createBrowserRouter(routes)
