<template>
  <!--eslint&prrient 格式化 -->
  <div>
    eslint&prrient 格式化{{ user }}
    --------------- commitizen
    {{ reUser }}--- {{ now }}---{{ now2 }}
    <Vant />
    <van-button
      type="primary"
      @click="toast"
    >
      主要按钮
    </van-button>
    <my-icons-jiaofei
      m-2
      rounded
      text-teal-400
    />
    <my-icons-scan />
    <Lottie />
    <Svga />
    --------------------
    <div>vueUse:{{ x.value }}-{{ y.value }}</div>
    ----------------------------------
    <WangEditor />
  </div>
</template>

<script>
import { types } from 'consts'
import Svga from '../components/base/Svga.vue'
import WangEditor from '../components/base/WangEditor.vue'
console.log(types)
fn1(types.url_encoded, types.json, types.form_data, types.octet_stream)
fn3()
fn2()
relativeTimeDayjs()
export default {
  name: 'FormatCode',
  data() {
    return {
      now: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      now2: dayjs().from(dayjs('1990')),
      lottie: null,
      x: 0,
      y: 0,
    }
  },
  computed: {
    ...mapState([ 'user' ]),
    ...mapGetters([ 'reUser' ]),
  },
  created() {
    const { x, y, } = useMouse()
    this.x = x
    this.y = y
  },
  methods: {
    toast() {
      this.$toast('提示内容')
    },
  },
  components: { Svga,
    WangEditor, },
}
</script>

<style scoped>
.app {
  top: 10px;
  height: 10px;
}
</style>
