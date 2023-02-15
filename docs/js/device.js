//PC端还是移动端
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  console.log("是PC端", flag)
  localStorage.setItem('isPC', flag)
  if (!flag) {
    mobileType()
  }
}

IsPC()

function mobileType() {
  var u = navigator.userAgent;
  console.log(u)
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    localStorage.setItem('mobileType', "Android")
    //安卓手机
  } else if (u.indexOf('iPhone') > -1) {
    localStorage.setItem('mobileType', "iPhone")
    //苹果手机
  }
}
