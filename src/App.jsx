import AppRouter from './routes/AppRouter.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <Router>
    <div className="app">
      <AppRouter />
    </div>
    </Router>
  );
};
export default App;