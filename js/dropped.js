if (document.querySelector(".about-drop-div")) {
  const UIaboutDropDivs = document.querySelectorAll(".about-drop-div");
  const UIaboutImages = document.querySelectorAll(".images-wrapper>ul>li");

  // open the first dropped ul
  const firstDropped = UIaboutDropDivs[0].nextElementSibling;
  let initialHeight = 0;
  for (let k of firstDropped.children) {
    initialHeight += k.offsetHeight;
  }
  firstDropped.style.height = initialHeight + "px";
  firstDropped.parentElement.classList.add("toggle-drop-li");
  for (let dropDiv of UIaboutDropDivs) {
    dropDiv.addEventListener("click", e => {
      // reset all the dropped ul height to zero
      for (let ele of UIaboutDropDivs) {
        ele.nextElementSibling.style.height = 0 + "px";
        ele.parentElement.classList.remove("toggle-drop-li");
      }
      // remove all the active image li
      for (let ele of UIaboutImages) {
        ele.classList.remove("active-li-img");
      }
      // calc the height of the dropped ul and set its height
      let calcDroppedHeight = 0;
      for (let h of dropDiv.nextElementSibling.children) {
        calcDroppedHeight += h.offsetHeight;
        if (dropDiv.nextElementSibling.offsetHeight === 0) {
          dropDiv.nextElementSibling.style.height = calcDroppedHeight + "px";
          dropDiv.parentElement.classList.add("toggle-drop-li");
        } else {
          dropDiv.nextElementSibling.style.height = 0 + "px";
          dropDiv.parentElement.classList.remove("toggle-drop-li");
        }
      }
      const toBeActiveImage = document.querySelector(
        `.images-wrapper .${dropDiv.dataset.img}`
      );
      toBeActiveImage.classList.add("active-li-img");
    });
  }
}