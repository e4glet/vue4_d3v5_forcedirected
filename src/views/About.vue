<template>
  <div class="about">
    <Menu/> 
    <h1>This is an about page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

export default {
  name: 'Home',
  components: {
    Menu
  }
}
</script>