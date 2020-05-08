import Index from "pages/Index/Index.vue"
import Category from "pages/Category/Category.vue"
import Buy from "pages/Buy/Buy.vue"
import User from "pages/Login/Login.vue"
import Cart from "pages/Cart/Cart.vue"

export default [
  {path:'/Index',component:Index},
  {path:'/Category',component:Category},
  {path:'/Buy',component:Buy},
  {path:'/Login',component:User},
  {path:'/Cart',component:Cart},
  // {path:'',redirect:Index}
]