import Api from '@/services/Api.js';
import axios from 'axios';

export default {
    index(bookmark){
        return Api().get('bookmarks',{
            params: bookmark
        });
    },
    post(bookmark){
        return Api().post('bookmarks',{
            params: bookmark
        });
    },
    delete(bookmarkId){
        return Api().delete(`bookmarks/${bookmarkId}`);
    }
}