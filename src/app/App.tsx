import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme, toogleTheme } = useTheme()

    return (
        <div className={classNames('app', { hovered: true, selected: true }, [theme, 'cls2', 'cls3'])}>
            <button onClick={toogleTheme}>TOGGLE</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>
            <AppRouter />
        </div>
    )
}

export default App