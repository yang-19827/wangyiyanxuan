<template>
  <div class="SearchContainer">
    <div class="header">
      <div class="searchWrap">
        <div class="search">
          <div class="icon"></div>
          <input type="text" placeholder="轻薄充电宝" v-model="search" @keyup="searchData">
        </div>
      </div>
      <span class="close" @click="$router.back()">取消</span>
    </div>
    <div class="hotSearchContainer" v-if="!search">
      <div class="title">
        <span>热门搜索</span>
      </div>
      <div class="hotItme" v-for="(hotItem,index) in hotDatas" :key="index">
        <span>{{hotItem.keyword}}</span>
      </div>
    </div>
    <div class="searchList" v-else>
      <ul>
        <li v-for="(item,index) in listData" :key="index">
          <span>{{item}}</span>
          <i></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"Search",
  data() {
    return {
      hotDatas:[],
      search:'',
      listData:[]
    }
  },
  methods: {
    async searchData(){
      // this.showHot = this.search ? true : false
      if(!this.search) this.listData = []
      clearTimeout(this.timer)
      if(!this.search) return
      this.timer = setTimeout(async ()=>{
        this.listData = await this.$http.search.searchData({keywordPrefix:this.search})
      },300)
    }
  },
  async mounted(){
    let {hotKeywordVOList} = await this.$http.search.getSearchHouData()
    this.hotDatas = hotKeywordVOList
  }
}
</script>

<style lang='stylus'>
  .SearchContainer
    width 100%
    height 100%
    .header
      box-sizing border-box
      width 100%
      height 44px
      padding 0 15px
      display flex
      border-bottom none
      .searchWrap
        width 290px
        height 28px
        background-color #eeeeee
        padding 0 10px
        display flex
        align-items center
        .search
          width 100% 
          display flex
          justify-content center
          align-items center
          .icon
            width 14px
            height 14px
            background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp')
            background-size 100%
            margin-right 10px
          input
            flex 1
            height 20px
            font-size 14px
            background-color transparent
      .close
        font-size 14px
    .hotSearchContainer
      display flex
      flex-wrap wrap
      padding  0 20px 20px 20px
      .title
        width 100%
        font-size 14px
        color #999
        height 25px
        line-height 25px
      .hotItme
        height 23px
        padding 0 6px
        border 1px solid #999
        line-height 23px
        margin 16px 16px 0 0
        color #333
        font-size 12px
        border-radius 5px
        &:nth-of-type(1)
          color red
          border 1px solid red
        span 
          white-space nowrap
    .searchList
      ul
        padding 15px
        width 100%
        box-sizing border-box
        li
          height 52px
          width 100%
          display flex
          justify-content space-between
          align-items center
          border-bottom 1px solid #eee
          span 
            font-size 14px
          i 
            background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp')
            width 25px
            height 25px
            background-size 100%
</style>