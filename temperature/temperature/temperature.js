function start()
{ 
  var button = document.getElementById( "calculateButton" );
  button.addEventListener( "click", displayTemperature, false ); // This event listener makes the button work.
}

function displayTemperature()
{
  var temperature = document.getElementById( "input1" );
  var result = document.getElementById( "result" );
  
  if(document.getElementById('celcius').checked) 
  {
    result.innerHTML = temperature.value + "&deg; F = " + celcius(temperature.value) + "&deg; C";
  }
  else
  {
    result.innerHTML = temperature.value + "&deg; C = " + fahrenheit(temperature.value) + "&deg; F";
  }
}

function celcius(temp)
{
  return (5.0 / 9.0 * (parseFloat(temp) - 32.0) );
}

function fahrenheit(temp)
{
  return (9.0 / 5.0 * parseFloat(temp) + 32.0);
}

window.addEventListener( "load", start, false );