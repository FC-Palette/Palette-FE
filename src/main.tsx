import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from 'pages/Router'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/index'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from 'styles/index'
import { Mobile } from 'components/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <GlobalStyles />
    <Mobile>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Mobile>
  </RecoilRoot>
)
