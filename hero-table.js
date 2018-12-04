window.onload = function() {

// Create an object:
var superm = {smname:"Super Man",smidentity:"Kale-El",powers1:"super speed",powers2:"super strength",powers3:"Flying",powers4:"Ice Breath",powers5:"Ect..",smweakness1:"Kyryptonite",
smweakness2:"Not having access to the sun",spmname:"Spider Man",spmidentity:"Peter Parker",powers6:"Super Strength",powers7:"Spider Sense",powers8:"Shoots Webs",powers9:"Sticks To Any Surface",
weakness3:"Bullets and anything that kills a normal person",bname:"Batman",bidentity:"Bruce Wayne",bpower1:"special weapons",bpower2:"Money",bpower3:"Knows every form of martial arts",bweakness:"Anything that would kill a normal person.",
wname:"Wonder Woman",widentity:"Diana Prince",wpowers1:"Super strength",wpowers2:"Flight",wpowers3:"Semi-Invulnerable",wpowers4:"Super Speed",wpowers5:"Lasso Of Truth",wweakness:"Brute force from a god or someone stronger then her",
sname:"Captain America",steve:"Steve Rogers",cpower:" Anything that a normal person can do but a million times better.",cweakness:" Anything that kills a normal person.",sgname:"Super Girl",kara:"Kara Zor-el",
powers10:"super speed",powers11:"super strength",powers12:"Flying",powers13:"Ice Breath",powers14:"Ect..",weakness4:"Kyryptonite",weakness5:"Not having access to the sun",gname:"Green Lantern",Hal:"Hal Jordan",
powers15:"Creates anything they can imagine out of green constructs",powers16:"Universal translator",powers17:"Flying",powers18:"Can breath in space",weakness6:"Anything that kills a normal person",weakness7:"Losing his ring",};

// Display some data from the object:
document.getElementById("superman").innerHTML = superm.smname,
// Display some data from the object:
document.getElementById("clark").innerHTML = superm.smidentity,
// Display some data from the object:
document.getElementById("smpowers1").innerHTML = superm.powers1,
// Display some data from the object:
document.getElementById("smpowers2").innerHTML = superm.powers2,
// Display some data from the object:
document.getElementById("smpowers3").innerHTML = superm.powers3,
// Display some data from the object:
document.getElementById("smpowers4").innerHTML = superm.powers4,
// Display some data from the object:
document.getElementById("smpowers5").innerHTML = superm.powers5,
// Display some data from the object:
document.getElementById("smweakness1").innerHTML = superm.smweakness1,
// Display some data from the object:
document.getElementById("smweakness2").innerHTML = superm.smweakness2,
// Display some data from the object:
document.getElementById("spmidentity").innerHTML = superm.spmname,
// Display some data from the object
document.getElementById("Peter").innerHTML = superm.spmidentity,
// Display some data from the object:
document.getElementById("spmpowers1").innerHTML = superm.powers6,
// Display some data from the object:
document.getElementById("spmpowers2").innerHTML = superm.powers7,
// Display some data from the object:
document.getElementById("spmpowers3").innerHTML = superm.powers8,
// Display some data from the object:
document.getElementById("spmpowers4").innerHTML = superm.powers9,
// Display some data from the object:
document.getElementById("spmweakness").innerHTML = superm.weakness3,
// Display some data from the object:
document.getElementById("bat").innerHTML = superm.bname,
// Display some data from the object:
document.getElementById("bruce").innerHTML = superm.bidentity,
// Display some data from the object:
document.getElementById("bpower1").innerHTML = superm.bpower1,
// Display some data from the object:
document.getElementById("bpower2").innerHTML = superm.bpower2,
// Display some data from the object:
document.getElementById("bpower3").innerHTML = superm.bpower3,
// Display some data from the object:
document.getElementById("bweakness").innerHTML = superm.bweakness,
// Display some data from the object:
document.getElementById("wonder").innerHTML = superm.wname,
// Display some data from the object:
document.getElementById("Diana").innerHTML = superm.widentity,
// Display some data from the object:
document.getElementById("wpowers1").innerHTML = superm.wpowers1,
// Display some data from the object:
document.getElementById("wpowers2").innerHTML = superm.wpowers2,
// Display some data from the object:
document.getElementById("wpowers3").innerHTML = superm.wpowers3,
// Display some data from the object:
document.getElementById("wpowers4").innerHTML = superm.wpowers4,
// Display some data from the object:
document.getElementById("wpowers5").innerHTML = superm.wpowers5,
// Display some data from the object:
document.getElementById("wweakness").innerHTML = superm.wweakness,
// Display some data from the object:
document.getElementById("cap").innerHTML = superm.sname,
// Display some data from the object:
document.getElementById("steve").innerHTML = superm.steve,
// Display some data from the object:
document.getElementById("cpower").innerHTML = superm.cpower,
// Display some data from the object:
document.getElementById("cweakness").innerHTML = superm.cweakness,
// Display some data from the object:
document.getElementById("Superg").innerHTML = superm.sgname,
// Display some data from the object:
document.getElementById("kara").innerHTML = superm.kara,
// Display some data from the object:
document.getElementById("sgpowers1").innerHTML = superm.powers10,
// Display some data from the object:
document.getElementById("sgpowers2").innerHTML = superm.powers11,
// Display some data from the object:
document.getElementById("sgpowers3").innerHTML = superm.powers12,
// Display some data from the object:
document.getElementById("sgpowers4").innerHTML = superm.powers13,
// Display some data from the object:
document.getElementById("sgpowers5").innerHTML = superm.powers14,
// Display some data from the object:
document.getElementById("sgweakness1").innerHTML = superm.weakness4,
// Display some data from the object:
document.getElementById("sgweakness2").innerHTML = superm.weakness5,
// Display some data from the object:
document.getElementById("green").innerHTML = superm.gname,
// Display some data from the object:
document.getElementById("hal").innerHTML = superm.Hal,
// Display some data from the object:
document.getElementById("gpowers1").innerHTML = superm.powers15,
// Display some data from the object:
document.getElementById("gpowers2").innerHTML = superm.powers16,
// Display some data from the object:
document.getElementById("gpowers3").innerHTML = superm.powers17,
// Display some data from the object:
document.getElementById("gpowers4").innerHTML = superm.powers18,
// Display some data from the object:
document.getElementById("gweakness1").innerHTML = superm.weakness6,
// Display some data from the object:
document.getElementById("gweakness2").innerHTML = superm.weakness7;
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
