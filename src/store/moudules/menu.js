export default {
  state: {
    //全局属性
    navTree: []

  },
  mutations: {
    //赋值操作
    setNavTree (state, navTree) {
      state.navTree = navTree
      console.log("给navTree赋值", navTree)
    }
  },
  actions: {
    // setNavTree ({ commit, state }, navTree) {
    //   commit.setNavTree(state, navTree);
    // }
    /*
    如果有异步操作，网络请求某个数据后，再进行赋值
    */
    setNavTree (ctx, payload) {
      ctx.commit('setNavTree', payload.data)
    }
  },
  getters: {
    getNavTree (state) {
      console.log('调用了获取菜单树的方法')
      return state.navTree
    }
  }
}