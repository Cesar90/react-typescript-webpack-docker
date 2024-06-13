import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <div style={{ color: 'purple' }}>
            {t('Main page')}
        </div>
    );
};

export default MainPage;
