<template>
  <div class="layout-page">
    <div class="toolbar">
      <div class="item" @click="scanCode">
        <i class="icon icon-2dcode"></i>
        <div class="text">扫一扫</div>
      </div>
      <div class="item">
        <i class="icon icon-search" @click="$router.push('/pages/organization/search')"></i>
        <div class="text">搜索岛</div>
      </div>
      <div class="item" @click="$router.push('/pages/organization/create')">
        <i class="icon icon-plus"></i>
        <div class="text">创造岛</div>
      </div>
      <div class="item" @click="$router.push('/pages/web?url=https://wutui.pro')">
        <i class="icon icon-froum"></i>
        <div class="text">无退社区</div>
      </div>
    </div>

    <div class="cells box">
      <div class="cell" v-for="i in 5" :key="i" @click="$router.push('/pages/organization/detail?id=' + i)">
        <div class="image">
          <img mode="scaleToFill" src="https://img1.famulei.com/z/3000012/p/185/2905385395527_100x100.jpg"/>
        </div>
        <div class="content">
          <div class="title">GBLS全球大会</div>
          <div class="text">通知：请各位成员注意，明天下午撒打算打算的大声点</div>
        </div>
        <div class="action">
          <div class="badge">20</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="cells box">
      <div class="cell" v-for="i in 5" :key="i" @click="$router.push('/pages/organization/detail?id=' + i)">
        <div class="image">
          <img mode="aspectFill" src="https://img1.famulei.com/z/3000012/p/185/2905385395527_100x100.jpg"/>
        </div>
        <div class="content">
          <div class="title">GBLS全球大会</div>
          <div class="text">通知：请各位成员注意，明天下午撒打算打算的大声点</div>
        </div>
        <div class="action">
          <div class="badge">20</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapState('user', [
        'profile'
      ])
    },
    methods: {
      ...mapActions({
        getProfile: 'user/getProfile',
        getOrgList: 'organization/getList'
      }),
      scanCode () {
        this.$wx.scanCode()
      }
    },
    onShow () {
      const token = wx.getStorageSync('token')
      console.log('token', token)
      if (!token) {
        this.$router.replace('/pages/sign')
      } else {
        this.getProfile()
        this.getOrgList()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .toolbar
    height 70px
    display flex
    .item
      flex 1
      display flex
      justify-content center
      align-items center
      flex-direction column
      &:active
        background-color rgba(255, 255, 255, 0.15)
    .icon
      color #979797
      font-size 28px
    .text
      margin-top 3px
      color #c3c3c3
      font-size 12px

  .box
    margin 15px 0
</style>
