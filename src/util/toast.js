import { Toast } from 'vant'
export function loading() {
  Toast.loading({
    message: 'Loading...',
    duration: 0
  })
}

export function success() {
  Toast.clear()
  Toast.success('请求成功！')
}

export function fail() {
  Toast.clear();
  Toast.fail({
    message:"请求失败!"
  })
}
