import { call } from 'redux-saga/effects'
// ______________________________________________________
//
function checkLoaded() {
  return new Promise((resolve, reject) => {
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('../../../sw.ts')
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      }
    })
  })
}
// ______________________________________________________
//
export default function* () {
  yield call(checkLoaded)
}
