Page({
  data: {
    imgUrls: [
      '../../images/banner-1.jpg',
      '../../images/banner-2.jpg'
    ],
    classlist:[
      {
        "name":"第一课:小程序入门准备",
        "url":"pages/detail/detail.wxml",
        "img":"../../images/cover-1.jpg",
        "text":"介绍什么是小程序，小程序的实现原理，以及开发环境的部署。",
        "teacher":"主讲老师:张德检",
        "id":"1",
        
      },
      {
        "name":"第二课:小程序入门准备",
        "img":"../../images/cover-2.jpg","url":"/pages/detail/detail?id=1",
        "text":"介绍什么是小程序，小程序的实现原理，以及开发环境的部署。",
        "teacher":"主讲老师:张德检",
        "id":"2",
      },
      {
        "name":"第三课:小程序入门准备",
        "img":"../../images/cover-3.jpg","url":"/pages/detail/detail?id=1",
        "text":"介绍什么是小程序，小程序的实现原理，以及开发环境的部署。",
        "teacher":"主讲老师:张德检",
        "id":"3",
      },
      {
        "name":"第四课:小程序入门准备",
        "img":"../../images/cover-4.jpg","url":"/pages/detail/detail?id=1",
        "text":"介绍什么是小程序，小程序的实现原理，以及开发环境的部署。",
        "teacher":"主讲老师:张德检",
        "id":"4",
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 500
  },
 
  

})
