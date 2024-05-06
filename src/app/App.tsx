import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', { hovered: true, selected: true }, [theme, 'cls2', 'cls3'])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
            {/* <button onClick={toogleTheme}>TOGGLE</button> */}
        </div>
    )
}

export default App