import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

function AdminPanelPage() {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Admin Panel')}
        </Page>
    );
}

export default AdminPanelPage;
