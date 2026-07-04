import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <h1>Hello.....Lets learn something today!!!</h1> */}
    <App/>
  </StrictMode>,
)
