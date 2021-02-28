<template>
  <div id="app">
    <!-- 根路由出口 -->
    <router-view/>

  </div>
</template>

<script>
/* // 测试接口用
import request from '@/utils/request'

request({
  methods: 'GET',
  // url: '/front/ad/getAdList'
  url: '/boss/v2/api-docs?group=edu-boss-boot'
}).then(res => {
  console.log(res)
}) */

export default {
  name: 'App'
}
</script>

<style lang="scss">
</style>
