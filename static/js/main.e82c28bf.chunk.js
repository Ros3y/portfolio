(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(A,e,t){},23:function(A,e,t){},30:function(A,e,t){"use strict";t.r(e);var i=t(1),a=t.n(i),s=t(15),n=t.n(s),c=(t(22),t(23),t(9)),r=t(2),o=t(17),g=t.p+"static/media/Sputnik-thumbnail.3d7d1df3.png",d=t.p+"static/media/escape-the-basement-thumbnail.28d170dd.jpg",m=t.p+"static/media/escape-the-estate-thumbnail.f467ebc7.jpg",l=t.p+"static/media/the-rise-thumbnail.ab10828f.jpg",h=t.p+"static/media/lunar-escape-thumbnail.aac08b30.jpg",p=t.p+"static/media/ancient-odyssey-thumbnail.ff9978a0.jpg",j=t.p+"static/media/squishem-thumbnail.a373fc08.jpg",b=t.p+"static/media/WvB-thumbnail.7917c3c9.png",f=t.p+"static/media/S&M-thumbnail.f8ffdad4.png",u=t.p+"static/media/Basemesh-front-thumbnail.0b85bd52.png",v=t.p+"static/media/Alien-animation.018592b4.gif",w=t.p+"static/media/Zeek-Freak-thumbnail.e22715a0.png",x=t.p+"static/media/zr-thumbnail.ca33cc08.png",k=t.p+"static/media/zigurous-thumbnail.13a6f3e7.png",P=t.p+"static/media/coa-thumbnail.3e5549a8.png",O=t.p+"static/media/twitch-emote-thumbnail.723b529a.png",I=t.p+"static/media/game-1-thumbnail.0c25f3b7.png",D=t.p+"static/media/game-2-thumbnail.302678f8.png",S=t.p+"static/media/game-3-thumbnail.8d09db4a.png",C=t(0),N={games:"Games",art:"Art & Animation",graphic:"Graphic Design",videos:"Videos"},y=[{text:"Solo Developer",image:g,link:"https://ros3y.itch.io/sputnik"},{text:"Solo Developer",image:f,link:"https://ros3y.itch.io/smoke-mirrors"},{text:"Solo Developer",image:b,link:"https://ros3y.itch.io/wizards-vs-builders"},{text:"Lead Artist, Designer",image:j,link:"https://squishem.com/"},{text:"Lead Artist, Designer",image:p,link:"https://zigurous.com/games/ancient-odyssey"},{text:"Artist",image:h,link:"https://zigurous.com/games/lunar-escape"},{text:"Lead Artist, Designer",image:l,link:"https://zigurous.com/games/the-rise"},{text:"Artist",image:m,link:"https://zigurous.com/games/escape-the-estate"},{text:"Lead Artist, Designer",image:d,link:"https://zigurous.com/games/escape-the-basement"}],E=[{text:"Vector Art",image:w,link:"/vectorart"},{text:"Pixel Art",image:v,link:"/pixelart"},{text:"3D Models",image:u,link:"/models"}],R=[{text:"My Logo",image:x,link:"/mylogo"},{text:"Zigurous",image:k,link:"/zigurous"},{text:"COA",image:P,link:"/coa"},{text:"Twitch Emotes",image:O,link:"/twitchemotes"}],G=[{text:"I made an ESCAPE Game, BUT its all Smoke and Mirrors?",image:S,link:"https://www.youtube.com/watch?v=ULLUhXiU_ak"},{text:"I made a game with Fighting WIZARDS vs BUILDERS?",image:D,link:"https://www.youtube.com/watch?v=411fL8yKP1c"},{text:"I created a Sci-fi FPS game in ONE day!",image:I,link:"https://www.youtube.com/watch?v=4Zi1_6Itd5s"},{text:"Sputnik Trailer",image:g,link:"https://www.youtube.com/watch?v=1JkuZBE2QQ0"}];var B=function(){var A=Object(i.useState)("undefined"!==typeof sessionStorage&&sessionStorage.getItem("category")||N.games),e=Object(o.a)(A,2),t=e[0],s=e[1];return Object(i.useEffect)((function(){!function(A){A&&"undefined"!==typeof sessionStorage&&sessionStorage.setItem("category",A)}(t)}),[t]),Object(C.jsxs)("article",{children:[Object(C.jsx)("h1",{children:"Zach Rowe"}),Object(C.jsx)("p",{className:"description",children:"I am a game developer with a passion for creation. I've been designing games since 2012 and eventually decided to go to art school to broaden my skills. Wanting to bring my designs to life, I shifted pursuits to engineering and earned a B.S. in Computer Science at Purdue University Northwest. My strength as a designer comes from my experience as both an artist and an engineer, allowing me to bridge the gap between multiple disciplines."}),Object(C.jsx)("div",{className:"Tabs",children:Object.keys(N).map((function(A){var e=N[A],i=t===e;return Object(C.jsx)("button",{className:i?"active":"",onClick:function(){return s(e)},children:e},A)}))}),Object(C.jsx)("br",{}),Object(C.jsxs)("div",{className:"Thumbnails",children:[t===N.games&&Object(C.jsx)(a.a.Fragment,{children:y.map((function(A){return Object(C.jsxs)("div",{className:"Thumbnails__Item",children:[Object(C.jsx)("a",{href:A.link,rel:"noreferrer",target:"_blank",children:Object(C.jsx)("img",{alt:A.text,src:A.image})}),Object(C.jsx)("h5",{children:A.text})]},A.link)}))}),t===N.art&&Object(C.jsx)(a.a.Fragment,{children:E.map((function(A){return Object(C.jsxs)("div",{className:"Thumbnails__Item",children:[Object(C.jsx)(c.b,{to:A.link,children:Object(C.jsx)("img",{alt:A.text,src:A.image})}),Object(C.jsx)("h4",{children:A.text})]},A.link)}))}),t===N.graphic&&Object(C.jsx)(a.a.Fragment,{children:R.map((function(A){return Object(C.jsxs)("div",{className:"Thumbnails__Item",children:[Object(C.jsx)(c.b,{to:A.link,children:Object(C.jsx)("img",{alt:A.text,src:A.image})}),Object(C.jsx)("h4",{children:A.text})]},A.link)}))}),t===N.videos&&Object(C.jsx)(a.a.Fragment,{children:G.map((function(A){return Object(C.jsxs)("div",{className:"Thumbnails__Item",children:[Object(C.jsx)("a",{href:A.link,rel:"noreferrer",target:"_blank",children:Object(C.jsx)("img",{alt:A.text,src:A.image})}),Object(C.jsx)("h4",{children:A.text})]},A.link)}))})]})]})};var M=function(A){var e=A.title,t=A.desciption,i=A.images;return Object(C.jsxs)("article",{children:[Object(C.jsx)("h1",{children:e}),Object(C.jsx)("p",{className:"description",children:t}),Object(C.jsx)("div",{className:"Gallery",children:i.map((function(A){return Object(C.jsx)("div",{className:"Gallery__Item",children:Object(C.jsx)("img",{alt:"",src:A})},A)}))})]})},U=t.p+"static/media/Alien-run-animation.5d09c4e6.gif",z=t.p+"static/media/Purple-slime-dash.050d2599.gif",K=t.p+"static/media/Red-slime-dash.84e423ac.gif",Q=[v,U,"data:image/gif;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",t.p+"static/media/Question.73d4bc15.gif",z,K];var H=function(){return Object(C.jsx)(M,{title:"Pixel Art",images:Q})},Y=[k,t.p+"static/media/zigurous-poster-logo.584d81b2.png",t.p+"static/media/zigurous-shirt-emblem.9f2cf50d.png",t.p+"static/media/zigurous-emblem.66703d4a.png",t.p+"static/media/zigurous-logo-dark.8fa33238.png",t.p+"static/media/zigurous-tagline.0e24f912.png"];var q=function(){return Object(C.jsx)(M,{title:"Zigurous",desciption:"Zigurous is an indie game development studio that my best friend and I started together in highschool. During this time I was also taking a graphic design course where I would regularly help design logos for local companies. Because of this experience I was confident in designing the Zigurous logo and other branding elements. The design has grown up with us and the brand will continue to evolve as we do.",images:Y})},L=[u,t.p+"static/media/Basemesh-side.b4e5f25f.png",t.p+"static/media/Goblin-front.da0f5b19.png",t.p+"static/media/Goblin-side.9440c6e1.png",t.p+"static/media/Muscles-front.6aa9b566.png",t.p+"static/media/Muscles-side.ed4b6f72.png",t.p+"static/media/Broadsword.3f2448af.png",t.p+"static/media/Katana.726a3498.png"];var J=function(){return Object(C.jsx)(M,{title:"3D Models",images:L})},T=t.p+"static/media/Button2.4f5881ac.png",W=t.p+"static/media/Button3.c51efac8.png",Z=t.p+"static/media/Gummy.f931ee84.png",X=t.p+"static/media/Cube-Grass.c44da2a8.png",F=t.p+"static/media/Cube-Jellitin.0edc5484.png",V=t.p+"static/media/Cube-Metal.b349d25f.png",_=t.p+"static/media/Cube-Stone.d2f08698.png",$=t.p+"static/media/Cube-Wood.8b1d3c69.png",AA=t.p+"static/media/Fault.0d718e5b.png",eA=t.p+"static/media/Nudge.4cc7f4d4.png",tA=t.p+"static/media/Target.37816b19.png",iA=t.p+"static/media/Swords.a47cbf8b.png",aA=[w,t.p+"static/media/Zeek.34c97b82.png",AA,t.p+"static/media/Dug.1c41a499.png",eA,t.p+"static/media/Buzz.2c85e3a0.png",t.p+"static/media/Ook.0c4104b1.png",Z,X,F,V,_,$,"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAHP5JREFUeNrsnQtwVNd5x7+72oVd8VpAvCQQcm2DoA1gcGxiklhujceZSQ0zbmYgE7Bi2ok7E0+p26bjTj3GE7dx7drB087U7sSEgMe4k7gVTad2Ys9U2JDarQ3CEEAuiSURHgYBC3rsSmj39vzP3ru6+z7n7n2u9ptZJEDaxz2/+73Pd4hqUhMXRaldgnzZMj96N784Cq1iVyiK71WF2kxdYJU6+TcqxVSVuvDt3guxA7WrXAOQvr4gujgYYGCp1ALAGCwt7Iq0OPLiKvWw1+zhgLKvYynqfO18rLcGYBXLN5qiKwMpauOwpTVa1GNvEVqyE1CmAtT56tnY0RqAPpavzZw5I1KvbmSLCuA2ehA4ESA72HvvjA8rHT++evVaDUA/QBdR21Sidg26qhEOI9HueFzprBYYqwZAmFdmurb7VNOZ0ozMldjpdzPtewC3NkUf4tqOzEWpvteKxHxGphX3nI39qAagw+CxLzsngLYT1orssd1vIPoKQD2oqIFXHkS/BC2+AXBrY3QDB8+pPJ3/bXMP14jnYvtrAFYYXARU2k2oSjgoS5eOUX29Ss2LkvzvsxtS1DA7JfUc/ZcDdLk/wL/vO1NHw8MKdXcHnQaxK6VQu1eDFc8CCHMbjqi77U6lzGZQNTcnOWiADt8DvCwJ1BNFFpPCHjRpTvorLt7U5WIMjF4iYo/0134auniS+j75DXWfGOVg9vXV0eXLAXs5ZFFzIq60e80sexJA1GKVANd6LXYA18pAW9o6xr82NORotSnLMnBx0AAeg84WKJJDRPFeUgdPUn/vKTrZdZa6fzlKp5iWtAVIlP9S1O6lWrSnANS03k6m9dqthu6L60bptttucA2XC5wy43YOm6hGs1VTDZ4glUHZd/wIHX7vNB08NMlyGJk23M204XYvaEPPAKgFGTus8vUiEZVDt449sqBj5hTA0dRlaS1nk3azSkOq1z7kMB78z2McxnjcoiVLd+bscDtIUTwC35Psneyw4rkWMV9u/foRDl+uH6c0baHArLv9GdQCxivv0sGfvk8//+kFOsN8R4tABIRPTUgArQw0EEBs3hTPN7H4kA33kzL/QVLqpkg/b2/3GRoejLt2jeqnRmjx0kXZzDCt2Hv0IL328glLomo3AxTXALQqvVISvJlfToNn0sxeOneZ/vyBJ1zVfADwnzqfL+ov9v5vB732g57KQXQpXRN046JqZbTdleAPU7vhgQStXn0j/z9ZYBEAeBUGFac++sR101tK++LztdyznB5f/SF9uP8V2v9vKfOmmSkCFup0sbVpd7KcF3QNvgqCi82b4/k+noXg6XK40x+NJgiqPr/1dlr9pefp4JvHaN++SCXBym62RuQUhHVOXqgtTdHvs8vyjNnfRxrlL78zSDffnGNuw4spsHAbBRo3WxrV/te/vkf956+4ClfzkoX0uw9+SehnAzPvoubG69R2xwk6f6GOLlwwvbwbV0wPRz8eSPysagDc0hj9IQs2HjGr9R751jBt3JCgUMjwH6EGHtnWLdpGSrjR8vf8g6f2uq7d7rxvDa2467fFteH0lRSa0kB3LD9KixYm6NjxEI2NyWtD9htrV0wLtzAIbU3TBB2Er93M7667a5Q2MPCyKhZIqTBTG5jzFdve80kP+H+Q1jVLpH8HqSY1sphW09MsOBug/fvDdOgXk+QhZGvG1o72not907caEDk+9kG2m/ndhx9Oaz1jbVaZx8BreZQCNlctEIAcPvCx6xHwH+3Yas4vDEVJafg9iowdpdUr+nkzxZEjITMQrlo5LUxHBxK2lO9srYDzgMNEghkmd8eTA9mBBgKMZS+mgwwT+TxZQbOA27K6bWVlwQm7ToFb/pr7yLiWuKa4tibs8Q4tePQPgGajXQQazz17fTyvx8xtoOUxqrvlCUfLZl4A8Iu/v7byCNkAIa4pri2uscno+CFfAKjVdaXhg7/36LeHxk3u9DUUWP5iunbrsJz66P9cha9hwSxaZsL/KwZh3dLvcQhxbXGNca1NQZheW+8CiAoHU9kdsr+HpPK2bcPjF23Rt6jupj9zxNzmCiog7mu/L1jv8GsQQnCtcc1NmOMOvsZeBJCX10ibhSIZbCDS1VMrgSV/62rTQP95dwFE8HHf5ntseW7dHPObnl1zXHsT0HRaBaFlAKKxIKByzReVhU8PNlC7DbC7VIm0uAqA2+YXwceUafW2PLfRJ+Sall17ExBGsdZYc88AGK5XO2Q7mGECMvA1bqFA8yOumFyvSaXRrxCENz3GrY0OobQ5ZmvN19wLAGoltjbZgEM3u/D37Ewqy2tAd5PQa2wGkF/zSXOYJnwivd9FM8eygQnWHGvvKoCIitgb2S4Lnx5wcPh82iRqi/a7e4VjrwUIUcrUBWtiAsLtlUTGFQGI+XrsHUilW5CDysDX6M0O5b5u93KArRalXoQBYNcfvrcRQuk8IWOAs+A0gEFFLuhAD982zeHlAYeHzK5R3OyAbl660PHX5FpQ8wc5hGyNFi1KSgUlQROpt4oA5LZfopsZO9PQSsWTzNr+DC/K0MCwq6+/zGENmAlKmscblbBGWKvZMhvxGQtm/EFTAPJRaBJ+H+qPxgoHIjCvRrtuluBa19zq2mvzHYIN92dBiDWTqR2DCdn8oCkAtXyfsKCDWa/topvFC/tvvShoPnVT0OJmNMVYM6ydnWxIA6htoWyRiXgzXS1ay3xNPApgjimG8L3VMpExY4MzYgeAWtS7QyboyNxB6GppfsTzELhZBWlonO365881xboFkwpKGCOiUbEUgHUKn8sn7Pchmsry+zw8hcAL4kYAImKKsYZYSxl/UJQVYQD5wCCJDeTIrGf8PuzPrfl9ng1AREwx1jLTMCLyHIwV/cAfazRgnbjpxWbx+9aPpP+CHWs+ML269LvUiuW2/1fQFBsS1BCsKdbWSmaEAEQnrGitl+/b3TQeOfGit4/ErVYsrwHIIcxJUHN/kK2tqCkGM+W6qMU0oCqu/XCXZExv4xbf+X3DA+5UQVo94v/lmeKmrXmmOGPdLGCnLIDaxiKhtAsy5xk/ASkXj5baSokbiWg0oM7xQARcEEJsh5i+Js+/F66SIC1TQgsGKiU4941lnriW7xM3v0sXevr9cS0YqC+61pUwFCgX+YpqPzinmYQzu2P8GPW6tRndrPnFdKzUpTcpdeGN8Qf7uxrvsVYLom0rx5phrYUDEsZQsYg4aFXka+yozfUbamJdCgaDzlUGGmYEUmq4iMJJZx+UOfdb1u6G51KvHCC60Z+15s8+N1UmIr5HWANqDQdCkS/uhNbWsYzv59eEs1t9gKIRcOrsHkqd/BNSr75bFL6MJHpJPfMyJY/9IdeKdgQkWHNRLQiWCjUqFAUQB/+Jvrn1945HRcqsL/tWE7nRBwj4ym1AgtZLnv4uqf1vyb8AA1U9t5eS3Y+ntWalAYl2ikChtS/7+wWYKg6gYNUD0VBmSKQ+ANyn0td9xvHXLLcBCfClGDw0dLKyF2IaMdXzAiU/fb4iHzGQ08eJtReNiAsxFSiaehHsdDZGQ/y4Ax/vanNDA5by/zLwpSxskr3+EaVOP02pK+ZmDWHLbG6FRCIijuamZAoCqKpi2k8/CqEazC8H0IUkdKkGBPh8lsJnNMvwD01qw9x1BgOi1ZFctvIAxGZjUfObNb0KwyJ93nDgdBK6lPbjgQPTVrYKtOEnfyUdpPB1zvEFC45MLmKGjRva8wDUjkMVknVG7efDqof76ZclJVMtTgkPUhDkSGjDXC24bp1406qRsYBZ86sf8pcVIflYet0IQIrsAU71vWSP6S0lLMjh2pCZfX6oYjkAc1JtYEE0GDEyFiigItuEUi/GgjQqHz5vNnU6ACl0AA1fnMETlUe8lWjD/rd4rrEsiMnh0kyUNsMZxrIqIdoOd6Hod7Vh87LftZ875vfW4r6fBwQg8rwjlEvOsChuqgdPFmTi9dcjYtEwYw3n1OWW4oT2+WJ/QGZouM9zf7o4vRekkP/HNY7dgYeJQEUVfE9gAmwIHpYD1vbnmmAh/6/VUH7xe+7PSxqw0kqFJz6XeMf0xnwfUHDSgbH+hyJ1TSz0/3wuEh0yq7IAFNlAkrH1eukNHRcuD5O0zgQ714pVUPt50fyaiexXiw82AnMZAJWAWPRr3B/q98qHW9JcSPtVgfktxEhJJciYywCokljjaZb/N3VZjSarNOCVd735ZhFkYpwKe+hjfa3yA8FccNwkC0bAhvM7qsX8QpysA+fWf7nvl+j15HWBlctsr9C+Qlvzx9V3SzNS1g2kVUHZAKRZV6+RxVRN4lQduFDzqWe1XzFwkPlgD7VpC6mX3mKPN7MqN82iYzzSZxRrZ3uIXsDmJNXEOgB53feqdwFU48U1M++SxqGROEzI0KIlwwgHUEmKVT8kp2bWRARAB5sOTIlAWTAzysPQISPKShpAQfObdWRqTUxGwAt9o/3GtWCPGEyGESyirAQ0WyykAZtrGtDSAIR3vfhA1EGx5gjekKJtYm+W0YAqic96rok15tftrhc5AMUrNLJNyVIaUGoyUk3yXZgFszKmN/XpC/5544PiN4qiZUdEWQnUsHDS/1s0bnpTw/5549hDYlOdOh2EqGJVkMw5vhCBrtma5JtgjM/wi+mtRLJYETDBQgBm5XcMIxr8Lk6dDQLHXPVIw6m0JOWukWgusGaCybkqyKzBv/eX6TUGInGxUqEqaRkrAlBNDtXoFZQJk8Qf7XcOQIr3VsU1c6IRoZbEr5lgV02w75P4Nlm7ykzw4MkavRPEBIv6gOSkD1gtqRgnjmYQTUv4XZwNQqoFQAeOZsgM8KyJhRpwqGaCa+IggP39gQJ+oP+3Eto9mlfq4Ge/i2YVC7FSFEDmnXSaBrAKUjF2z4WpihSM6DprFTIpACvyA32+ndCpMpzvxaYKTuV5QOYH+rki4kQOsHWCtLGZmbaqA9gl8sPd3cGq1IJ2S6RKUjBlFY2hYaEYKwUBVFSKVfTGLr3l36uatN8EV81WhjJ+oJl4IK0BBQE8VYxqHIriUy3oxK60CVMHNuSFT8loQFUVM8HDw0pxH9WHfW7oTO51wAecKAAaS7OlWMkDMKmQkPdYcvAgghEf5QT10RJxwQtlVqqpDatU5Yv7h4bxIoJDKtMAvnY+Jmy8+/qKP3HK65usDdGaU1siq6oGXKrXz6D9SjFSLAqGHyhkhksmGDFp3eOmGHcq35GWcq4Nv2qkRBRsjAFEk9BgzjieraJUTOZ5zu21/LxaSzXf6acd3c9STRqwWPtd7oQH0RQMmBsfUCmoAfsEbDs0jNeS03wvbt/Ljo9Bq6pWfGQ7Cvj5/EgxSUZ05sY1oCquActGOEzDQNN4BUJudk9/15UZfNUWAUO54KBDgMhPbIcvbRgtDDaENSBjLvOTey/EDmxtEhqQwJ3Msv1tOB60+3EK3PSYq4MsM2bXpd1oVTfOTjvoUDURpOYKmAvkOoUiv3jkSEjsFaAJcfyTS9Exv0NdhG8ijjIRZkNjLUtXqgp1iozqPcxeZPNm8RYm9bM3KMmiJBzpEJh1t33AweQPpvORPCpzcfM8egA3b4pPOAAPCwII1vIApCR1UF3+seq5cvlygIfaUv4NHFicUXt2L587zKcoRRabPmOOJ0URfSEyw1fUIV2es6yfnwzNJ3NcQbUImAAbYikdxlougDJ+IEi/T/BwujwfQj+HzKcC7YabDzk+pFlma99P9PHFotpPZy1fA6Yjkw6RA6sPHZpkDkAfClIpOA8XfX21GdmlmRCMfjv074MFcjOdJAAgan3SZthHAnO6YUOCnwA5oacahBqI4CbB5SnhU4OFM+L5v86iALK4rYP9406RJ3r77clSwYgXpVCkuv7eEQ7fRNnLWwq+wNLv8SHk6Vzq00X9bLAgKmBM/z7PY0RjglFFWmXzvSowqdB2Oozf+YtBflNNePgoPW5XPwlVP5Kh4uiXsWVsfimYsmY+IAAsa4YR8Rw+HMqK+EaZW/jZWfZCmtWqY68wYxZRPfscgTrvXWSA9tSOAW5C/Lh5PMVc0tFRopEyhijE3LNwRG4N8spudfWF4WMMiEa/GltUEsD4sNIRqVfRJV02JH77nclZAF7+bBw+Hm2zNb1ykegae6UFi7wJIXw8P/l5uMmHrhMND6Wvr4xMmUY0OSKoEJjPBwjLDR4HA4ISA1vGfyiI7Y+vXr0maoZR9zt1apzjG6NF0j5jac2YqgWRpmWQQXe2h+jCGaKBa/LwQYYG0grhN58SXTqfhrmkhjW01xXadoG1l6j9doCtLKVa7IdXTgnHlAC1izxxP1O/SMBCrl0pbS7iw+wunMqP6qyJhJntZ5ZlIJZtXSqVsRtpqIcHORwUChVYl5Hz6coSzrO79n7ec7yyq148+Zyi7R8PZkcxRX+TJwpVsVZ93AF6ETpUJhUEDXn+TE0Typjbs2zJ4jY2FmFNYv3pdUkU8iUxA6jAHCCsuaj2A0t68rmsDzjuMdIO9udukeff/+9hevTbQzRzDtHFs6V/FqYDF3X2XBxf7w8Q0GaECw5tf7k/XYrsL3Hn65vRl2rJazNRNbQTzKVTgnXB2sFPnD1PbM3FQ2rOUoF/LiNbG6Ofik7RRwoDkeTVS2kfRURmMQinTvcmcEgtdDMfB1sMhc1MEVl312i6miIYaTsNX6FgpRSE8P2efU5QezDtt+dc7KZC/xUUJFdYC7a2DvK0i2iEhosMx3jOfPcjZGg4tBMBPNGsvqgc+sUk/kBZD10ypUCE2b3q8ikYWBOsYzBkn/YrGYTosiQY6WHOKY5BLPuK0BIYQ3HLLUkKBtPOrajqvx5L5wwnTXb+Yh88NIn2vR6hN96IcJ/m+nX7IiQ8N0DU846hUH7Ageg06YGUJBQCcoe58vO3J9OBA1Kpl0dOJBIjpgDEL66cFg4zittEXu1XvwrSPW2jPM+EO3lMoisJjjZ+Hh/aiSgZZgRR3DvvTK7YxMoKNOz5C3X0ud/JhvCiQGrEKcE65AII1+Qf/nEKjY0J7qdW6Zl9l2I/M60BNS3YFQrSJpFDDfHGrl0L8OR0pJ75gtf5m5CKyJCqmRxOa0S7/Luf/CRCe1+tdxw8o1xgAB47HqI777jBIUQKC6bPK1IIwD176unXn4pHvvG40l5M+wkDyLXg9DAqIxtF725Ef3PmplB6oYRkRzzMEJxwaMHJYWsvKvy8v3t2Kh3/pTfq2DDJgHDdF0Z5FclLkusDwmK8/i8RGd9v+76LsQ9K/Yiwp310IHGUmeKN7Enni/w8HHmY4qnT0rklMz4NwMXvytYwS5ncF74/1VYfzyyEl/sVuuUm79SicfMjTWa0Gk//zTQZ09vFIt8/LutnSmkmRawywv25uML9Kwg+iFmfDkV2JEhhnipJXuu+C96XF+W/P5hMsZh3bozpOc4W1lLm2omyIqVXPh5IfLZiejjK3sZaUR8HUfGttyZNmWLD3cRBRKQMBx1lI0TZMlBL+S4uSeuSGxSNut8UgevaMG/8+iLqfUe84QDLtfPVs7EfCUXa8mZRQU5HeKDl/v1h7nfhjkJys1JBpGwspgPKcpE22oWQ+vC6xK55QwPObBh3ebB2WEOZj6ExQrYAyLsZVDlTDKcfJhAfLGQhB4ARNcxzvekuETjxupY0CnJ8fhAvAAgloVemsGZYOym3hbGR2/FiKYDcnJ2L7WdmcLcshLirZs+zJ8eHIAcpDACJdqW+0+n2r0PvhVxNtcjI/HnudmhAOUBJ6CILH5gAGzKvaXplEnFlu2i3jJ6aeeWVel7pMEZXdgr8xo8+8s+2gflz3QMQSmFe07jpxVpJlSMZC5wJSTENIG9aTYmbYgj8MPgT6ICJNjhzYU99EvINfG4FILnwYY1kfWawIGN6KwYQovUM7pD5HRSxUXu1KigpGYV/VkeJEcUXAK79vDv1N1SbAJ9eg8faSDUapLXfjkK9frYDqPmDT4m27+uya1c9/6DwB+2EMJHwB3yQ6IyUJ+Dbtatejj229mDA7HuwxDtntr9dxh90EkK/wNey2NkqCAIObBLTS21m4NP8vvZK3oclAML2p9LTFGKyEMLZBYSoO1pugi/W+QJAp80vbvjcgEMaPrbWWHMzfp/lAEJePRs7qibFmhVyAxNcAABodWDiBxOM4MNJAHGNccMb4TOTpMdaY80rfT+WJsg0R7TdLIQITBrmT5wdc+HJKm160Jkxxrimc5uya7xm4cMamw068vxQqz+o1jVDog2suujDju5ce4Nv20RLf6VbEHv6gvzhVfmDjcO0sMn+3B82os9fmF2FMg0fi3hZ0PGiZYGQHR+YQXhgxbRwi6KUn7aaCyGc4eXLx6hpoUrJZPGN7qLSdcybNeD7743TqhWjtr8ON7mGbiTUdtFW1f2J/I2JSsfec7E/tTQSt+uDfzyQ2G8GQpR+PvifSXxfSXNLiqcK+F5VE7OCwmGVDr4f9hx8qz43Svfek7D9dbDjcNqM8b9X0g+pwfdNy1NBdl4AsxCi6RHmAa1cy5Ynadp0opER+aZWtGyhEjI45B2ncu3tI/TVr9g70k7P70WmjP8bWqpe/meJvRwOwGc7gDqEK6eHe4jkI+Tjx0N8T+6yZWM0d75qShuOJRU6/Wv3y3HI9W386jCtvcPeiBd+3tzGcX8PfjUacSV2seUHHBUkml0HMBOYmIQQnSzwC2/+rSQ1NqW4NoQ/MyKoRBpmpziAbmlBRLowtwg48F7sFJjbOY3jKRaYXHS0oDHYLHx7BBtLTUfnTi7G1qboQ0TibVy5ctttN2jbw8N8zAWaUNGmLxItoyb80i5nyy3QeMjvwd+DL2p3imXOgvEdbOjjQwv9kcoGiNoOn+MAWgEhppligqk+jQv7RABiuVEgPb1Bev2NKbY2J0DbtTSP8dZ6POwGD4KqhrGDmW+y3xepdO+LI/C5AiBky/zo3eyu3S06c6aQYMQFtKE+tR4aEQ2p10uMMIMm7PiPektLdKhkIJ3Sequz+zmQ20P1SNd6SK9A61U0UkSlHrRVWZVk9iyAkK/NnDmDaTNM5F9VyfPALG94IJEBERoRZjk+VHykGSJjPACkLIwwrbx5QNN0TncxI7KdFs0GD+1TRyqd161SF9OabZXWdn0DYEYbNkZ/qCjy5btcwfSp9etHss7xgFbEUEczo2y9JIhop0xPj9XVu1cAHibTW7HZys40i+cB5H5hY/TJUhOUZEEsNAYN6Zv4oH9gBHToHIePlzudAAfCWLbLL11ae8qtz+mZdpFvNEVXBlTuF66y4vlwnJZ+0EzucEjdX8T0rhuj7n92RLFoCp00Ke3b5U6C0GcVolXesg1WzORi87gVHS1VAaDuF4Yj6k4rTLIxaoY2hK+oR85Ggc8I7Yi8Ir7aDaQOGyCDlsP3xWbwIaKFbwetZ+VEB5hcbCBy2t/zPIAGk7yBcFpTBVFyMcHQJP3ct0JHM+hAAsSEBRUzaLWQBhlKg8ESsQKqFqj8wMQKz16WjHLZn9tlt05OOADt0oaFzDRAXMQCF5x26fRBNdBsfWfq6AwLKKwYA+wXrecLAO3yDcsJ8ov6UayLtONY8TB7SiaiVfhweCBH16f1PVo9Atjrvp5vAcwyywqvoESpJiISw5gML5nbQlLnl6t5dCDRvSQYeSkUpISmDcM1xoqC9wwLWjbtu+RNredLDWiUry+ILg7CN1Roe00jZoG3c4y5K8bTKGsA2hyoRCIqIGy3I2L2haQj291M4+30WoBR9QDm+ogq04jsA7VNDO6oU2Eaz+s+3oQBMM88V6NW1LSd38zshALQKFoKB13YG51K49gAXRf7syOlUIdXUyk1AEVhTFEbM9NtSnrPsleDl5iqcvPamQpQZzVCNyEBLAgk0SrmS0EzrnLLd4Qvx750sdfvSrFHtQOXK/8vwACcPL8knkV02gAAAABJRU5ErkJggg==",tA,iA,"data:image/png;base64,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",T,W];var sA=function(){return Object(C.jsx)(M,{title:"Vector Art",images:aA})},nA=[x,t.p+"static/media/zr-dark.e4b96627.png",t.p+"static/media/zr-triangle.454d10c1.png"];var cA=function(){return Object(C.jsx)(M,{title:"My Logo",desciption:"When designing my own logo I wanted it to feel representative of who I am as a designer and person. Which is pretty difficult to accomplish that much meaning in 2 letters. I knew I wanted clean lines and some form of imagery. The imagery I went with is a shape, I designed the entire logo around a triangle so all the lines met up with this. I have a fascination with geometry numbers that I explored a lot when pursuing my mathematics minor so I drew on that for my logo.",images:nA})},rA=[P,t.p+"static/media/coa-title.86a4f637.png",t.p+"static/media/Coa-photo.fce711b2.png",t.p+"static/media/Coa-village.eec32cd9.png"];var oA=function(){return Object(C.jsx)(M,{title:"Chenga Ose Association",desciption:["Chenga Ose Association, which means \u2018all considered\u2019, is a grassroots, Christian based organization. COA was formed in 2008 to build new hope and a future for those with disabilities and their families. COA\u2019s scope reaches five provinces of Zimbabwe and directly cares for and empowers more than five hundred individuals with disabilities and their families. ",Object(C.jsx)("a",{href:"https://chengaose.com/",rel:"noreferrer",target:"_blank",children:"https://chengaose.com"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),"I designed a new logo for COA to establish a more professional looking brand. They have a special connection with a green pumpkin in their mythology and wanted that to be in their logo, so my approach was to subtly hint at this by making the letters round and arrange them to form the pumpkins base."],images:rA})},gA=[O,t.p+"static/media/Hi-emote.8deb5c3b.png",t.p+"static/media/Rng-emote.eecc1e8b.png",t.p+"static/media/Evil-emote.56ece7a2.png"];var dA=function(){return Object(C.jsx)(M,{title:"Twitch Emotes",desciption:"I was contracted to make these twitch emotes and badges for a streamer named Qlida. I had never made twitch emotes before but was willing to take on the challenge as I thought it couldn't be much different than things I have created in the past. It wasn't terribly difficult but one challenge I was facing that I had never encountered before was the scale of everything. Because these images were going to be seen at really small scales I had to be smart about where I added detail because a lot of the time the detail would be lost or unrecognizable. Because of this I went for minimal shadding and color pallets.",images:gA})};var mA=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)("main",{children:Object(C.jsx)(c.a,{children:Object(C.jsxs)(r.c,{children:[Object(C.jsx)(r.a,{path:"/pixelart",children:Object(C.jsx)(H,{})}),Object(C.jsx)(r.a,{path:"/models",children:Object(C.jsx)(J,{})}),Object(C.jsx)(r.a,{path:"/vectorart",children:Object(C.jsx)(sA,{})}),Object(C.jsx)(r.a,{path:"/mylogo",children:Object(C.jsx)(cA,{})}),Object(C.jsx)(r.a,{path:"/zigurous",children:Object(C.jsx)(q,{})}),Object(C.jsx)(r.a,{path:"/coa",children:Object(C.jsx)(oA,{})}),Object(C.jsx)(r.a,{path:"/twitchemotes",children:Object(C.jsx)(dA,{})}),Object(C.jsx)(r.a,{path:"/",children:Object(C.jsx)(B,{})})]})})})})},lA=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,n=e.getTTFB;t(A),i(A),a(A),s(A),n(A)}))};n.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(mA,{})}),document.getElementById("root")),lA()}},[[30,1,2]]]);
//# sourceMappingURL=main.e82c28bf.chunk.js.map