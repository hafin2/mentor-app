<template>
  <div id="app">
      <nav class="bottomNav">
    <ul>
      <li>
        <router-link class="home" to="/">
          <i class="material-icons">
          home
          </i>
          <!-- <div class="dot"></div> -->
        </router-link>
      </li>
      <li>
        <label for="file-upload" class="custom-file-upload">
          <i class="material-icons">
            add
          </i>
        </label>
        <input style="display: none" id="file-upload" type="file" accept="image/*">
      </li>
      <li>
        <router-link class="search" to="/search">
          <i class="material-icons">
          search
          </i>
        </router-link>
      </li>
    </ul>
	</nav>
  <div class="content">
    <router-view/>
  </div>
  </div>
</template>

<style lang="scss">

 @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
 @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
 @import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
	position: fixed;
  text-align: center;
	width: 100%;
  // -webkit-backdrop-filter: blur(10px) saturate(2);
  /* background-color: rgba(223, 223, 223, 0.87); */
  background-color: rgb(255, 255, 255);

}

.bottomNav {
  top:0; 
  left:0;
  right:0;
  height: 55px;
  z-index: 99;
  box-shadow: 0 20px 64px 0 rgba(0,0,0,.2);
  ul {

  }
}


nav li {
	display: inline-block;
  /* margin-left: 50px; */
  
}

// li a.router-link-exact-active .dot {
//   height: 5px;
//   width: 5px;
//   background-color: #328fb3;
//   border-radius: 50%;
//   display: block;
//   margin: 0 auto;
// }

ul {
  padding-left: 0px;
  display: flex;
  justify-content: space-around;
}

.material-icons {
  color: #727272 !important;
      font-size: 28px;
}

li a.router-link-exact-active i {
 color: #4DBA87 !important;
}


.content {
  margin-top: 60px;
}
</style>
