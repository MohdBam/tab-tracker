<template>
  <div>
    <v-layout>
      <v-flex xs6 v-if="isUserLoggedIn">
        <songs-bookmarks />
        <recently-viewed-songs class="mt-2" />
      </v-flex>
      <v-flex :class="{
        xs6: isUserLoggedIn,
        xs12: !isUserLoggedIn
      }" class="ml-2">
        <song-search-panel/>
        <songs-panel class="mt-4"/>
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'
import RecentlyViewedSongs from './RecentlyViewedSongs'
import SongSearchPanel from './SongSearchPanel'
import {mapState} from 'vuex'
export default {
  components:{
    SongsPanel,
    SongSearchPanel,
    SongsBookmarks,
    RecentlyViewedSongs
  },
  computed: {
    ...mapState(['isUserLoggedIn'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
