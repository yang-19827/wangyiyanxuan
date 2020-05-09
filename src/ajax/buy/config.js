export default{
  api:{
    getBuyNavData:{
      url:"/topic/v1/know/navWap.json",
      corsUrl: '/163',
      method:"get",
      isToast:false,
    },
    getBuyData:{
      url:"/topic/v1/find/recManual.json?page=1&size=15",
      corsUrl: '/163',
      method:"get",
      isToast:false,
    }
  },
  name:'index',
}