<template>
    <div>
        <panel :title="'edit ('+song.title+')'">
            <v-layout slot="content">
                <v-flex xs4>
                    <v-text-field
                    label="Title" v-model="song.title" :rules="[required]"
                    ></v-text-field>

                    <v-text-field
                    label="Artist" v-model="song.artist" :rules="[required]"
                    ></v-text-field>

                    <v-text-field
                    label="Genre" v-model="song.genre" :rules="[required]"
                    ></v-text-field>

                    <v-text-field
                    label="Album" v-model="song.album" :rules="[required]"
                    ></v-text-field>

                    <v-text-field
                    label="Album Image" v-model="song.albumImage" :rules="[required]"
                    ></v-text-field>

                    <v-text-field
                    label="Youtube ID" v-model="song.youtubeId" :rules="[required]"
                    ></v-text-field>
                </v-flex>
                
                <v-flex class="ml-4" xs8>
                    <v-text-field
                    label="Lyrics" multi-line v-model="song.lyrics" :rules="[required]"
                    ></v-text-field>
                    <v-text-field
                    label="Tab" multi-line v-model="song.tab" :rules="[required]"
                    ></v-text-field>
                </v-flex>
            </v-layout>
        </panel>
        <v-alert class="ml-4" :value="error" transition="scale-transition" error> {{error}} </v-alert>
                <v-btn class="cyan" @click="save" dark>save</v-btn>
    </div>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
    data(){
        return {
            song:{
                title : null,
                artist : null,
                genre : null,
                album : null,
                albumImage : null,
                youtubeId : null,
                lyrics : null,
                tab : null
            },
            required: (value) => !!value || 'Required.',
            error: null
        }
    },
    methods:{
        async save(){
            this.error = null;
            const areAllFieldsFilled = Object.keys(this.song).every(key => !!this.song[key]);
            if(!areAllFieldsFilled){
                console.log("error")
                this.error = 'Please fill in all the required fields.'
                return
            }
            try{
            const song = await SongsService.put(this.song)
            this.$router.push({
                name:"song",
                params: {
                    id:this.$store.state.route.params.id
                }
            })
            }
            catch(err){
                console.log(err)
            }
        }
    },

    async created(){
        try{
        const id = this.$store.state.route.params.id;
        this.song = (await SongsService.show(id)).data;
        console.log(this.song);
        }
        catch(err){
            console.log(err);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger-red{
    color:red;
}
</style>
