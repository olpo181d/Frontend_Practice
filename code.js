var test = document.getElementById("test");

document.onscroll = function () {
  scrollTop = window.pageYOffset;
  /*test.innerHTML = scrollTop;*/

  allDivs = document.getElementsByClassName("section");

  for (i = 0; i < allDivs.length; i++) {
    curDiv = allDivs[i];

    heightBefore = 0;
    if (i > 0) {
      heightBefore = allDivs[i - 1].offsetHeight / 3;
    }

    if (scrollTop > curDiv.offsetTop - heightBefore) {
      color = curDiv.getAttribute("data-color");
      document.body.style.background = color;
    }
  }
};
