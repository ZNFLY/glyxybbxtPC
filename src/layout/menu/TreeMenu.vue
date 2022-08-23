<template>
  <template v-for="menu in navTree"
            :key="menu.path">

    <!-- 没有下级菜单 -->
    <el-menu-item style="color: #f4f4f5"
                  :index="menu.path">
      <el-icon>
        <!-- 通过动态自建的方式显示图标 -->
        <component :is="menu.meta.icon"></component>
      </el-icon>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script>
export default {
  name: 'TreeMenu',
  props: ['navTree']
}
</script>

<style lang="scss" scoped>
</style>