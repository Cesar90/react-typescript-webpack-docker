import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { $api } from 'shared/api/api';
import { profileReducer } from 'entities/Profile';
import { articleDetailsReducer } from 'entities/Articles';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
        articleDetails: articleDetailsReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    // const store = configureStore<StateSchema>({
    const store = configureStore({
        // reducer: rootReducer,
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
// export const useAppDispatch = () => useDispatch<AppDispatch>()
