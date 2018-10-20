<template>
  <div class="main">
    <div class="title">欢迎来到<span class="dao">氘</span>星</div>
    <div class="login-tip">{{type === 'register' ? '请注册"无退"身份' : '使用“无退”账户登录'}}</div>
    <div class="form">
      <input v-model="form.nickname" v-if="type === 'register'" type="text" placeholder="请输入您的昵称">
      <input v-model="form.mobile" type="text" placeholder="请输入手机号码">
      <input v-model="form.password" type="password" placeholder="请输入密码">
      <button @click="actionHandler">{{type === 'register' ? '创建' : '登录'}}</button>
    </div>
    <div class="type-tip" @click="type = type === 'register' ? 'login' : 'register'">
      {{type === 'register' ? '我已经有"无退"账户' : '注册“无退”账户'}}
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        form: {
          nickname: 'ELi',
          mobile: '13122110588',
          password: 'minmin'
        },
        type: 'login'
      }
    },
    computed: {
      ...mapState('user', [
        'profile'
      ])
    },
    methods: {
      ...mapActions('user', [
        'login',
        'register'
      ]),
      async actionHandler () {
        try {
          if (this.$iBox.validator.isEmpty(this.form.mobile)) {
            this.$iBox.showToast('手机号不能为空')
            return false
          }
          if (this.$iBox.validator.isEmpty(this.form.password)) {
            this.$iBox.showToast('密码不能为空')
            return false
          }
          if (this.type === 'register') {
            if (this.$iBox.validator.isEmpty(this.form.nickname)) {
              this.$iBox.showToast('昵称不能为空')
              return false
            }
          }
          await this[this.type](this.form)
          if (this.type === 'login') {
            this.$iBox.showToast('登录成功')
            setTimeout(() => {
              this.$router.push({path: '/pages/index', reLaunch: true})
            }, 1000)
          } else {
            this.$iBox.showToast('注册成功')
            this.type = 'login'
          }
        } catch (e) {
          console.error(e)
          this.$iBox.showToast(e.response.data.errmsg || e.message)
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .main
    text-align center

  .title
    margin-top 70px
    font-size 36px
    .dao
      position relative
      &:before
        content 'DAO'
        font-size 18px
        position absolute
        top -1em

  .login-tip
    font-size 16px
    opacity .35
    margin-top 20px

  .type-tip
    font-size 14px
    margin-top 60px
    text-decoration underline

  .form
    margin-top 30px
    min-height 250px
    padding 0 44px
    input
      text-align left
      height 42px
      margin-top 20px
      border-bottom 1px solid rgba(255, 255, 255, 0.23)
    button
      height 44px
      display flex
      align-items center
      justify-content center
      margin-top 36px
      border-radius 4px
      background-color rgba(255, 255, 255, 0.23)
      font-size 18px
</style>
