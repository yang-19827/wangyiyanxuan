import Index from "pages/Index/Index.vue"
import Category from "pages/Category/Category.vue"
import Buy from "pages/Buy/Buy.vue"
import User from "pages/User/User.vue"
import Cart from "pages/Cart/Cart.vue"

export default [
  {path:'/Index',component:Index},
  {path:'/Category',component:Category},
  {path:'/Buy',component:Buy},
  {path:'/User',component:User},
  {path:'/Cart',component:Cart},
  // {path:'',redirect:Index}
]