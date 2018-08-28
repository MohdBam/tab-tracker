<template>

<panel title="youtube">
    <div slot="content">
        <youtube :video-id="youtubeId" :player-width="350" :player-height="176">

        </youtube>


    </div>
</panel>

</template>

<script>
export default {
    props:['youtubeId']

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
