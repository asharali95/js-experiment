var container = document.querySelector(".mouse-movement-area");
var box = document.querySelector(".box");
// console.log(container);

container.addEventListener("mousemove", (e) => {
  console.log("entered");
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  box.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener("mouseenter", (e) => {
    box.style.transition = "none";
  //Popout
});
container.addEventListener("mouseleave", (e) => {
    box.style.transition = "all 0.5s ease";
    box.style.transform = `rotateY(0deg) rotateX(0deg)`;
})
