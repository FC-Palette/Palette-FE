import { createBrowserRouter } from 'react-router-dom'
import { ErrorComponent } from 'components/index'
import {
  CareerMain,
  GroupPurchase,
  GroupBuying,
  Layout,
  ProfileEnter,
  SignIn,
  SignUp,
  FindId,
  FindPassword,
  MyPage,
  Setting,
  SecondHand,
  GroupUpload,
  CareerCreateMeetingStepOne,
  CareerCreateMeetingStepTwo,
  CareerCreateMeetingStepThree,
  CareerCreateMeetingStepPreview,
  ChatList,
  ChatOn,
  ChatAnn
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
      generateRoute('/secondHand', <SecondHand />, <ErrorComponent />)
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
      generateRoute('/setting', <Setting />, <ErrorComponent />)
    ]
  },
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      generateRoute('/chatlist', <ChatList />, <ErrorComponent />),
      generateRoute('/chat', <ChatOn />, <ErrorComponent />),
      generateRoute('/chatann', <ChatAnn />, <ErrorComponent />)
    ]
  }
])
