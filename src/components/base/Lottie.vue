<!--
 * @Author: zhen-0
 * @Date: 2022-07-10 19:40:50
 * @Description:lottie动画
-->

<template>
  <div class="lottie-com">
    <div
      ref="lottie"
      class="lottie-body"
    />
    <van-button
      type="primary"
      @click="lottie.play()"
    >
      播放
    </van-button>
    <van-button
      type="primary"
      @click="lottie.stop()"
    >
      暂停
    </van-button>
  </div>
</template>

<script>
export default {
  props: {
    customOptions: Object,
  },
  data() {
    return {
      lottie: null,
      defaultOptions: {
        // container：动画容器，须确保容器(id获取)的存在，因此在mounted中
        container: null,
        // path：json文件路径
        path: 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json',
        // render：渲染方式，svg/canvas/html
        renderer: 'svg',
        // loop：循环次数，true / false / number
        loop: true,
        autoplay: true,
      },
    }
  },
  mounted() {
    this.defaultOptions.container = this.$refs.lottie
    this.lottie = lottie.loadAnimation(Object.assign(this.defaultOptions, this.customOptions))
  },
}
</script>

<style scoped>
.lottie-com {
  width: 100px;
  height: 100px;
}
</style>
