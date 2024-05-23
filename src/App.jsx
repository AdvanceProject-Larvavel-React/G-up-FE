import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../src/routes/AppRouter';
import Search from './global-components/core/Search/Search';
function App() {
  return (
    <Router>
    <Search/>
      <div className="app">
        <AppRouter />
      </div>
      </Router>
  )
}

export default App;