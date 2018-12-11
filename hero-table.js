window.onload = function() {

    superman = {
    name: "Super Man",
    identity: "Kal-EL",
    powers:["*super speed","*super strength","*Flying","*Ice Breath","*Ect.."],
    weaknesses:["*Kyryptonite","*Not having access to the sun"],
    yes:"Yes"
}
    spiderman = {
    name: "Spider Man",
    identity: "Peter Parker",
    powers:["*Super Strength","*Spider Sense","*Shoots Webs","*Sticks To Any Surface"],
    weaknesses:"Bullets and anything that kills a normal person",
    yes: "Yes"
}
    batman = {
    name: "Bat Man",
    identity: "Bruce Wayne",
    powers:["*special weapons","*Money","*Knows every form of martial arts"],
    weaknesses:"Anything that would kill a normal person.",
    yes: "Yes"
}
    wonderwoman = {
    name: "Wonder Woman",
    identity: "Diana Prince",
    powers:["*Super strength","*Flight","*Semi-Invulnerable","*Super Speed","*Lasso Of Truth"],
    weaknesses:"Brute force from a god or someone stronger then her",
    yes: "Yes"
}
    captainamerica = {
    name: "Captain America",
    identity: "Steve Rogers",
    powers:" Anything that a normal person can do but a million times better.",
    weaknesses:"Anything that would kill a normal person.",
    yes: "No"
}
    supergirl = {
    name: "Super Girl",
    identity: "Kara Zor-El",
    powers:["*super speed","*super strength","*Flying","*Ice Breath","*Ect.."],
    weaknesses:["*Kyryptonite","*Not having access to the sun"],
    yes:"Yes"
}
    greenlantern = {
    name: "Green Lantern",
    identity: "Hal Jordan",
    powers:["*Creates anything they can imagine out of green constructs","*Universal translator","*Flying","*Can breath in space"],
    weaknesses:["*Anything that kills a normal person","*Losing his ring"],
    yes: "Yes"
}

const superHeroArray = [superman,spiderman,batman,wonderwoman,captainamerica,supergirl,greenlantern];

for (var i=0; i<superHeroArray.length; i++) {
    const nameValue = superHeroArray[i].name
    const nameId = "name-"+i;
    document.getElementById(nameId).innerHTML = nameValue
    const identityValue = superHeroArray[i].identity
    const identityId = "identity-"+i;
    document.getElementById(identityId).innerHTML = identityValue
    const powersValue = superHeroArray[i].powers
    const powersId = "powers-"+i;
    document.getElementById(powersId).innerHTML = powersValue
    const weaknessesValue = superHeroArray[i].weaknesses
    const weaknessesId = "weaknesses-"+i;
    document.getElementById(weaknessesId).innerHTML = weaknessesValue
    const yesValue = superHeroArray[i].yes
    const yesId = "yes-"+i;
    document.getElementById(yesId).innerHTML = yesValue
}
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Click me";
// 2. Append somewhere
var dave = document.getElementsByTagName("td")[5];
var superManById = document.getElementById("superheroone");
dave.appendChild(button);
// 3. Add event handler
button.addEventListener ("click", function() {
  alert("YES HE HAS BOTH CANONICALY AND NON-CANONICALY!");
});
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Click me";
// 2. Append somewhere
var dave = document.getElementsByTagName("td")[12];
var superManById = document.getElementById("superherotwo");
dave.appendChild(button);
// 3. Add event handler
button.addEventListener ("click", function() {
  alert("YES HE HAS BOTH CANONICALY AND NON-CANONICALY!");
});
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Click me";
// 2. Append somewhere
var dave = document.getElementsByTagName("td")[19];
var superManById = document.getElementById("superherothree");
dave.appendChild(button);
// 3. Add event handler
button.addEventListener ("click", function() {
  alert("NO AND YES HE HAS BOTH CANONICALY AND NON-CANONICALY!");
});
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Click me";
// 2. Append somewhere
var dave = document.getElementsByTagName("td")[26];
var superManById = document.getElementById("superherofour");
dave.appendChild(button);
// 3. Add event handler
button.addEventListener ("click", function() {
  alert("YES SHES A PRO MURDERING BAD GUYS KINDA LADY!!");
});
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Click me";
// 2. Append somewhere
var dave = document.getElementsByTagName("td")[33];
var superManById = document.getElementById("superherofive");
dave.appendChild(button);
// 3. Add event handler
button.addEventListener ("click", function() {
  alert("YES HE WAS A SOLDIER AND WHILE HE DOESNT KILL ANYMORE HE HAS BEFORE!");
});
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Click me";
// 2. Append somewhere
var dave = document.getElementsByTagName("td")[40];
var superManById = document.getElementById("superherosix");
dave.appendChild(button);
// 3. Add event handler
button.addEventListener ("click", function() {
  alert("YES HE HAS BOTH CANONICALY AND NON-CANONICALY!");
});
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Click me";
// 2. Append somewhere
var dave = document.getElementsByTagName("td")[47];
var superManById = document.getElementById("superheroseven");
dave.appendChild(button);
// 3. Add event handler
button.addEventListener ("click", function() {
  alert("YES HE HAS BOTH CANONICALY AND NON-CANONICALY! (fun fact he in one story killed all of the lanters and technically became a god)");
});

}
