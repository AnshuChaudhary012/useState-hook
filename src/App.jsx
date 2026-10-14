import Navbar from './components/Navbar.jsx'
import { navigationLinks } from './utilities/navData.js'

function App() {
  return <Navbar brandName="NavBar" links={navigationLinks} />
}

export default App
