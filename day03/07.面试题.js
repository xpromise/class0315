/*
  从浏览器输入一个网址https://www.baidu.com，到页面渲染完成，发生了什么?
    1. DNS解析
      将域名解析ip地址
    2. TCP连接
      TCP三次握手：（白话）
        第一次握手：由浏览器发起的，发送给服务器。我要发请求给你了，你准备接受一下
        第二次握手：由服务器发起的，发送给浏览器。我准备好了，你放马过来。
        第三次握手：由浏览器发起的，发送给服务器。我马上要发了，你准备接受吧
    3. 发送请求
      请求报文
    4. 接受响应
      响应报文
    5. 解析、渲染页面
    6. 断开连接
      TCP四次挥手
        第一次挥手：由浏览器发起的，发送给服务器。我东西发完了（请求报文），你准备关闭接受吧
        第二次挥手：由服务器发起的，发送给浏览器。我要关闭了，你也别再发了。
        第三次挥手：由服务器发起的，发送给浏览器。我东西发完了（响应报文），你准备关闭吧。
        第四次挥手：由浏览器发起的，发送给服务器。我接受完了，我也要关闭了，你也准备关闭吧。
 */