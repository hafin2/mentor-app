<template>
  <div class="mdl-grid page-anim">
 <div class="actions">
          <a href="javascript:history.go(-1)">
            <!-- <img src="../../static/img/icons/left-arrow.png" style="width: 25px; margin-left: 8px;" alt="back arrow"> -->
              <i class="material-icons">
              keyboard_backspace
              </i>
          </a>
      </div>

            <!-- <i class="fas fa-angle-left" style="font-size: 25px; margin-left: 8px; color: #555"></i> -->
            <!-- <i class="fas fa-long-arrow-alt-left"></i> -->

    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="this.pictures[$route.params.id].url" />
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet info">
      <div class="comment">
        <span> <h3> {{ this.pictures[$route.params.id].comment }}</h3></span>
        <span><p>{{ this.pictures[$route.params.id].author }}</p></span>
      </div>
      <div class="description">
        <span>{{ this.pictures[$route.params.id].description }}</span>
        <span><h5>Comments</h5></span>
        <span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magnam dolore distinctio, corporis nam earum quisquam at possimus exercitationem libero culpa necessitatibus deserunt ut minima reiciendis similique eaque iure deleniti?</p></span>
      </div>

    </div>
  </div>
</template>


<script>
import data from '../data'
export default {
  data () {
    return {
      'pictures': data.pictures
    }
  }
}
</script>



<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
    border-radius: 10px;
    /* box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.13); */
    box-shadow: 0 20px 64px 0 rgba(0,0,0,.2);
    margin-top: 48px;
  }
  .info:last-child {
    margin-bottom: 75px;
  }
  .comment {
    padding: 0px;
    color: #fff;
  }
  .comment h3 {
    display: inline-block;
    margin: 0px 0px 15px 0px;
    color: #fff;
  }

  .comment p {
    right: 25px;
    display: inline-block;
    position: absolute;
    margin-top: 9px;
    font-size: 12px;
    font-style: italic;
  } 

  .actions {
    text-align: center;
    position: fixed;
    margin-top: 5px;
  }

  .actions > a > i {
    font-size: 34px;
    margin-left: 12px;
    margin-top: 5px;
  }

  .description {
    font-size: 13px;
    opacity: 0.8;
    color: #fff;
  }

  .mdl-grid {
    /* margin-bottom: 55px; */
    margin-top: 30px;
  }
</style>