window.onload = function() {

    superman = {
    name: "Super Man",
    identity: "Kal-EL",
    powers:["*super speed","*super strength","*Flying","*Ice Breath","*Ect.."],
    weaknesses:["*Kyryptonite","*Not having access to the sun"],
    yes:"Yes",
    button:"YES HE HAS BOTH CANONICALY AND NON-CANONICALY!",
    link:"https://en.wikipedia.org/wiki/Superman",
    buttonnum:5
}
    spiderman = {
    name: "Spider Man",
    identity: "Peter Parker",
    powers:["*Super Strength","*Spider Sense","*Shoots Webs","*Sticks To Any Surface"],
    weaknesses:"Bullets and anything that kills a normal person",
    yes: "Yes",
    button:"YES HE HAS BOTH CANONICALY AND NON-CANONICALY!",
    link:"https://en.wikipedia.org/wiki/Spider-Man",
    buttonnum:12
}
    batman = {
    name: "Bat Man",
    identity: "Bruce Wayne",
    powers:["*special weapons","*Money","*Knows every form of martial arts"],
    weaknesses:"Anything that would kill a normal person.",
    yes: "Yes",
    button:"NO AND YES HE HAS BOTH CANONICALY AND NON-CANONICALY!",
    link:"https://en.wikipedia.org/wiki/Batman",
    buttonnum:19
}
    wonderwoman = {
    name: "Wonder Woman",
    identity: "Diana Prince",
    powers:["*Super strength","*Flight","*Semi-Invulnerable","*Super Speed","*Lasso Of Truth"],
    weaknesses:"Brute force from a god or someone stronger then her",
    yes: "Yes",
    button:"YES SHES A PRO MURDERING BAD GUYS KINDA LADY!!",
    link:"https://en.wikipedia.org/wiki/wonder woman",
    buttonnum:26
}
    captainamerica = {
    name: "Captain America",
    identity: "Steve Rogers",
    powers:" Anything that a normal person can do but a million times better.",
    weaknesses:"Anything that would kill a normal person.",
    yes: "No",
    button:"YES HE WAS A SOLDIER AND WHILE HE DOESNT KILL ANYMORE HE HAS BEFORE!",
    link:"https://en.wikipedia.org/wiki/captain america",
    buttonnum:33
}
    supergirl = {
    name: "Super Girl",
    identity: "Kara Zor-El",
    powers:["*super speed","*super strength","*Flying","*Ice Breath","*Ect.."],
    weaknesses:["*Kyryptonite","*Not having access to the sun"],
    yes:"Yes",
    button:"YES HE HAS BOTH CANONICALY AND NON-CANONICALY!",
    link:"https://en.wikipedia.org/wiki/supergirl",
    buttonnum:40
}
    greenlantern = {
    name: "Green Lantern",
    identity: "Hal Jordan",
    powers:["*Creates anything they can imagine out of green constructs","*Universal translator","*Flying","*Can breath in space"],
    weaknesses:["*Anything that kills a normal person","*Losing his ring"],
    yes: "Yes",
    button:"YES HE HAS BOTH CANONICALY AND NON-CANONICALY! (fun fact he in one story killed all of the lanters and technically became a god)",
    link:"https://en.wikipedia.org/wiki/green lantern",
    buttonnum: 47
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
    const buttonValue = superHeroArray[i].button
    const buttonId= "button-"+i;
    const linkValue = superHeroArray[i].link
    const linkId= "link-"+i;
    const buttonnumValue = superHeroArray[i].buttonnum
    const buttonnumId= "buttonnum-"+i;
var button = document.createElement("button");
button.innerHTML = "Click me";
var dave = document.getElementsByTagName('td')[buttonnumValue];
var superManById = document.getElementById(buttonId);
dave.appendChild(button);
button.addEventListener ("click", function() {
  alert(buttonValue);
});

document.body.appendChild(button);
var a = document.createElement('a');
var linkText = document.createTextNode(nameValue);
a.appendChild(linkText);
a.title = nameValue;
a.href = linkValue;
document.body.appendChild(a);
}
}
