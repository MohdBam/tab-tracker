<template>
  <panel title="Songs">
      <v-btn 
        slot="action" 
        @click="navigateTo({name:'create-song'})"
        class="cyan accent-2"
        light
        medium
        absolute
        right
        middle
        fab>
        <v-icon>add</v-icon>
      </v-btn>

      <div class="song" slot="content" v-for="song in songs" :key="song.id">
        <v-layout>
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
            <v-btn class="cyan" @click="navigateTo({name:'song', params:{id:song.id}})" dark>View</v-btn>
          </v-flex>

          <v-flex xs6>
            <img class="album-image" :src="song.albumImage"/>
          </v-flex>
        </v-layout>
      </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data(){
      return{
        songs:[]
      }
  },
  watch: {
    '$route.query.search':{
      immediate: true,
      async handler(value){
        this.songs = (await SongsService.index(value)).data
      }
    }
  },
  methods: {
    navigateTo(route){
        this.$router.push(route)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song{
  padding: 20px;
  height: 330px;
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
