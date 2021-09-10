wheat = document.getElementById("wheat")
sheep = document.getElementById("sheep")
stone = document.getElementById("stone")
wood = document.getElementById("wood")
clay = document.getElementById("clay")
townArray = [wheat.innerHTML, sheep.innerHTML, clay.innerHTML, wood.innerHTML];


function Plus(resource) {
    resource.innerHTML = Number(resource.innerHTML) + 1;
    return resource.innerHTML;
}

function Minus(resource) {
    if (Number(resource.innerHTML)!=0)
        resource.innerHTML = Number(resource.innerHTML) - 1;
        return resource.innerHTML;
}

function MinArray (array) {
    return Math.min.apply(Math,array)
}

function SpendResource (spending) {
  switch(spending) {
    case "road":
      if (MinArray(roadArray) >= 1) {
        Minus(wood);
        Minus(clay)
        break;
      }
      else break;
    
    case "town":
      if (MinArray(townArray) >= 1) {
        Minus(wheat)
        Minus(sheep)
        Minus(clay)
        Minus(wood)
        break;
      }
      else break;

    case "city":
      if (MinArray(cityArray) >= 1) {
        Minus(wheat);
        Minus(wheat);
        Minus(stone);
        Minus(stone);
        Minus(stone);
        break;
      }
      else break;

      case "dev":
      if (MinArray(devArray) >= 1) {
        Minus(sheep);
        Minus(wheat)
        Minus(stone)
        break;
      }
      else break;

    }
}

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    console.log("not button")
    return;
  }
  console.log("Button")
  roadArray = [clay.innerHTML, wood.innerHTML];
  road.innerHTML = MinArray(roadArray)

  townArray = [wheat.innerHTML, sheep.innerHTML, clay.innerHTML, wood.innerHTML];
  town.innerHTML = MinArray(townArray)

  cityArray = [Math.floor(Number(wheat.innerHTML)/2), Math.floor(Number(stone.innerHTML)/3)];
  city.innerHTML = MinArray(cityArray)

  devArray = [sheep.innerHTML, wheat.innerHTML, stone.innerHTML];
  dev.innerHTML = MinArray(devArray)
})


