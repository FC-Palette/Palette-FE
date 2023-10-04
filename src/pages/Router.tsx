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
  SimpleProfile
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

export const router = createBrowserRouter([
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
      generateRoute('/groupPurchase/:offerId', <GroupPurchaseDetail />)
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/career', <CareerMain />),
      generateRoute('/profile/:profileid', <CareerIsNotUserInfo />),
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
      generateRoute('/changeprofile', <ChangeProfile />),
      generateRoute('/modifyprofile', <ModifyProfile />, <ErrorComponent />),
      generateRoute('/simpleprofile', <ModifyProfile />, <ErrorComponent />),
      generateRoute('/setting', <Setting />, <ErrorComponent />),
      generateRoute('/alarm', <Alarm />, <ErrorComponent />),
      generateRoute('/setting/password', <SettingPassword />, <ErrorComponent />),
      generateRoute('/setting/alarm', <SettingAlarm />, <ErrorComponent />),
      generateRoute('/setting/notice', <SettingNotice />, <ErrorComponent />),
      generateRoute('/setting/service', <SettingService />, <ErrorComponent />),
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
])
