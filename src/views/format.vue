<template>
<!--eslint&prrient 格式化 -->
    <div>
    eslint&prrient 格式化{{user}}
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user'])
  }

}
</script>

<style scoped>

</style>
