<template>
  <HelloWorld msg="Welcome to My Vue.js App"/>
  <DragandDrop />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DragandDrop from './components/DragandDrop.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    DragandDrop,
  },
  setup() {
    return {
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
