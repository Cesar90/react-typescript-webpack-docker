import { useTranslation } from 'react-i18next'

function AboutPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('About us')}
        </div>
    )
}

export default AboutPage