<template>
    <panel title="detials">
        <v-layout slot="content">
            <v-flex xs6>
                <div class="song-title">
                    {{song.title}}
                </div>
                <div class="song-artist">
                    {{song.artist}}
                </div>
                <div class="song-genre">
                    {{song.genre}}
                </div>

                <v-btn class="cyan" @click="navigateTo({name:'edit-song', params:{id:song.id}})" dark>Edit</v-btn>
                <v-btn v-if="this.$store.state.isUserLoggedIn && !bookmark" class="cyan" @click="setAsBookmark" dark>Set As Bookmark</v-btn>
                <v-btn v-if="this.$store.state.isUserLoggedIn && bookmark" class="cyan" @click="unbookmark" dark>Unset Bookmark</v-btn>

            </v-flex>

            <v-flex xs6>
            <img class="album-image" :src="song.albumImage"/>
            <br>
            {{song.album}}
            </v-flex>
        </v-layout>
    </panel>
</template>

<script>
import {mapState} from 'vuex';
import BookmarksService from '@/services/BookmarksService';
export default {
    props:['song'],
    data(){
        return{
            bookmark:null
        }
    },
    computed: {
        ...mapState(['isUserLoggedIn'])
    },
    async mounted() {
        if(!this.$store.state.isUserLoggedIn){
            return
        }
        try{
            const bookmarks = (await BookmarksService.index({
                songId: this.song.id,
            })).data
            if(bookmarks.length){
                this.bookmark = bookmarks[0]
            }
        }
        catch(err){
            console.log(err)
        }
    },
    methods:{
        navigateTo(route){
        this.$router.push(route)
        },
        async setAsBookmark(){
            try{
                this.bookmark = (await BookmarksService.post({
                    songId : this.song.id,
                    userId : this.$store.state.user.id
                })).data

            }
            catch(err){
                console.log(err)
            }
        },
        async unbookmark(){
            try{
                await BookmarksService.delete(this.bookmark.id)
                this.bookmark = null
            }
            catch(err){
                console.log(err)
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song{
  padding: 20px;
  height: 100%;
  overflow: hidden;
}
.album-image{
  width:100%
}
.song-title{
  font-size: 30px;
}
.song-artist{
  font-size: 24px;
}
.song-genre{
  font-size: 18px;
}
</style>
