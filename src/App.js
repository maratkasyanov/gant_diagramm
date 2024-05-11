import { Route, Routes } from 'react-router-dom';
import './App.scss';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/index'
import './firebase'
import CreateProject from './pages/CreateProject';
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Routes >
                    <Route path='/' element={<HomePage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/newproj' element={<CreateProject />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
