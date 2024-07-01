import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

function AboutPage() {
    const { t } = useTranslation();

    return (
        <Page>
            {t('About us')}
        </Page>
    );
}

export default AboutPage;
