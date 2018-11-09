<template>
  <div>
    <div class="mdl-grid page-anim">
      <div v-for="picture in this.pictures" :key="picture" class="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">
        <div class="image-card" @click="displayDetails(picture.id)">
          <div class="image-card__picture">
            <img :src="picture.url" />
          </div>
          <div class="image-card__comment mdl-card__actions">
            <span style="opacity: 0.8">{{ picture.author }}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
  import data from '../data'
  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({name: 'detail', params: { id: id }})
      }
    },
    data () {
      return {
        'pictures': data.pictures
      }
    }
  }
</script>

<style scoped>
  .mdl-cell {
    margin-bottom: 20px;
  }

  .mdl-cell:last-child {
    margin-bottom: 75px;
  }

  .image-card {
    position: relative;
  }
  .image-card__picture > img {
    width:100%;
    border-radius: 10px;
    /* box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.13); */
        box-shadow: 0 20px 64px 0 rgba(0,0,0,.2);
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    border-radius: 0 0 10px 10px;
  }
  span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }

</style>
