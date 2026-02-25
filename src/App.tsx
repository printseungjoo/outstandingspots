import './App.css'

import { FullMainScreen } from './ui/templates/FullMainScreen';
import { FetchStore } from './ui/organisms/Marker';

// 테스트용 코드
function App() {
  return (
    <div>
      <FullMainScreen />
      <FetchStore />
    </div>
  )
}

export default App
