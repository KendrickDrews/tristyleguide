<template>
  <ul>
    <!-- <li
      is="VLink"
      v-for="(item, index) in route"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item.index"
      v-bind:href="index"
    >
      {{ item }}
    </li>  -->
    <li
      v-for="(item, index) in route"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item.index"
      v-bind:to=" item "
    >
      <router-link :to="item"> {{ index }}</router-link>
    </li>
  </ul>
</template>

<script>
import VLink from '../components/VLink.vue'

export default {

  components: {
    VLink
  },

  data: function () {
    return {
      route: [
        { Home: '/home' }

      ]
    }
  }

}
</script>

<style scoped>

ul {
  list-style: none;
  padding-left: 0;
}
li {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 25px;
  border-right: 5px solid transparent;
}
li:hover {
  background-color: rgba(0,0,0, 0.05);
}

</style>
