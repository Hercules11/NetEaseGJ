window.addEventListener("DOMContentLoaded", () => {
    // 改变版权日期
    let el = document.querySelector("#cpy");
    let now = new Date();
    let year = now.getFullYear();
    el.innerHTML = year;

    // 隐藏backUp
    let backUp = document.querySelector('.j-backTop');
    backUp.style.visibility = 'hidden';

  // head.style.height = '70px';
    yDis = document.querySelector('.b-nav').getBoundingClientRect().y;

    document
      .querySelector(".g-backTop.j-backTop")
        .addEventListener('click', () => {
            scrollToTop();
      });
});

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      // 每运行一次，获取当前离顶端的位置，然后进行注册自己为requestAnimationFrame的回调
        // 滚动差值
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

let yDis;

window.addEventListener('scroll', () => {
    // console.log(new Date())
    let head = document.querySelector(".fake");
    let icon = document.querySelector(".b-nav");
    let dis = icon.getBoundingClientRect().y;
    if (yDis-70 > 0 && dis-70 <= 0) {
        head.style = "opacity:1;height:70px";
        yDis = dis;
    } else if (yDis - 70 <= 0 && dis - 70 > 0) {
        head.style = "opacity:0;height:0px";
        yDis = dis;
    }
    // console.log(head.style)
    let backUp = document.querySelector('.j-backTop');
    let mid = document.querySelector('#m-b3');
    if (mid.getBoundingClientRect().y <= 0) {
        backUp.style.visibility = 'visible';
    } else {
        backUp.style.visibility = "hidden";
    }
})

