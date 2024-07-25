import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Articles';
import { loginReducer } from '@/features/AuthByUsername';
import { addCommentFormReducer } from '@/features/addCommentForm';
import { profileReducer } from '@/features/editableProfileCard';
import { articleDetailPageReducer } from '@/pages/ArticleDetailsPage';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

// const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={
            {
                ...defaultAsyncReducers,
                ...asyncReducers,
            }
        }
    >
        <StoryComponent />
    </StoreProvider>
);
