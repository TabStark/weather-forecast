let degree = document.getElementById("degree")
let place = document.getElementById("place")
let humiditypercent = document.getElementById("humiditypercent")
let windunit = document.getElementById("windunit")
let searchicon = document.getElementById("searchicon")
let search = document.getElementById("search")

let bangTemp=document.getElementById("bangTemp")
let bangHumidity=document.getElementById("bangHumidity")
let bangWind=document.getElementById("bangWind")

let chennaiTemp=document.getElementById("chennaiTemp")
let chennaiHumidity=document.getElementById("chennaiHumidity")
let chennaiWind=document.getElementById("chennaiWind")

let delhiTemp=document.getElementById("delhiTemp")
let delhiHumidity=document.getElementById("delhiHumidity")
let delhiWind=document.getElementById("delhiWind")

let hyderabadTemp=document.getElementById("hyderabadTemp")
let hyderabadHumidity=document.getElementById("hyderabadHumidity")
let hyderabadWind=document.getElementById("hyderabadWind")

let mumbaiTemp=document.getElementById("mumbaiTemp")
let mumbaiHumidity=document.getElementById("mumbaiHumidity")
let mumbaiWind=document.getElementById("mumbaiWind")

let kolkataTemp=document.getElementById("kolkataTemp")
let kolkataHumidity=document.getElementById("kolkataHumidity")
let kolkataWind=document.getElementById("kolkataWind")

async function checkWeather(cityName){
	
	let api_key = `7017e0559046146716f7ed1712011566`
	let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`

	let response = await fetch(api_url)
	let result =await response.json()
	

	place.innerHTML=result.name;
	degree.innerHTML=Math.round(result.main.temp/10) + "°C";
	humiditypercent.innerHTML=result.main.humidity + "%";
	windunit.innerHTML=Math.floor(result.wind.speed+10) + "Km/h";
}

searchicon.addEventListener("click",()=>{
	checkWeather(search.value)
}) 

// Bangalore Weather
async function bangWeather(){
	
	let api_key = `7017e0559046146716f7ed1712011566`
	let api_url = `https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=${api_key}`

	let response = await fetch(api_url)
	let result =await response.json()
	
	bangTemp.innerHTML=Math.round(result.main.temp/10) + "°C";
	bangHumidity.innerHTML=result.main.humidity + "%";
	bangWind.innerHTML=Math.floor(result.wind.speed+10) + "Km/h";
}
bangWeather();

// Chennai Weather
async function chennaiWeather(){
	
	let api_key = `7017e0559046146716f7ed1712011566`
	let api_url = `https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${api_key}`

	let response = await fetch(api_url)
	let result =await response.json()
	
	chennaiTemp.innerHTML=Math.round(result.main.temp/10) + "°C";
	chennaiHumidity.innerHTML=result.main.humidity + "%";
	chennaiWind.innerHTML=Math.floor(result.wind.speed+10) + "Km/h";
}
chennaiWeather();

// Delhi Weather
async function delhiWeather(){
	
	let api_key = `7017e0559046146716f7ed1712011566`
	let api_url = `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${api_key}`

	let response = await fetch(api_url)
	let result =await response.json()
	
	delhiTemp.innerHTML=Math.round(result.main.temp/10) + "°C";
	delhiHumidity.innerHTML=result.main.humidity + "%";
	delhiWind.innerHTML=Math.floor(result.wind.speed+10) + "Km/h";
}
delhiWeather();

// hyderabad Weather
async function hyderabadWeather(){
	
	let api_key = `7017e0559046146716f7ed1712011566`
	let api_url = `https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=${api_key}`

	let response = await fetch(api_url)
	let result =await response.json()
	
	hyderabadTemp.innerHTML=Math.round(result.main.temp/10) + "°C";
	hyderabadHumidity.innerHTML=result.main.humidity + "%";
	hyderabadWind.innerHTML=Math.floor(result.wind.speed+10) + "Km/h";
}
hyderabadWeather();

// Mumbai Weather
async function mumbaiWeather(){
	
	let api_key = `7017e0559046146716f7ed1712011566`
	let api_url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${api_key}`

	let response = await fetch(api_url)
	let result =await response.json()
	
	mumbaiTemp.innerHTML=Math.round(result.main.temp/10) + "°C";
	mumbaiHumidity.innerHTML=result.main.humidity + "%";
	mumbaiWind.innerHTML=Math.floor(result.wind.speed+10) + "Km/h";
}
mumbaiWeather();

// Kolkata Weather
async function kolkataWeather(){
	
	let api_key = `7017e0559046146716f7ed1712011566`
	let api_url = `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${api_key}`

	let response = await fetch(api_url)
	let result =await response.json()
	
	kolkataTemp.innerHTML=Math.round(result.main.temp/10) + "°C";
	kolkataHumidity.innerHTML=result.main.humidity + "%";
	kolkataWind.innerHTML=Math.floor(result.wind.speed+10) + "Km/h";
}
kolkataWeather();
