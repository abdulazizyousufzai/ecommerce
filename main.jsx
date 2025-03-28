
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { BrowserRouter as Router} from 'react-router-dom';
import ShopContextProvider from './context/ShopContextProvider.jsx';
createRoot(document.getElementById('root')).render(
  <Router>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
    
  </Router>,
)
