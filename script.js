var lugje = [];

function dodaj() {
  const choek = document.getElementById("choek").value;
  let choekreset = document.getElementById("choek");
  lugje.push(choek);
  choekreset.value = " ";
}

function reshi() {
  brojac = 1;
  while (lugje.length != 0) {
    const randomIndex = Math.floor(Math.random() * lugje.length);
    const choek = lugje[randomIndex];
    if (choek.toLowerCase() == "petar") {
      lugje.splice(randomIndex, 1);
      setTimeout(function () {
        petardetected();
      }, 100);
    } else {
      const para = document.createElement("p");
      const node = document.createTextNode(brojac + "." + " " + choek);
      const element = document.getElementById("div1");
      element.appendChild(para);
      lugje.splice(randomIndex, 1);
      brojac = brojac + 1;
      para.appendChild(node);
    }
  }
  function petardetected() {
    const para = document.createElement("p");
    const node = document.createTextNode(brojac + "." + " Petar");
    const element = document.getElementById("div1");
    element.appendChild(para);
    para.appendChild(node);
  }
}
