import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { AuthContextProvider } from './components/shared/AuthContext';
import Login from './pages/Login/Login';
import ProtectedRoutes from './components/shared/ProtectedRoutes';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
