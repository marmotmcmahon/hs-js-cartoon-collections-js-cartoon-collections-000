function dwarfRollCall(dwarves) {
  var str = "";
  var i = 1;
  dwarves.forEach(function(e){
    str = str + i + ". " + e + " ";
    i += 1;
  });
  return str;
}

function summonCaptainPlanet(planeteerCalls) {
	  for (var i = 0; i < planeteerCalls.length; i++) {
        planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
    }
    return planeteerCalls;
}

function longPlaneteerCalls(words) {
  var long = false;
  words.forEach(function(e){
    if (e.length > 4) { long = true; }
  });
  return (long ? true : false);
}

function findTheCheese(foods) {
  let found = foods.find(
    e => (
      e == 'gouda' ||
      e == 'cheddar' ||
      e == 'camembert'
      )
    );
  if (typeof found !== 'undefined') { return found; }
  return 'no cheese!';
}