<template>
  <div class="layout-page">
    <div class="item-list">
      <div class="item">
        <div class="left">
          <img mode="aspectFill" src="https://img1.famulei.com/z/2887018/p/185/3115503799325_100x99.jpg"/>
          <div class="name">长老院</div>
        </div>
        <div class="content">
          <div class="title">寻一个大会主持人</div>
          <div class="props">
            <div class="prop">
              <div class="key">任务悬赏</div>
              <div class="val">
                <span class="badge ing">500Kcoin</span>
                <span class="status">进行中</span>
              </div>
            </div>
            <div class="prop">
              <div class="key">发布时间</div>
              <div class="val">2018-10-18 15:04:29</div>
            </div>
            <div class="prop">
              <div class="key">截至时间</div>
              <div class="val">2018-10-18 15:04:29</div>
            </div>
          </div>
          <div class="text">
            1967年美国道琼斯工业指数上涨19.0%，巴菲特合伙公司上涨35.9%，大幅度超过了道琼斯工业指数。根据巴菲特的描述，我们大约可以猜测出1967年美国是普涨的格局，或者是说傻子都挣钱的市场
          </div>
        </div>
      </div>

      <div class="item">
        <div class="left">
          <img mode="aspectFill" src="https://img1.famulei.com/z/6112669/p/187/1722505868681_100x100.jpg"/>
          <div class="name">狮子头</div>
        </div>
        <div class="content">
          <div class="text">
            1967年美国道琼斯工业指数上涨19.0%，巴菲特合伙公司上涨35.9%，大幅度超过了道琼斯工业指数。根据巴菲特的描述，我们大约可以猜测出1967年美国是普涨的格局，或者是说傻子都挣钱的市场
          </div>
          <div class="date">2018-10-18 15:04:29</div>
        </div>
      </div>

      <div class="item">
        <div class="left">
          <img mode="aspectFill" src="https://img1.famulei.com/z/6112669/p/187/1722505868681_100x100.jpg"/>
          <div class="name">狮子头</div>
        </div>
        <div class="content">
          <div class="acquisition">
            获得<span class="badge ing">200Kcoin</span>
          </div>
          <div class="text">
            1967年美国道琼斯工业指数上涨19.0%，巴菲特合伙公司上涨35.9%，大幅度超过了道琼斯工业指数。根据巴菲特的描述，我们大约可以猜测出1967年美国是普涨的格局，或者是说傻子都挣钱的市场
          </div>
          <div class="date">2018-10-18 15:04:29</div>
        </div>
      </div>
    </div>
    <div class="input-box">
      <input type="text" placeholder="请在这里输入">
      <button>参与</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped lang="stylus">
  .item-list
    margin-bottom 60px
    margin-top 15px
    .item
      margin-top 28px
      display flex
      .left
        width 42px
        height 42px
        image
          width 100%
          height 100%
          border-radius 50%
        .name
          font-size 14px
          color rgba(255, 255, 255, .44)

      .content
        flex 1
        margin-left 30px
        padding 12px 15px
        background-color rgba(255, 255, 255, 0.08)
        position relative
        .title
          font-size 18px
        .props
          .prop
            margin-top 15px
            font-size 13px
            align-items center
            display flex
            .key
              color rgba(255, 255, 255, 0.18)
            .val
              color rgba(255, 255, 255, 0.42)
              margin-left 10px
            .status
              color #25EC34
              margin-left 10px
        .acquisition
          font-size 13px
          display flex
          align-items center
          justify-content flex-end
          color rgba(255, 255, 255, 0.51)
          .badge
            margin-left 10px
        > div + .text
          margin-top 15px
        .text
          line-height 1.8
          color rgba(255, 255, 255, 0.74)
          font-size 14px
        .date
          font-size 13px
          text-align right
          margin-top 15px
          color rgba(255, 255, 255, 0.42)
        &:before
          content ''
          display block
          position absolute
          left -15px
          top 0
          border-top 15px solid rgba(255, 255, 255, 0.08)
          border-left 15px solid transparent
          botder-bottom 15px solid rgba(255, 255, 255, 0.08)
  .input-box
    position fixed
    bottom 0
    left 0
    right 0
    height 56px
    display flex
    align-items center
    justify-content center
    background-color rgba(230, 230, 230, 1)
    padding 8px 12px
    input
      height 40px
      border-radius 2px
      border 1px solid rgba(187, 187, 187, 1)
      font-size 13px
      padding 0 15px
      background-color #fff
      flex 1
    button
      margin-left 10px
      height 40px
      display flex
      align-items center
      justify-content center
      border-radius 2px
      background-color rgba(47, 119, 215, 1)
      color rgba(255, 255, 255, 1)
      font-size 14px
</style>
