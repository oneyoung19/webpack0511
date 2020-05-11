// css
import './assets/css/index.css'
// img
import catImg from './assets/image/cat.jpeg'
import viewImg from './assets/image/49a7CBP1Rh4.jpg'

const body = document.getElementsByTagName('body')[0]
// 创建
const p = document.createElement('p')
p.innerText = 'hello webpack0511'

const catBox = document.createElement('img')
catBox.src = catImg
const viewBox = document.createElement('img')
viewBox.src = viewImg

body.appendChild(p)
body.appendChild(catBox)
body.appendChild(viewBox)
