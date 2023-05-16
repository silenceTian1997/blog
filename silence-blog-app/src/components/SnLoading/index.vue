<script lang='ts' setup>
import gsap from 'gsap'
import { snakeCase } from 'lodash';
import { onMounted } from 'vue'
// console.log()
onMounted(() => {

  const cirCleDomList: NodeListOf<HTMLDListElement> = document.querySelectorAll('.icon-circle')

  // gsap.to()


  cirCleDomList.forEach((el: HTMLDListElement) => {

    moveElementToCenter(el)

  })

  function moveElementToCenter(element: HTMLDListElement) {
    let x, y, positionX, positionY;
    const centerX = (window.innerWidth - element.offsetWidth) / 2;
    const centerY = (window.innerHeight - element.offsetHeight) / 2;
    if (element.style.left && element.style.top) {
      x = parseInt(element.style.left, 10);
      y = parseInt(element.style.top, 10);
    } else {
      let rect = element.getBoundingClientRect();
      x = rect.left;
      y = rect.top;
    }
    positionX = centerX - x;
    positionY = centerY - y
    gsap.fromTo(element, { x: x, y: y, opacity: 0, scale: .2, ease: "power1", delay: 1 }, { x: positionX, y: positionY, opacity: 1, scale: 2, ease: "power1", delay: 1, transition: 2, })
  }

})
</script>

<template>
  <div class="sn-loading">
    <div class="icon-circle"></div>
    <div class="icon-circle"></div>
    <div class="icon-circle"></div>
    <div class="icon-circle"></div>
  </div>
</template>
<style lang='scss' scoped>
@include b(loading) {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fff;

  .icon-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    box-shadow: inset -5px -1px 8px 3px rgba(217, 168, 7, 0.85), 0px 2px 4px 0px rgba(0, 0, 0, 0.25), inset 10px 10px 8px 1px rgba(239, 240, 233, 0.62);

    &:nth-child(1) {
      top: 0;
      left: 0;
      background-color: #ffb84c;
    }

    &:nth-child(2) {
      top: 0;
      right: 0;
      background-color: #f266ab;
    }

    &:nth-child(3) {
      bottom: 0;
      left: 0;
      background-color: #a459d1;
    }

    &:nth-child(4) {
      bottom: 0;
      right: 0;
      background-color: #2cd3e1;

    }
  }
}
</style>
