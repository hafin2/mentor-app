<template>
  <div class="">
    <div class="actions">
          <a href="javascript:history.go(-1)">
              <i class="material-icons">
              keyboard_arrow_left
              </i>
          </a>
      </div>
    <div class="mdl-cell detail">
    <div class="picture">
        <img :src="this.pictures[$route.params.id].url" />
    </div>
    </div>
    <div class="info">
      <div class="comment">
        <h3> {{ this.pictures[$route.params.id].comment }}</h3>
        <p>{{ this.pictures[$route.params.id].author }}</p>
      </div>
      <div class="description">
        <span>{{ this.pictures[$route.params.id].description }}</span>
      </div>
    </div>
  </div>
</template>


<script>
import data from '../data'
// import axios from 'axios';

export default {
  data () {
    return {
      'pictures': data.pictures
    }
  }
}
</script>