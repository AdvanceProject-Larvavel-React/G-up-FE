import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../src/routes/AppRouter';
function App() {
  return (
      <Router>
      <div className="app">
        <AppRouter />
      </div>
      </Router>
  )
}

export default App;