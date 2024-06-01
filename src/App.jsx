import { AuthProvider } from './guards/AuthProvider.jsx';
import AppRouter from './routes/AppRouter.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <AuthProvider>
      <Router>
      <div className="app">
        <AppRouter />
      </div>
      </Router>
    </AuthProvider>
  );
};
export default App;