<template>
  <div class="layout-page">

    <div class="info">
      <span>S2级岛屿</span>
      <spam>人口1.2K</spam>
    </div>

    <div class="notice">
      <img mode="aspectFill" src="https://img1.famulei.com/z/3000012/p/185/2905385395527_100x100.jpg" />
      <div class="text">12月1日，我们要在上海举办大会，请各位芽民 积极帮助管委会拉赞助。</div>
    </div>

    <div class="profile">
      <div class="item">
        <div class="key">身份</div>
        <div class="val">居民</div>
      </div>
      <div class="item">
        <div class="key">我的芽</div>
        <div class="val">16762</div>
      </div>
      <div class="item">
        <div class="key">头衔</div>
        <div class="val">男爵</div>
      </div>
    </div>

    <div class="label">悬赏任务</div>

    <div class="cells">
      <div class="cell" @click="$router.push('/pages/organization/task')">
        <div class="image">
          <img mode="aspectFill" src="https://img1.famulei.com/z/2887018/p/185/3115503799325_100x99.jpg" />
        </div>
        <div class="content">
          <div class="title">张三</div>
          <div class="text">寻一个主持</div>
        </div>
        <div class="action">
          <div class="badge ing">奖200芽</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell" @click="$router.push('/pages/organization/task')">
        <div class="image">
          <img mode="aspectFill" src="https://img1.famulei.com/m/5665258/p/1710/2122380959724_100x100.jpg" />
        </div>
        <div class="content">
          <div class="title">张俊</div>
          <div class="text">谁可以帮我认识马骏</div>
        </div>
        <div class="action">
          <div class="badge ing">奖3000芽</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell" @click="$router.push('/pages/organization/task')">
        <div class="image">
          <img mode="aspectFill" src="https://img1.famulei.com/z/5678334/p/186/2921500458686_90x90.png" />
        </div>
        <div class="content">
          <div class="title">杨大名</div>
          <div class="text">找一个比我名气大的人</div>
        </div>
        <div class="action">
          <div class="badge end">已完成</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell more">
        <div class="desc">还有31个未结束的悬赏任务</div>
        <div class="action">
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="cells">
      <div class="cell">
        <div class="title">
          <i class="icon icon-plus"></i>
          <span>我要发布悬赏任务</span>
        </div>
        <div class="action">
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <!-- 兑换中心 -->

    <div class="label">兑换中心</div>

    <div class="cells">
      <div class="cell">
        <div class="image">
          <img mode="aspectFill" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=76478830,424505583&fm=26&gp=0.jpg" />
        </div>
        <div class="content">
          <div class="title">武林秘籍</div>
          <div class="text">常年有效存货充足</div>
        </div>
        <div class="action">
          <div class="badge have">1000芽</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell">
        <div class="image">
          <img mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540643975&di=7f5dced07c04402e36a6a70bb890f3f9&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.house365.com%2Fnewcms%2F2014%2F03%2F17%2F139501870153264bcdbc186.jpg" />
        </div>
        <div class="content">
          <div class="title">区块链大会门票</div>
          <div class="text">数量有限，速度兑换</div>
        </div>
        <div class="action">
          <div class="badge have">2000芽</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell">
        <div class="image">
          <img mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540644011&di=5a71e218a1ca2417544425a6d6411c58&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F27%2F26%2F12k58PIChHY_1024.jpg" />
        </div>
        <div class="content">
          <div class="title">纪念徽章</div>
          <div class="text">非卖品</div>
        </div>
        <div class="action">
          <div class="badge null">已抢空</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell more">
        <div class="desc">还有22个可兑换物品</div>
        <div class="action">
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="cells">
      <div class="cell">
        <div class="title">
          <i class="icon icon-plus"></i>
          <span>我要发布兑换信息</span>
        </div>
        <div class="action">
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <!-- 广播 -->

    <div class="label mt-3">广播消息</div>

    <div class="cells box">
      <div class="cell">
        <div class="image">
          <img mode="aspectFill" src="https://img1.famulei.com/z/5603914/p/185/2303125221111_100x100.jpg" />
        </div>
        <div class="content">
          <div class="title">阳光</div>
          <div class="text">明天请你喝酒</div>
        </div>
        <div class="action">
          <div class="badge">2</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell">
        <div class="image">
          <img mode="aspectFill" src="https://img1.famulei.com/m/5659757/p/1710/0603525770832_100x100.jpg" />
        </div>
        <div class="content">
          <div class="title">小可爱</div>
          <div class="text">我要吃大闸蟹</div>
        </div>
        <div class="action">
          <div class="badge">99</div>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="cells">
      <div class="cell">
        <div class="title">
          <i class="icon icon-plus"></i>
          <span>我要发布广播</span>
        </div>
        <div class="action">
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    async onLoad () {
      console.log(this.$router.currentRoute.query)
      try {
        const data = await this.$wx.setNavigationBarTitle({title: 1})
        console.log(data)
      } catch (e) {
        console.error(e)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .info
    font-size 10px
    color rgba(255, 255, 255, 0.44)
    span
      margin-right 20px
  .notice
    margin-top 14px
    border-radius 2px
    background-color rgba(255, 255, 255, 0.07)
    border 1px solid rgba(255, 255, 255, 0.14)
    display flex
    padding 10px
    align-items center
    image
      display flex
      width 46px
      height 46px
      border-radius 4px
    .text
      width 0
      flex 1
      margin-left 12px
      line-height 1.7
      height 42px
      color rgba(138, 138, 138, 1)
      font-size 13px
  .profile
    margin 25px 0
    color rgba(255, 255, 255, 0.44)
    display flex
    justify-content center
    align-items center
    .item
      flex 1
      display flex
      justify-content center
      align-items center
      flex-direction column
      .key
        font-size 10px
      .val
        margin-top 5px
        font-size 20px
</style>
