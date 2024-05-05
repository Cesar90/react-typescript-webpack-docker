import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';

const App = () => {
    const { theme, toogleTheme } = useTheme()

    return (
        <div className={classNames('app', { hovered: true, selected: true }, [theme, 'cls2', 'cls3'])}>
            <Navbar />
            <AppRouter />
            <button onClick={toogleTheme}>TOGGLE</button>
        </div>
    )
}

export default App