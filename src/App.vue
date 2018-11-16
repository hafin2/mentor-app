<template>
  <div id="app">
      <nav class="topNav">
    <ul>
      <li>
        <router-link class="home" to="/">
          <i class="material-icons">
          home
          </i>
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
        <router-link class="about" to="/about">
          <i class="material-icons">
          notes
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
  @import "./assets/scss/style";
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
  @import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>
