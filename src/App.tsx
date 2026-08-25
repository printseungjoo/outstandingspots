import './App.css'

import { BrowserRouter } from 'react-router-dom';
import { FullMainScreen } from './ui/templates/FullMainScreen';

function App() {
  return (
    <BrowserRouter>
      <FullMainScreen />
    </BrowserRouter>
  )
} 

export default App
