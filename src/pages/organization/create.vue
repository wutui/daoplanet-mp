<template>
  <div class="layout-page">
    <div class="label">基础资料</div>
    <div class="cells form">
      <div class="cell">
        <div class="key">
          <div class="filed">组织简称</div>
          <div class="desc">(不可重复)</div>
        </div>
        <div class="val">
          <input type="text" placeholder="请输入2~6个汉字或字母及数字">
        </div>
      </div>
      <div class="cell">
        <div class="key">
          <div class="filed">组织全称</div>
          <div class="desc">(不可重复)</div>
        </div>
        <div class="val">
          <input type="text" placeholder="请输入2~6个汉字或字母及数字">
        </div>
      </div>
      <div class="cell">
        <div class="key">
          <div class="filed">组织描述</div>
          <div class="desc">(300字以内)</div>
        </div>
        <div class="val">
          <input type="text" placeholder="请输入2~6个汉字或字母及数字">
        </div>
      </div>
      <div class="cell">
        <div class="key">
          <div class="filed">Logo</div>
        </div>
        <div class="val">
          <div class="file-select" @click="$wx.chooseImage">
            <i class="icon icon-plus"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="label mt-3">贡献价值锚定</div>
    <div class="cells form">
      <div class="cell">
        <div class="key">
          <div class="filed">Token名称</div>
        </div>
        <div class="val">
          <input type="text" placeholder="请输入(请不要出现“币”、“钱”、“通证”等文字)">
        </div>
      </div>
      <div class="cell">
        <div class="key">
          <div class="filed">Token单位名</div>
        </div>
        <div class="val">
          <input type="text" placeholder="请输入(请不要出现“元”等文字)">
        </div>
      </div>
      <div class="cell">
        <div class="key">
          <div class="filed">Token经济体 发展方案</div>
        </div>
        <div class="val row" @click="$router.push('/pages/organization/plan')">
          <div class="select">PoC  Policy 1.1</div>
          <div class="desc">(暂不支持选其他协议)</div>
        </div>
        <div class="action">
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell">
        <div class="key">
          <div class="filed">身份体系设计</div>
        </div>
        <div class="val">
          <div class="select">社长、副社长、长老、资深、社员</div>
        </div>
        <div class="action">
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="cell">
        <div class="key">
          <div class="filed">荣誉体系设计</div>
        </div>
        <div class="val">
          <div class="select">荣誉社长、创始人、突出贡献者、荣誉贡献者</div>
          <div class="action">
            <i class="icon icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>

    <button class="create-btn">立即创建</button>
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
  .file-select
    width 64px
    height 64px
    background-color rgba(255, 255, 255, 0.33)
    border 1px solid rgba(187, 187, 187, 1)
    display flex
    align-items center
    font-family sans-serif
    justify-content center
    &:active
      opacity .8
    .icon
      font-size 40px
      color #BBBBBB
  .create-btn
    margin-top 26px
    height 40px
    display flex
    align-items center
    justify-content center
    border-radius 2px
    background-color rgba(47, 119, 215, 1)
    color rgba(255, 255, 255, 1)
    font-size 14px
    text-align center
</style>
