import axios from "axios";
import { TOKEN_LOCALSTORAGE_KEY } from "shared/const/localstorage";
console.log("__API__", __API__);

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: `Bearer ${localStorage.getItem(TOKEN_LOCALSTORAGE_KEY)}`
    }
});
