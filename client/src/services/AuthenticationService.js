import Api from '@/services/Api.js';
import axios from 'axios';

export default {
    register(credentials){
        return Api().post('/register',credentials);
    }
}