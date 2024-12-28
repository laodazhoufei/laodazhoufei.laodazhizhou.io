// 获取a标签和div标签的引用
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link4 = document.getElementById("link4");
var link5 = document.getElementById
  ("link5");

var diyige = document.getElementById("diyige");
var dierge = document.getElementById("dierge");
var disange = document.getElementById("disange");
var disier = document.getElementById("disige");

// 为a标签添加点击事件监听器
link1.addEventListener("click", function() {
  // 切换div内容的显示与隐藏
  diyige.style.display = "block";
  dierge.style.display = "none";
  disange.style.display = "none";
  disige.style.display ="none";
});

link2.addEventListener("click", function() {
  // 切换div内容的显示与隐藏
  diyige.style.display = "none";
  dierge.style.display = "block";
  disange.style.display ="none";
  disige.style.display ="none";
});

link3.addEventListener("click", function() {
   // 切换div内容的显示与隐藏
   diyige.style.display ="none";
   dierge.style.display ="none";
   disange.style.display ="block";   
   disige.style.display ="none";
   });

 link4.addEventListener("click", function(){
   // 切换div内容的显示与隐藏
   diyige.style.display ="none";
   dierge.style.display ="none";
   disange.style.display ="none";   
   disige.style.display ="block";
   });

