import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Main page')}
        </Page>
    );
};

export default MainPage;
