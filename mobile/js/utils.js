window.addEventListener("DOMContentLoaded", () => {
  let head2 = document.querySelector("#u-down2");
  let head1 = document.querySelector("#u-down1");
  let client = judgeClient();

if (client === 'iOS') {
	let a1 = document.querySelector("#u-down1 .btn-down")
	let a2 = document.querySelector("#u-down2 .btn-down")
	// console.log(a1, a2)
	a1.innerHTML = "App Store 下载";
	a1.href = "https://itunes.apple.com/cn/app/id1184853385";
	a2.innerHTML = "App Store 下载";
	a2.href = "https://itunes.apple.com/cn/app/id1184853385";
}
  yAxios = head1.getBoundingClientRect().y;
  head2.style = "display:none";
  // 改变版权日期
  let el = document.querySelector("#cpy");
  let now = new Date();
  let year = now.getFullYear();
  el.innerHTML = year;


});

let yAxios;

window.addEventListener('scroll', () => {
    // 当监听的元素到达特定的位置时候，改变元素的类名，从而与应用样式
    let head1 = document.querySelector('#u-down1');
    let head2 = document.querySelector('#u-down2');
    let newPos = head1.getBoundingClientRect().y;
    if (yAxios >= 0 && newPos < 0) {
        head2.style = "opacity:1";
        yAxios = newPos;
    } else if (yAxios < 0 && newPos > 0) {
        head2.style = "opacity:0";
        yAxios = newPos;
    }
})

function judgeClient() {
    let client = '';
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  //判断iPhone|iPad|iPod|iOS
      client = 'iOS';
    } else if (/(Android)/i.test(navigator.userAgent)) {  //判断Android
      client = 'Android';
    } else {
      client = 'PC';
    }
    return client;
}