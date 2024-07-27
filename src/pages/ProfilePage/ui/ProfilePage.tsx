import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';

const ProfilePage = () => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();

    // useInitialEffect(() => {
    //     if (id) {
    //         dispatch(fetchProfileData(id));
    //     }
    // });

    // useEffect(() => {
    //     if (__PROJECT__ !== 'storybook') {
    //         dispatch(fetchProfileData());
    //     }
    // }, [dispatch]);
    // if (!id) {
    //     return <Text text="Profile id not found" />;
    // }

    return (
        <Page>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
