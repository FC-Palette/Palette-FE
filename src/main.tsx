import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from 'pages/Router'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/index'
import { RecoilRoot } from 'recoil'
import { GlobalStyles } from 'styles/index'
import { MediaQuery } from 'components/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <MediaQuery>
        <RouterProvider router={router} />
      </MediaQuery>
    </ThemeProvider>
  </RecoilRoot>
)
