import Api from '@/services/Api.js';
import axios from 'axios';

export default {
    index(search){
        return Api().get('songs',{
            params:{
                search:search
            }
        });
    },

    post(payload){
        return Api().post('songs',payload);
    },

    show(payload){
        return Api().get(`songs/${payload}`);
    },

    put(song){
        return Api().put(`songs/${song.id}`,song);
    },
    
}