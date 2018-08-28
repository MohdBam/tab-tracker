<template>
    <panel title="Search">
        <v-text-field slot="content" label ="Search by song title, artist, album, or genere" v-model="search"></v-text-field>
    </panel>
</template>

<script>
import _ from 'lodash'
export default {
    data(){
        return{
            search:''
        }
    },
    watch :{
        search: _.debounce(async function(value){
           const route = {
               name: 'songs'
           }

           if(value!==''){
               route.query = {
                 search : value  
               }
           }
           this.$router.push(route);
        }, 700),
        '$route.query.search':{
         immediate : true,
         handler(value){
             this.search=value
         }   
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
