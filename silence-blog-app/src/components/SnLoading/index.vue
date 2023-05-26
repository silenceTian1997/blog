<script lang='ts' setup>
import gsap from 'gsap'
import { onMounted , ref } from 'vue'
const loadingFlag = ref(true)
onMounted(() => {
    loadingFlag.value = true
    const cirCleDomList: NodeListOf<HTMLDListElement> = document.querySelectorAll('.icon-circle')
    cirCleDomList.forEach((el: HTMLDListElement,index:number) => {
        if(index === cirCleDomList.length - 1){
            moveElementToCenter(el,()=>{
                const timeLine = gsap.timeline({
                    onComplete:()=>{
                        console.log('finish')
                        loadingFlag.value = false
                    }
                })
                cirCleDomList.forEach((el)=>{
                    timeLine.to(el,{opacity:0 , delay:.5})
                })
                timeLine.to('.center-circle',{
                    opacity:1,
                    delay:1.8,
                    rotate:360,
                    duration:4,
                    ease:'expoScale(1, 2)'
                })
                timeLine.to('.center-circle',{
                    scale:4,
                    duration:4,
                    transition:2
                })
                timeLine.to('.center-text',{
                    color:'#fea4b0',
                    opacity:1,
                    duration:2,
                    fontSize:80,
                })
                timeLine.to('.center-text',{
                    duration:1,
                    opacity:0
                })
                timeLine.to('.center-circle',{
                    width:'100%',
                    height:"100%",
                    background:'rebeccapurple',
                    transformOrigin:'50% 50%',
                    duration:1,
                    transition:2,
                })
                timeLine.to('.center-circle',{
                    opacity:0,
                    background:'#f7f7f7',
                    duration:1,
                    transition:2
                })
            })

        }else{
            moveElementToCenter(el)
        }
    })
    
    // const timeLine = gsap.timeline()
    // timeLine.add()

    function moveElementToCenter(element: HTMLDListElement , cb?:Function) {
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
        gsap.fromTo(element, { x: x, y: y, opacity: 0, scale: .2, ease: "power1", rotation: 0,  },{ x: positionX, y: positionY, opacity: 1, scale: 2, ease: "power1", rotation: 360, transition: 2,  onComplete: cb && cb() })
    }

})
</script>

<template>
    <div class="sn-loading" v-show="loadingFlag">
        <div class="icon-circle"></div>
        <div class="icon-circle"></div>
        <div class="icon-circle"></div>
        <div class="icon-circle"></div>
        <div class="center-circle">
            <span class="center-text">♥</span>
        </div>
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
    
    .center-circle{
        position: absolute;
        width: 200px;
        height: 200px;
        left: calc(50% - 100px);
        top: calc(50% - 100px);
        background-color: #2cd3e1;
        border-radius: 20px;
        opacity: 0;
        text-align: center;
        line-height: 200px;
        .center-text{
            opacity: 0;
            letter-spacing: 4px;
        }
    }
}
</style>
