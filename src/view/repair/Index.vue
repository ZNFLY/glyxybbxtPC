<template>
  <div>保修单</div>
  <el-button type="primary"
             size="default"
             @click="test">测试</el-button>

</template>

<script>
import { getListApi } from "@/api/repair/Index";
export default {
  name: 'Repair',
  methods: {
    test () {
      getListApi()
    },
  }
}
</script>

<style>
</style>