import { createBrowserRouter } from 'react-router-dom'
import { ErrorComponent } from 'components/index'
import { SignIn } from 'pages/index'

//페이지 정보를 담고있는 객체를 반환하는 함수.
const generateRoute = (path, component, error) => {
  return {
    path: path,
    element: component,
    errorComponent: error
  }
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
    errorElement: <ErrorComponent />,
    children: [
      // generateRoute("dashboard", <Dashboard />, <ErrorComponent />),
      // generateRoute("about", <About />, <ErrorComponent />)
    ]
  }
])
