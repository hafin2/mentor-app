<template>
  <div>
    <div class="actions">
      <a href="#" @click.prevent="goBack">
        <i class="material-icons">
              clear
              </i>
      </a>
    </div>
        <div class="detail">
          <div v-if="picture" class="picture">
              <img :src="picture.url" />
              <!-- <img :src="this.pictures[$route.params.id].url" /> -->
          </div>
        </div>
        <div v-if="picture" class="info">
          <div class="comment">
            <h3> {{ picture.comment }}</h3>
            <p>{{ picture.author }}</p>
        <!-- <span> <h3> {{ this.pictures[$route.params.id].comment }}</h3></span>
        <span><p>{{ this.pictures[$route.params.id].author }}</p></span> -->
            
          </div>
          <div class="description">
            <span>{{ picture.description }}</span>
            <!-- <span>{{ this.pictures[$route.params.id].description }}</span> -->
          </div>
        </div>
      </div>
</template>


<script>

// import data from '../data'
// export default {
//   data () {
//     return {
//       'pictures': data.pictures
//     }
//   }
// }


import axios from 'axios';

export default { 
data() {
      return {
          picture: null
      };
  },
  mounted() {
      this.getPictureById();
  },
  methods: {
      goBack() {
      this.$router.go(-1)
      },
      getPictureById(){
          let pictureId = this.$route.params.id;
          // console.log(typeof pictureId);
          axios
            .get("/json/pictures.json")
            .then(response => {
                this.picture = response.data.pictures.find(p => p.id === pictureId);
                console.log(this.picture);
            })
            .catch(error => console.log(error));
      }
  }
}

</script>