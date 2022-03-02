<template>
  <div class="main" id="main" />
</template>

<script>
import { onMounted } from 'vue';

export default {
  name: 'DragandDrop',
  setup() {
    let divBeingReplaced;
    let originDiv;
    let hold;
    const divSwitchPlace = (replaced, origin) => {
      document.getElementById(origin).textContent = document.getElementById(replaced).textContent;
      document.getElementById(origin).style = 'background-color:#e25e5e';
      document.getElementById(replaced).textContent = hold;
      document.getElementById(replaced).style = 'background-color:white';
    };
    const dragStart = (event) => {
      hold = document.getElementById(event.toElement.id).textContent;
      originDiv = event.toElement.id;
      console.log(`起飛: ${event.toElement.id}`);
    };
    const dragOver = (event) => {
      event.preventDefault();
      divBeingReplaced = event.toElement.id;
      console.log(`路過: ${event.toElement.id}`);
      divSwitchPlace(divBeingReplaced, originDiv);
      originDiv = event.toElement.id;
    };
    const dragEnd = () => {
      console.log('----------end----------');
    };
    const dragDrop = (event) => {
      console.log(`降落: ${event.toElement.id}`);
      document.getElementById(event.toElement.id).style = 'background-color:#e25e5e';
    };
    const eventArr = [1, 2, 3, 4, 5, 6];
    onMounted(() => {
      const eventDiv = [];
      eventArr.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'moveBlock';
        div.id = `div${item}`;
        div.draggable = true;
        div.textContent = item;
        document.getElementById('main').appendChild(div);
        eventDiv.push(div);
      });
      eventDiv.forEach((item) => item.addEventListener('dragstart', dragStart));
      eventDiv.forEach((item) => item.addEventListener('dragover', dragOver));
      eventDiv.forEach((item) => item.addEventListener('dragend', dragEnd));
      eventDiv.forEach((item) => item.addEventListener('drop', dragDrop));
    });
    return {
    };
  },
};
</script>

<style lang="scss">
.main{
  width: 80%;
  height: 500px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.moveBlock{
  width: 80%;
  height: 50px;
  background-color: rgb(226, 94, 94);
  font-size: 44px;
  color: white;
}
</style>
