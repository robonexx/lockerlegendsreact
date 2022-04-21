import React from 'react'

//styles 
import './ScrollBtn.scss'

export default function ScrollBtn() {
  return (
    <svg class="pagescroll"  viewBox="0 0 142 143" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="1" width="142" height="142" rx="71" />
    <path class="path__anim" d="M84.7125 118.365L74.8178 129.079L74.3236 58.3045L74.3236 58.3001L74.4295 5.11819C74.4334 3.14765 72.925 1.43363 70.9253 1.42816C68.9249 1.42268 67.4089 3.12947 67.405 5.10045L67.2991 58.317L67.2991 58.317L67.2991 58.326L67.7935 129.132L57.7498 118.567C56.3629 117.108 54.1031 117.126 52.7376 118.604C51.4066 120.045 51.4222 122.341 52.774 123.763L68.8805 140.706C70.2674 142.165 72.5272 142.148 73.8927 140.669L89.761 123.487C91.0921 122.046 91.0765 119.75 89.7247 118.328C88.3378 116.869 86.078 116.886 84.7125 118.365Z" />
    <path class="pagescroll__text" d="M27.6151 68.5753C27.5062 67.3774 27.0215 66.4463 26.1612 65.782C25.3118 65.1068 24.0975 64.7692 22.5185 64.7692C21.473 64.7692 20.6018 64.9053 19.9048 65.1776C19.2079 65.4498 18.6851 65.8255 18.3366 66.3047C17.9882 66.773 17.8085 67.312 17.7976 67.9219C17.7758 68.4228 17.8738 68.8639 18.0916 69.245C18.3203 69.6262 18.647 69.9638 19.0717 70.2578C19.5073 70.541 20.0301 70.7914 20.6399 71.0092C21.2498 71.227 21.9358 71.4176 22.6982 71.581L25.5732 72.2344C27.2285 72.5938 28.6877 73.0729 29.951 73.6719C31.2251 74.2708 32.2924 74.9841 33.1527 75.8118C34.0239 76.6394 34.6828 77.5923 35.1293 78.6705C35.5758 79.7486 35.8045 80.9574 35.8153 82.2969C35.8045 84.4096 35.2708 86.2228 34.2145 87.7365C33.1581 89.2502 31.639 90.41 29.657 91.2159C27.6858 92.0218 25.3063 92.4247 22.5185 92.4247C19.7197 92.4247 17.2803 92.0054 15.2003 91.1669C13.1203 90.3284 11.5031 89.0542 10.3487 87.3445C9.19437 85.6347 8.60085 83.473 8.56818 80.8594H16.3111C16.3764 81.9375 16.665 82.8359 17.1768 83.5547C17.6887 84.2734 18.3911 84.8179 19.2841 85.1882C20.188 85.5585 21.2334 85.7436 22.4205 85.7436C23.5095 85.7436 24.4351 85.5966 25.1974 85.3026C25.9706 85.0085 26.5642 84.6001 26.978 84.0774C27.3918 83.5547 27.6042 82.9557 27.6151 82.2805C27.6042 81.6489 27.4081 81.1098 27.027 80.6634C26.6458 80.206 26.0578 79.8139 25.2628 79.4872C24.4787 79.1496 23.4768 78.8393 22.2571 78.5561L18.7614 77.7393C15.8646 77.075 13.5831 76.0024 11.9169 74.5213C10.2507 73.0294 9.42306 71.0147 9.43395 68.4773C9.42306 66.4081 9.97846 64.5949 11.1001 63.0376C12.2218 61.4803 13.7737 60.2661 15.7557 59.3949C17.7377 58.5237 19.9974 58.0881 22.5348 58.0881C25.1267 58.0881 27.3755 58.5291 29.2812 59.4112C31.1979 60.2824 32.6844 61.5076 33.7408 63.0866C34.7971 64.6657 35.3362 66.4953 35.358 68.5753H27.6151ZM51.6115 92.4737C48.9652 92.4737 46.6946 91.9292 44.7997 90.8402C42.9157 89.7512 41.4673 88.2375 40.4545 86.299C39.4418 84.3497 38.9354 82.0954 38.9354 79.5362C38.9354 76.9661 39.4418 74.7119 40.4545 72.7734C41.4782 70.8241 42.9321 69.3049 44.8161 68.2159C46.7109 67.1269 48.9706 66.5824 51.5952 66.5824C53.9148 66.5824 55.9349 67.0017 57.6555 67.8402C59.3871 68.6787 60.7375 69.8658 61.7067 71.4013C62.6868 72.9259 63.2041 74.7173 63.2585 76.7756H55.7933C55.6409 75.4905 55.2053 74.4832 54.4865 73.7536C53.7786 73.0239 52.853 72.6591 51.7095 72.6591C50.7839 72.6591 49.9725 72.9205 49.2756 73.4432C48.5786 73.955 48.0341 74.7173 47.642 75.7301C47.2609 76.732 47.0703 77.9735 47.0703 79.4545C47.0703 80.9356 47.2609 82.188 47.642 83.2116C48.0341 84.2244 48.5786 84.9922 49.2756 85.5149C49.9725 86.0268 50.7839 86.2827 51.7095 86.2827C52.45 86.2827 53.1035 86.1248 53.6697 85.8089C54.2469 85.4931 54.7206 85.0303 55.0909 84.4205C55.4612 83.7997 55.6953 83.0483 55.7933 82.1662H63.2585C63.1823 84.2353 62.665 86.0431 61.7067 87.5895C60.7592 89.1359 59.4252 90.3393 57.7045 91.1996C55.9948 92.049 53.9638 92.4737 51.6115 92.4737ZM67.3464 92V66.9091H75.1056V71.483H75.367C75.8244 69.8277 76.5704 68.5971 77.6049 67.7912C78.6395 66.9744 79.8429 66.5661 81.215 66.5661C81.5853 66.5661 81.9664 66.5933 82.3585 66.6477C82.7505 66.6913 83.1154 66.7621 83.4529 66.8601V73.8026C83.0718 73.6719 82.5708 73.5684 81.9501 73.4922C81.3403 73.416 80.7958 73.3778 80.3166 73.3778C79.3691 73.3778 78.5143 73.5902 77.752 74.0149C77.0005 74.4287 76.407 75.0114 75.9714 75.7628C75.5467 76.5033 75.3343 77.3745 75.3343 78.3764V92H67.3464ZM97.1174 92.4737C94.4819 92.4737 92.2168 91.9347 90.3219 90.8565C88.4379 89.7675 86.9841 88.2538 85.9604 86.3153C84.9476 84.366 84.4412 82.1063 84.4412 79.5362C84.4412 76.9553 84.9476 74.6955 85.9604 72.7571C86.9841 70.8078 88.4379 69.294 90.3219 68.2159C92.2168 67.1269 94.4819 66.5824 97.1174 66.5824C99.7528 66.5824 102.012 67.1269 103.896 68.2159C105.791 69.294 107.245 70.8078 108.258 72.7571C109.282 74.6955 109.794 76.9553 109.794 79.5362C109.794 82.1063 109.282 84.366 108.258 86.3153C107.245 88.2538 105.791 89.7675 103.896 90.8565C102.012 91.9347 99.7528 92.4737 97.1174 92.4737ZM97.1664 86.446C98.1247 86.446 98.936 86.152 99.6003 85.5639C100.265 84.9759 100.771 84.1591 101.119 83.1136C101.479 82.0682 101.659 80.8594 101.659 79.4872C101.659 78.0933 101.479 76.8736 101.119 75.8281C100.771 74.7827 100.265 73.9659 99.6003 73.3778C98.936 72.7898 98.1247 72.4957 97.1664 72.4957C96.1754 72.4957 95.3368 72.7898 94.6507 73.3778C93.9756 73.9659 93.4583 74.7827 93.0989 75.8281C92.7504 76.8736 92.5762 78.0933 92.5762 79.4872C92.5762 80.8594 92.7504 82.0682 93.0989 83.1136C93.4583 84.1591 93.9756 84.9759 94.6507 85.5639C95.3368 86.152 96.1754 86.446 97.1664 86.446ZM121.873 58.5455V92H113.885V58.5455H121.873ZM134.946 58.5455V92H126.958V58.5455H134.946Z" fill="black"/>
    </svg>
  )
}
