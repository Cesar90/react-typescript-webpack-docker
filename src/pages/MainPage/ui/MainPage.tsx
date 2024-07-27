import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups/components/ListBox';
import { HStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/counter';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Main page')}
            <RatingCard
                title="This is title"
                feedbackTitle="This is feedback title"
                hasFeedback
            />
            <Counter />
            <HStack>
                <div>adasdasdf</div>
                <ListBox
                    defaultValue="Test testing"
                    onChange={(value: string) => { }}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '12', content: '123', disabled: true },
                        { value: '1', content: '123' },
                    ]}
                />
            </HStack>
        </Page>
    );
};

export default MainPage;
