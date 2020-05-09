export default{
  api:{
    getBuyNavData:{
      url:"/topic/v1/know/navWap.json",
      corsUrl: '/163',
      method:"get",
      isToast:false,
    },
    getBuyData:{
      url:"/topic/v1/find/recManual.json",
      corsUrl: '/163',
      method:"get",
      isToast:false,
    },
    getBuyAutoData:{
      url:"/topic/v1/find/recAuto.json",
      corsUrl: '/163',
      method:"get",
      isToast:false,
    }
  },
  name:'index',
}