import Api from '@/services/Api.js';
import axios from 'axios';

export default {
    index(query){
        return Api().get('history',{
            params: query
        });
    },
    post(history){
        return Api().post('history',history);
    }
}