import { createStore } from "vuex"
import menu from "./moudules/menu.js"
import user from "./moudules/user.js"
// 创建一个新的 store 实例
const store = createStore({
  modules: {
    menu,
    user
  }
})

export default store