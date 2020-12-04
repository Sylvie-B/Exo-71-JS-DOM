let monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript";


document.getElementById('viewport').appendChild(monDiv);

let newDiv = document.createElement("div");
newDiv.style.backgroundColor = "red";
newDiv.style.width ="100px";
newDiv.style.height ="100px";

document.getElementById("viewport").appendChild(newDiv);

let span01 = document.getElementById("aSupprimer");
span01.remove();
