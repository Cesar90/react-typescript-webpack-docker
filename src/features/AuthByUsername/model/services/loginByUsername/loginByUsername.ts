import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

// export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>>(
        'login/loginByUsername',
        async (authData: LoginByUsernameProps, thunkApi) => {
            const { extra, dispatch, rejectWithValue } = thunkApi;
            try {
                // const response = await axios.post<User>('http://localhost:8000/login', authData);
                const response = await extra.api.post<User>('/login', authData);

                if (!response.data) {
                    throw new Error();
                }

                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));
                // extra.navigate('/about');
                return response.data;
            } catch (error) {
                console.log(error);
                return rejectWithValue('error');
            }
        },
    );
