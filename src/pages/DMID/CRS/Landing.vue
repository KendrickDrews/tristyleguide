<template>
<div>
  <div>
    HELLO WORLD
    </div>
<div class="servicesAndTools">
            <h4> SERVICES AND TOOLS </h4>
              <ul class="servicesTools-List">
                  <li class="servicesTools-Item"></li>
                  <li class="servicesTools-Item"></li>
                  <li class="servicesTools-Item"></li>
                  <li class="servicesTools-Item"></li>
              </ul>
          </div>

    </div>
</template>

<script>

  export default {
    name: 'landing',
    components: {

    },
    data () {
      return {

      };
    },
///////
    computed: {


    },
///////
    mounted: function () {

    },
///////
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },

    },
  }

</script>
<style>

</style>
