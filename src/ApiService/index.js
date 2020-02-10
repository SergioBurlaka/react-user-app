import axios from 'axios';

const USER_API_BASE_URL = 'http://frontend-candidate.dev.sdh.com.ua/v1/contact/';


class ApiService {

    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + user.id, user);
    }

}

export default new ApiService();