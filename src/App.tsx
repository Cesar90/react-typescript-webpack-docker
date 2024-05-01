import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTheme } from './theme/useTheme';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { classNames } from './helpers/classNames/classNames';
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
                    <Route path={`/about`} element={<AboutPageAsync />} />
                    <Route path={`/`} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App