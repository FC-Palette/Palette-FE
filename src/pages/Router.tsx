import { createBrowserRouter } from 'react-router-dom'
import { ErrorComponent } from 'components/index'
import {
  CareerMain,
  GroupPurchase,
  Layout,
  ProfileEnter,
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
  SettingManage,
  SecondHand,
  GroupUpload,
  CareerCreateMeetingStepOne,
  CareerCreateMeetingStepTwo,
  CareerCreateMeetingStepThree,
  CareerCreateMeetingStepPreview,
  ChatList,
  ChatOn,
  ChatAnnList,
  ChatAnnDetail,
  IsNotApprovedJoinMeetingStepOne,
  IsApprovedJoinMeetingStepOne,
  IsApprovedJoinMeetingStepTwo,
  IsApprovedJoinMeetingStepComplete,
  CareerDetail,
  CareerDetailMemberSeeMore,
  SecondHandUpload
} from 'pages/index'
import type { RouteObject } from 'react-router-dom'
import { Start } from './Start'

//페이지 정보를 담고있는 객체를 반환하는 함수.
const generateRoute = (path, component, error, children?): RouteObject => {
  return {
    path: path,
    element: component,
    errorElement: error,
    children: children
  }
}

export const router = createBrowserRouter([
  // Layout의 Outlet내로 children 내부 경로입력시 컴포넌트 렌더링,
  // 4번째인수의 배열(children)에서 다음의 예시에서는 "/test/3" 경로사용 (첫번째 인수에서 slash입력시{'/3'} "test//3"로 사용해야함)
  // 따라서 경로입력시 슬래시(/)중복주의, ex) '/signin'대신 'signin' + 최상위 /test는 예외
  // {
  //   path: '/',
  //   element: <Layout />,
  //   errorElement: <ErrorComponent />,
  //   children: [
  //     generateRoute('/trades', <Test />, <ErrorComponent />, [
  //       generateRoute('3', <Test3 />, <ErrorComponent />),
  //     ]),
  //   ]
  // }
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: []
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/groupPurchase', <GroupPurchase />, <ErrorComponent />),
      generateRoute('/groupUpload', <GroupUpload />, <ErrorComponent />),
      generateRoute('/secondHand', <SecondHand />, <ErrorComponent />),
      generateRoute(
        '/secondHandUpload',
        <SecondHandUpload />,
        <ErrorComponent />
      ),
      generateRoute('/GroupUpload/:stepId', <GroupUpload />, <ErrorComponent />)
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/careerMain', <CareerMain />, <ErrorComponent />),
      generateRoute('/profile-1', <ProfileEnter />, <ErrorComponent />)
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute(
        '/createMeeting-1',
        <CareerCreateMeetingStepOne />,
        <ErrorComponent />
      ),
      generateRoute(
        '/createMeeting-2',
        <CareerCreateMeetingStepTwo />,
        <ErrorComponent />
      ),
      generateRoute(
        '/createMeeting-3',
        <CareerCreateMeetingStepThree />,
        <ErrorComponent />
      ),
      generateRoute(
        '/createMeeting-preview',
        <CareerCreateMeetingStepPreview />,
        <ErrorComponent />
      ),
      generateRoute(
        '/isNotApproved-joinMeeting-1',
        <IsNotApprovedJoinMeetingStepOne />,
        <ErrorComponent />
      ),
      generateRoute(
        '/isApproved-joinMeeting-1',
        <IsApprovedJoinMeetingStepOne />,
        <ErrorComponent />
      ),
      generateRoute(
        'isApproved-joinMeeting-2',
        <IsApprovedJoinMeetingStepTwo />,
        <ErrorComponent />
      ),
      generateRoute(
        'isApproved-joinMeeting-complete',
        <IsApprovedJoinMeetingStepComplete />,
        <ErrorComponent />
      ),
      generateRoute('careerDetail', <CareerDetail />, <ErrorComponent />),
      generateRoute(
        'careerDetail/members',
        <CareerDetailMemberSeeMore />,
        <ErrorComponent />
      )
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/start', <Start />, <ErrorComponent />),
      generateRoute('/signup', <SignUp />, <ErrorComponent />),
      generateRoute('/signin', <SignIn />, <ErrorComponent />),
      generateRoute('/findid', <FindId />, <ErrorComponent />),
      generateRoute('/findpassword', <FindPassword />, <ErrorComponent />)
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/mypage', <MyPage />, <ErrorComponent />),
      generateRoute('/setting', <Setting />, <ErrorComponent />),
      generateRoute('/alarm', <Alarm />, <ErrorComponent />),
      generateRoute('/setting-password', <SettingPassword />, <ErrorComponent />),
      generateRoute('/setting-alarm', <SettingAlarm />, <ErrorComponent />),
      generateRoute('/setting-manage', <SettingManage />, <ErrorComponent />),
      generateRoute('/setting-notice', <SettingNotice />, <ErrorComponent />),
      generateRoute('/setting-service', <SettingService />, <ErrorComponent />),
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/chatlist', <ChatList />, <ErrorComponent />),
      generateRoute('/chat', <ChatOn />, <ErrorComponent />),
      generateRoute('/chatannlist', <ChatAnnList />, <ErrorComponent />),
      generateRoute('/chatann', <ChatAnnDetail />, <ErrorComponent />)
    ]
  }
])
