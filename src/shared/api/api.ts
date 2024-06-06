import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'http://production.ru'

export const $api = axios.create({
    baseURL,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})