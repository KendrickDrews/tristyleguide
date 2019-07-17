<template>

  <div class="organize-colors">
    <div
      v-for="color in colors"
      v-bind:key="color.key"
       v-bind:id="'color' + color.id"
      class=" color-container "
    >
      <div
        v-bind:style="{ backgroundColor: color.hex }"
        class="color-box"
      >
        <h2> {{ color.name }}</h2>
        <h3> {{ color.hex }} </h3>
        <h3> ( {{ color.rgb }} ) </h3>
      </div>

    </div>
  </div>

</template>

<script>

export default {
  components: {

  },

  data: function () {
    return {

      colors: [

        { id: '1', hex: '#08476D', rgb: '8, 71, 109', name: 'Dark Blue 01' },
        { id: '2', hex: '#10424F', rgb: '16, 66, 79', name: 'Dark Blue 02' },
        { id: '3', hex: '#42599C', rgb: '66, 89, 156', name: 'BG Blue' },
        { id: '4', hex: '#2A7A9E', rgb: '42, 122, 158', name: 'Link Hover' },
        { id: '5', hex: '#0060FF', rgb: '0, 96, 255', name: 'Nav Link Blue' },
        { id: '6', hex: '#008299', rgb: '0, 130, 153', name: 'M. Blue' },
        { id: '7', hex: '#C1D5E4', rgb: '193, 213, 228', name: 'L. Blue 01' },
        { id: '8', hex: '#428BCA', rgb: '66, 139, 202', name: 'L Blue 02' },
        { id: '9', hex: '#0099FF', rgb: '0, 153, 255', name: 'L. Blue 03' },
        { id: '10', hex: '#0072BC', rgb: '0, 114, 188', name: 'Link Blue' },
        { id: '11', hex: '#003399', rgb: '0, 51, 153', name: 'S&T Blue' },
        { id: '12', hex: '#395594', rgb: '57, 85, 148', name: 'S.R. Blue' },
        { id: '13', hex: '#565656', rgb: '86, 86, 86', name: 'Subheading Grey' },
        { id: '14', hex: '#663399', rgb: '102, 51, 153', name: 'Visited Link' },
        { id: '15', hex: '#D34C42', rgb: '211, 76, 66', name: 'Red' },
        { id: '16', hex: '#62A048', rgb: '98, 160, 72', name: 'Green 02' },
        { id: '17', hex: '#49A274', rgb: '73, 162, 116', name: 'BG Green' },
        { id: '18', hex: '#67AD4C', rgb: '103, 173, 76', name: 'Green 01' },
        { id: '19', hex: '#244F1E', rgb: '36, 79, 30', name: 'Green Header' },
        { id: '20', hex: '#9CC99C', rgb: '156, 201, 156', name: 'L. Green' }

      ]

    }
  }
}
</script>
<style scoped>

  .organize-colors {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .color-container {
    height: 200px;
    width: 19%;
    display: flex;
    flex-direction: column;
    margin: 5px 0;
  }

  .color-box {
    height: 175px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  }
  .color-box h2 {
    margin-top: 5px;
    margin-bottom: 3px;
    color: white;
    text-align: center;
  }
  .color-box h3 {
    margin: 3px 0;
    color: white;
  }

</style>
