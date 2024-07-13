import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

function ForbiddenPage() {
    const { t } = useTranslation();

    return (
        <Page>
            {t('ForbiddenPage')}
        </Page>
    );
}

export default ForbiddenPage;
