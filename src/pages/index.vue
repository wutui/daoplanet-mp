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
      <div class="cell" @click="$router.push('/pages/organization/detail?id=' + i)">
        <div class="image">
          <img mode="scaleToFill" src="/static/images/kaiyuanshe.png"/>
        </div>
        <div class="content">
          <div class="title">开源社</div>
          <div class="text">开源社是由中国支持开源的企业，社区及个人所组织的一个开源联盟，旨在推广开源。 各成员按照“共治、共识、贡献”的原则自发设立。</div>
        </div>
        <div class="action">
          <div class="badge">99</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell" @click="$router.push('/pages/organization/detail?id=' + i)">
        <div class="image">
          <img mode="scaleToFill" src="/static/images/rrtoken.png"/>
        </div>
        <div class="content">
          <div class="title">人人通证</div>
          <div class="text">设计，发行，流通 你的专属通证 成就你的独特价值</div>
        </div>
        <div class="action">
          <div class="badge">5</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell" @click="$router.push('/pages/organization/detail?id=' + i)">
        <div class="image">
          <img mode="scaleToFill" src="/static/images/dao.png"/>
        </div>
        <div class="content">
          <div class="title">氘星</div>
          <div class="text">新任务发布，完成可奖励100个芽</div>
        </div>
        <div class="action">
          <div class="badge">20</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell" @click="$router.push('/pages/organization/detail?id=' + i)">
        <div class="image">
          <img mode="scaleToFill" src="/static/images/wutui.png"/>
        </div>
        <div class="content">
          <div class="title">无退社区</div>
          <div class="text">第一个智能合约开发者社区</div>
        </div>
        <div class="action">
          <div class="badge">10</div>
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
