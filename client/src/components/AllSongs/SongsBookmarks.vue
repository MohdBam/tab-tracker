<template>
    <panel title="Bookmarks">
        <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
            :items="bookmarks" slot="content">
            <template slot="items" slot-scope="props">
                <td class="text-xs-right">
                    {{props.item.title}}
                </td>
                
                <td class="text-xs-right">
                    {{props.item.artist}}
                </td>
                
            </template>
        </v-data-table>
    </panel>
</template>

<script>
import {mapState} from 'vuex'
import Panel from '../global/Panel'
import BookmarksService from '@/services/BookmarksService';

export default {
    components:{
        Panel
    },
    data(){
        return {
            headers:[{
                text : "Title",
                value: 'title'
            },
            {
                text : "Artist",
                value: 'artist'
            }
            ],
            pagination:{
                sortBy: 'createdAt',
                descending: true
            },
            bookmarks:[{
                title : "Hello world",
                artist: 'test'
            },
            {
                title : "Hello",
                artist: 'test'
            }
            ] ,

        }
    },
    computed: {
        ...mapState(['isUserLoggedIn'])
    },
    async mounted(){
        if(this.isUserLoggedIn){
            this.bookmarks = (await BookmarksService.index()).data
        }
    }
}
</script>

<style>

</style>
