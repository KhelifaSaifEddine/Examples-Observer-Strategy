/*
    Observer Design Pattern -> https://www.youtube.com/watch?v=45TeJEmcqk8
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

function Meteo()
{
  this.observers = [] // array of observer functions
  this.currentweather = 50
  this.forecast = "tombe"
}


Meteo.prototype = {
  subscribe: function(fn)
  {
    this.observers.push(fn)
  },
  unsubscribe: function(fnToRemove)
  {
    this.observers = this.observers.filter( fn => {
      if(fn != fnToRemove)
        return fn
    })
  },
  notify: function()
  {
    this.observers.forEach( fn => {
      fn.call(this,this)
    })
  }
}

const meteo = new Meteo()

function currentweather(param)
{
  console.log(param.currentweather)
}

function forecast(param)
{
  console.log(param.forecast)
}

meteo.subscribe(currentweather)
meteo.subscribe(forecast)
meteo.notify() 



console.log("hh")