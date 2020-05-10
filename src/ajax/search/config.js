export default{
  api:{
    getSearchHouData:{
      url:"/xhr/search/init.json",
      corsUrl: '/163',
      method:"get",
      isToast:false,
    },
    searchData:{
      url:"/xhr/search/searchAutoComplete.json",
      corsUrl: '/163',
      method:"post",
      isForm:true,
      isToast:false,
    },
  },
  name:'index',
}
