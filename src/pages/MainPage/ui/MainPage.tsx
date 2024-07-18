import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups/components/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page';
import { Counter } from 'entities/counter';

const MainPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Main page')}
            <Counter />
            <div>adasdasdf</div>
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
            <div>adasdasdf</div>
            <div>adasdasdf</div>
            <div>adasdasdf</div>
        </Page>
    );
};

export default MainPage;
