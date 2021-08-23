function getCenter(element) {
  const {left, top, width, height} = element.getBoundingClientRect();
  return {x: left + width / 2, y: top + height / 2}
}

const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");

const arrowCenter1 = getCenter(arrow1);
const arrowCenter2 = getCenter(arrow2);

addEventListener("mousemove", ({clientX, clientY}) => {
  const angle1 = Math.atan2(clientY - arrowCenter1.y, clientX - arrowCenter1.x);
  arrow1.style.transform = `rotate(${angle1}rad)`;

  const angle2 = Math.atan2(clientY - arrowCenter2.y, clientX - arrowCenter2.x);
  arrow2.style.transform = `rotate(${angle2}rad)`;
});