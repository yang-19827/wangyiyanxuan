import Index from "pages/Index/Index.vue"
import Category from "pages/Category/Category.vue"
import Buy from "pages/Buy/Buy.vue"
import Login from "pages/Login/Login.vue"
import Cart from "pages/Cart/Cart.vue"
import Person from "pages/Person/Person.vue"
import Search from "pages/Search/Search.vue"
import loginPhone from "pages/loginPhone/loginPhone.vue"
import loginEmail from "pages/loginEmail/loginEmail.vue"
import loginIndex from "pages/loginIndex/loginIndex.vue"
export default [
  {path:'/Index',component:Index,meta:{showFooter:true}},
  {path:'/Category',component:Category,meta:{showFooter:true}},
  {path:'/Buy',component:Buy,meta:{showFooter:true}},
  {path:'/Cart',component:Cart,meta:{showFooter:true}},
  {path:'/Person',component:Person,meta:{showFooter:true}},
  {path:'/Search',component:Search,meta:{showFooter:false}},
  {
    path:'/Login',
    component:Login,meta:{showFooter:false},
    children:[
      {path:'index',component:loginIndex},
      {path:'phone',component:loginPhone},
      {path:'email',component:loginEmail},
      {path:'',redirect:'index'}
    ]
},
  {path:'',redirect:'Index'}
]