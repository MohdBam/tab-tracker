<template>
    <panel title="Latest viewed">
        <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
            :items="songs" slot="content">
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
import SongsHistoryService from '@/services/SongsHistoryService';

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
            songs:[] ,

        }
    },
    computed: {
        ...mapState(['isUserLoggedIn'])
    },
    async mounted(){
        if(this.isUserLoggedIn){
            this.songs = (await SongsHistoryService.index()).data
            console.log(this.songs)
        }
    }
}
</script>

<style>

</style>
