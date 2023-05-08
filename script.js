var lugje = [];

function dodaj() {
  const choek = document.getElementById("choek").value;
  let choekreset = document.getElementById("choek");
  lugje.push(choek);
  choekreset.value = " ";
}

function troll() {
  if (Math.floor(Math.random() * 11) == 1) {
    const myImage = new Image(500, 600);
    myImage.src =
      "https://cdn.discordapp.com/attachments/726092997468618898/1105153000579792936/IMG_20230502_021945_425.jpg";
    document.body.appendChild(myImage);
    console.log(1);
  }
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

