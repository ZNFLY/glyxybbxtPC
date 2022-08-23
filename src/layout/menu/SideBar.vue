<template>
  <!-- <div class="sidebar">
    <ul class="menu"
        v-for="menu in navTree"
        :key="menu.id">
      <TreeMenu :menu="menu"></TreeMenu>
    </ul>
  </div> -->
  <el-menu class="el-menu-vertical-demo"
           unique-opened
           background-color="#304156"
           router
           :default-active="activeIndex">
    <TreeMenu :navTree="navTree">
    </TreeMenu>
  </el-menu>
</template>

<script>
import TreeMenu from './TreeMenu.vue'
export default {
  name: "SideBar",
  components: {
    TreeMenu
  },
  data () {
    return {
      submenu: {
        submenuShow: false,
        submenuHide: true,
      },
      navTree: [
        {
          path: '/dashboard',
          component: 'Layout',
          name: 'dashboard',
          meta: {
            title: '首页',
            icon: 'HomeFilled',
          },
        },
        {
          path: '/region',
          component: 'Layout',
          name: 'Region',
          meta: {
            title: '区域管理',
            icon: 'Position',
          },
        },
        {
          path: '/repair',
          component: 'Layout',
          name: 'Repair',
          meta: {
            title: '报修单',
            icon: 'list',
          },
        },
        {
          path: '/receiver',
          component: 'Layout',
          name: 'Receiver',
          meta: {
            title: '接单人',
            icon: 'user',
          },
        },
        {
          path: '/checker',
          component: 'Layout',
          name: 'Checker',
          meta: {
            title: '审核员',
            icon: 'Avatar',
          },
        },
        {
          path: '/material',
          component: 'Layout',
          name: 'Material',
          meta: {
            title: '耗材管理',
            icon: 'Tools',
          },
        },
      ]
    };
  },
  methods: {
    test () {
      this.submenu.submenuShow = true;
      this.submenu.submenuHide = false;
    }
  },
  // computed: {
  //     navTree() {
  //         let tree = this.$store.getters.getNavTree;
  //         return tree;
  //     }
  // }
  // async mounted () {
  //   //  console.log(sessionStorage.getItem("navTree"))
  //   this.navTree = await sessionStorage.getItem("navTree")
  //   //  await console.log(this.navTree)
  // }

  components: { TreeMenu }
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}

:deep(.el-sub-menu .el-sub-menu__title) {
  color: #f4f4f5 !important;
}

:deep(.el-menu .el-menu-item) {
  color: #bfcbd9;
}

/* 菜单点中文字的颜色 */

:deep(.el-menu-item.is-active) {
  color: #409eff !important;
}

/* 当前打开菜单的所有子菜单颜色 */

:deep(.is-opened .el-menu-item) {
  background-color: #1f2d3d !important;
}

/* 鼠标移动菜单的颜色 */

:deep(.el-menu-item:hover) {
  background-color: #001528 !important;
}
</style>