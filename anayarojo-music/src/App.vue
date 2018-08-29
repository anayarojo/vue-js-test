<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 Anaya Rojo Music
    ul
      artist(v-for="artist in artists" v-bind:artist="artist")
</template>

<script>

import Artist from './components/Artist'
import getTopArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: []
    }
  },
  components: {
    Artist: Artist
  },
  mounted: function(){
    const _this = this;
    getTopArtists().then(function(artists){
      _this.artists = artists;
    });
  }
}
</script>

<style lang="stylus">
#app
 font-family 'Avenir', Helvetica, Arial, sans-serif
 -webkit-font-smoothing antialiased
 -moz-osx-font-smoothing grayscale
 text-align center
 color #2c3e50
 margin-top 60px

h1, h2
 font-weight normal

ul
 list-style-type none
 padding 0

li
 display inline-block
 margin 0 10px

a
 color #42b983
</style>
