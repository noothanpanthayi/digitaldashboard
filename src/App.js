import './App.css'
// import AppRouter from './Router/Router';
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/header/header'
import AppRouter from './Router/Router'
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <AppRouter />
        <Footer/>
      </Router>
    </div>
  )
}

export default App
