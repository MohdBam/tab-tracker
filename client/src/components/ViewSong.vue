<template>
    <div>
        <v-layout class="mt-4">
            <v-flex xs6>
                <song-details :song="song"></song-details>
            </v-flex>
            <v-flex class="ml-2" xs6>
                <you-tube :youtubeId="song.youtubeId"></you-tube>
            </v-flex>
        </v-layout>

        <v-layout class="mt-2">
            <v-flex xs6>
                <song-lyrics :song="song"></song-lyrics>
            </v-flex>

            <v-flex class="ml-2" xs6>
                <song-tab :song="song"></song-tab>
            </v-flex>
        </v-layout>
    </div>
        
</template>

<script>
import {mapState} from 'vuex';
import SongsService from '@/services/SongsService'
import SongDetails from './song/SongDetails'
import SongTab from './song/SongTab'
import SongLyrics from './song/SongLyrics'
import YouTube from './song/YouTube'
import SongsHistoryService from '@/services/SongsHistoryService'
export default {
    data(){
        return {
            song:null
        }
    },
    async mounted(){
        try{
        const id = this.$store.state.route.params.id;
        this.song = (await SongsService.show(id)).data;

        if(this.isUserLoggedIn){
            SongsHistoryService.post({
                songId: id,
            })
        }
        }
        catch(err){
            console.log(err);
        }
    },
    computed: {
        ...mapState(['isUserLoggedIn','user'])
    },
    components:{
        SongDetails,
        SongLyrics,
        SongTab,
        YouTube
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-toolbar__title{
    font-size: 48px;
}
</style>
