import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'helpers/classNames/classNames';
import './styles/index.scss';

const App = () => {
    const { theme, toogleTheme } = useTheme()

    return (
        <div className={classNames('app', { hovered: true, selected: true }, [theme, 'cls2', 'cls3'])}>
            <button onClick={toogleTheme}>TOGGLE</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path={`/about`} element={<AboutPage />} />
                    <Route path={`/`} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App