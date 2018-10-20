<template>
  <div class="layout-page">
    <div class="item-list">
      <div class="item">
        <img mode="aspectFill" src="https://img1.famulei.com/z/2887018/p/185/3115503799325_100x99.jpg" />
        <div class="content">
          <div class="title">寻一个大会主持人</div>

        </div>
      </div>
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
    margin-top 15px
    .item
      margin-top 28px
      display flex
      image
        width 42px
        height 42px
        border-radius 50%
      .content
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
            .key
              color rgba(255, 255, 255, 0.18)
            .val
              color rgba(255, 255, 255, 0.42)
              margin-left 10px
        .text
          color rgba(255, 255, 255, 0.74)
        &:before
          content ''
          display block
          position absolute
          left -15px
          top 0
          border-top 15px solid rgba(255, 255, 255, 0.08)
          border-left 15px solid transparent
          botder-bottom 15px solid rgba(255, 255, 255, 0.08)
</style>
