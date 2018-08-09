import axios from 'axios'
import { apiUrl } from '../../config/base'

/**
 * Create Axios
 */
export const http = axios.create({
    baseURL: apiUrl,
})

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
http.defaults.headers.common = {
    'Authorization': 'Bearer '+ window.AccessToken
};

/**
 * Handle all error messages.
 */
http.interceptors.response.use(function (response) {
    return response;
}, function (error, res) {
    const { response } = error

    if ([401].indexOf(response.status) >= 0) {
        if (response.status == 401 && response.data.meta.message != 'Unauthorized') {
            return Promise.reject(response);
        }
        window.location = '/dashboard/login';
    }
    if ([400].indexOf(response.status) >= 0) {
        if (response.status == 400) {
            return Promise.reject(response);
        }
    }

    if ([403].indexOf(response.status) >= 0) {
        if (response.status == 403) {
            return Promise.reject(response);
        }
    }

    return Promise.reject(error);
});

export default function install(Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
        get() {
            return http
        },
    })
}
