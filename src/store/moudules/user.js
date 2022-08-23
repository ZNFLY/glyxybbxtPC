export default {
  state: {
    //全局属性
    perms: []

  },
  mutations: {
    //赋值操作
    setPerms (state, perms) {
      state.perms = perms
      console.log("给perms赋值", perms)
    }
  },
  actions: {
    // setNavTree ({ commit, state }, navTree) {
    //   commit.setNavTree(state, navTree);
    // }
    /*
    如果有异步操作，网络请求某个数据后，再进行赋值
    */
    setPerms (ctx, payload) {
      ctx.commit('setPerms', payload.data)
    }
  },
  getters: {
    getPerms (state) {
      console.log('调用了获取权限的方法')
      return state.perms
    }
  },
  
}