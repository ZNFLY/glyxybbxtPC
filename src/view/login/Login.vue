<template>
  <label for="username">用户名：</label><input type="text"
         id="username"
         v-model="loginForm.username" />
  <label for="password">密码：</label><input type="password"
         id="password"
         v-model="loginForm.password" />
  <button @click="login">登录</button>
</template>

<script>
import axios from "axios"
import qs from "qs"
import { useRoute, useRouter } from "vue-router"
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const route = useRoute()
    return {
      router, route
    }
  },
  data () {
    return {
      loginForm: {
        username: 'liwei',
        password: 'lw1234',
      },
    }
  },
  methods: {
    // login () {
    //   this.$api.login.login("/login", this.loginForm)
    //     .then(res => {
    //       console.log(res.data.token)
    //       sessionStorage.setItem("token", res.data.token)
    //       // const token = npmres.data.token
    //       //发请求获取菜单的时候需要带上token，把token放在请求头里面
    //       this.$api.menu.findNavTree("/menu/findNavTree", { 'userName': this.loginForm.username })
    //         .then((res) => {
    //           console.log(res)
    //           console.log("当前用户的菜单", res.data)
    //           // sessionStorage.setItem("navTree", JSON.stringify(res.data))
    //           // console.log(JSON.parse(sessionStorage.getItem("navTree")))
    //           //给全局属性赋值
    //           // this.$store.commit('setNavTree', res.data)
    //           // this.$store.dispatch('setNavTree', { 'res': res.data })
    //           this.$store.dispatch({
    //             type: 'setNavTree',
    //             data: res.data
    //           })
    //         }).then(res => {
    //           this.$api.role.findAll("/user/findPermissions", { 'name': this.loginForm.username })
    //             .then(res => {
    //               console.log("用户权限返回结果", res)
    //             })
    //         })
    //       // console.log(tree)
    //       this.router.push("/index")
    //     })
    //     .catch(err => {
    //       this.router.push("/")
    //     })
    // },
  },
}
</script>

<style>
</style>
