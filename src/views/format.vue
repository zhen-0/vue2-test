<template>
  <!--eslint&prrient 格式化 -->
  <div>
    eslint&prrient 格式化{{ user }}
    --------------- commitizen
    {{ reUser }} {{ now }}
    <Vant />
    <van-button
      type="primary"
      @click="toast"
    >
      主要按钮
    </van-button>
    <my-icons-jiaofei />
    <my-icons-scan />
    <Lottie />
  </div>
</template>

<script>
import { types } from 'consts'
console.log(types)
fn1(types.url_encoded, types.json, types.form_data, types.octet_stream)
fn3()
fn2()
export default {
  name: 'FormatCode',
  data() {
    return {
      now: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      lottie: null,
    }
  },
  computed: {
    ...mapState([ 'user' ]),
    ...mapGetters([ 'reUser' ]),
  },
  methods: {
    toast() {
      this.$toast('提示内容')
    },
  },
}
</script>

<style scoped>
.app {
  top: 10px;
  height: 10px;
}
</style>
