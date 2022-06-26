<template>
<!--eslint&prrient 格式化 -->
    <div>
    eslint&prrient 格式化{{user}}
    ---------------
    commitizen
    {{reUser}}
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { fn1, fn3, fn2 } from 'utils'
import { types } from 'consts'
console.log(types)
fn1(types.url_encoded, types.json, types.form_data, types.octet_stream)
fn3()
fn2()
export default {
  computed: {
    ...mapState(['user']),
    ...mapGetters(['reUser'])
  }

}
</script>

<style scoped>

</style>
