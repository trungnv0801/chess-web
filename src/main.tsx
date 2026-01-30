import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/lang/index'
import '@/assets/scss/main.scss'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
