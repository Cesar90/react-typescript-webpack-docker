import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

function AboutPage() {
    const { t } = useTranslation();

    return (
        <Page>
            {t('About us')}
        </Page>
    );
}

export default AboutPage;
