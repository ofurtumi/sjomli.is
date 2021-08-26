var salat = []
salatVal = ""
salatRand = ""
sosurVal = ""
sosurRand = ""

hraefni = [
  "Agúrka", 
  "Ananas",
  "B.G.Salat",
  "Brauðteningar",
  "Brokkolí",
  "Chili",
  "Egg",
  "Gulrætur",
  "Hummus",
  "Kirsuberjatómatar",
  "Kjúklingabaunir",
  "Kotasæla",
  "Kúskús",
  "Maískorn",
  "Nachos",
  "Nýrnabaunir",
  "Paprika",
  "Pasta",
  "Rauðlaukur",
  "Sætar kartöflur",
  "Vínber",
  "Spínathummus"
]

sosur = [
  "Alioli",
  "Chilli-engifer",
  "Chipotle",
  "Gráðosta",
  "Hunangs-sinnsep",
  "Ólífuolía",
  "Ranch",
  "Sesar",
  "Sterk salsa"
]

function getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

function randSalat() {
  salatVal = ""
  salatRand = getRandom(hraefni, 8);
  salatRand.forEach(value => salatVal += value + "<br>");
  document.getElementById("salatContainer").innerHTML = salatVal;
}

function randSosa() {
  sosurVal = ""
  sosurRand = getRandom(sosur, 3);
  sosurRand.forEach(value => sosurVal += value + "<br>");
  document.getElementById("sosuContainer").innerHTML = sosurVal;
}

function randSkal() {
  randSalat()
  randSosa()
}