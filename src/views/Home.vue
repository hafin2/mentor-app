<template>
  <div>
    <div class="grid">
      <div v-for="picture in pictures" :key="picture.id" class="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone picture">
        <router-link :to="`/picture/${picture.id}`"> 
        <div class="image-card">
          <div class="image-card__picture">
            <img :src="picture.url" />
          </div>
          <div class="image-card__comment mdl-card__actions">
            <p style="opacity: 0.8">{{ picture.author }}</p>
          </div>
        </div>
         </router-link>
      </div>
    </div>

  <!-- <div>
    <div class="grid">
      <div v-for="picture in this.pictures" :key="picture.id" class="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">
        <div class="image-card" @click="displayDetails(picture.id)">
          <div class="image-card__picture">
            <img :src="picture.url" />
          </div>
          <div class="image-card__comment mdl-card__actions">
            <p style="opacity: 0.8">{{ picture.author }}</p>
          </div>
        </div>
      </div>
    </div> -->

  </div>

</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
  // import data from '../data'
  import axios from 'axios';

  export default {
    // methods: {
    //   displayDetails (id) {
    //     this.$router.push({name: 'detail', params: { id: id }})
    //   }
    // },
    // data () {
    //   return {
    //     'pictures': data.pictures
    //   }
    // }
   data() {
    return {
      pictures: null
    };
  },
  mounted() {
    this.getData(); 
  },
  methods: {
    getData() {
      axios
            .get("/json/pictures.json")
            .then(response => (this.pictures = response.data.pictures));
    }
  }
};
</script>