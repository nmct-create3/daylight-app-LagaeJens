let SunriseElement
let SunsetElement
let LocationElement
let SunElement
let TimeLeftElement
// _ = helper functions
function _parseMillisecondsIntoReadableTime(timestamp) {
	//Get hours from milliseconds
	const date = new Date(timestamp * 1000);
	// Hours part from the timestamp
	const hours = '0' + date.getHours();
	// Minutes part from the timestamp
	const minutes = '0' + date.getMinutes();
	// Seconds part from the timestamp (gebruiken we nu niet)
	// const seconds = '0' + date.getSeconds();

	// Will display time in 10:30(:23) format
	return hours.substr(-2) + ':' + minutes.substr(-2); //  + ':' + s
}

// 5 TODO: maak updateSun functie

// 4 Zet de zon op de juiste plaats en zorg ervoor dat dit iedere minuut gebeurt.
let placeSunAndStartMoving = (totalMinutes, sunrise) => {
	// In de functie moeten we eerst wat zaken ophalen en berekenen.
	// Haal het DOM element van onze zon op en van onze aantal minuten resterend deze dag.
	// Bepaal het aantal minuten dat de zon al op is.
	// Nu zetten we de zon op de initiële goede positie ( met de functie updateSun ). Bereken hiervoor hoeveel procent er van de totale zon-tijd al voorbij is.
	// We voegen ook de 'is-loaded' class toe aan de body-tag.
	// Vergeet niet om het resterende aantal minuten in te vullen.
	// Nu maken we een functie die de zon elke minuut zal updaten
	// Bekijk of de zon niet nog onder of reeds onder is
	// Anders kunnen we huidige waarden evalueren en de zon updaten via de updateSun functie.
	// PS.: vergeet weer niet om het resterend aantal minuten te updaten en verhoog het aantal verstreken minuten.
};

// 3 Met de data van de API kunnen we de app opvullen
let showResult = queryResponse => {

	// We gaan eerst een paar onderdelen opvullen
	// Zorg dat de juiste locatie weergegeven wordt, volgens wat je uit de API terug krijgt.
	// Toon ook de juiste tijd voor de opkomst van de zon en de zonsondergang.
	// Hier gaan we een functie oproepen die de zon een bepaalde positie kan geven en dit kan updaten.
	// Geef deze functie de periode tussen sunrise en sunset mee en het tijdstip van sunrise.
};

// 2 Aan de hand van een longitude en latitude gaan we de yahoo wheater API ophalen.
let getAPI = (endpoint) => {
	fetch
		(endpoint)
		.then((r) => r.json())
		.then((data) => {
			console.log(data)
		});
	// Eerst bouwen we onze url op
	// Met de fetch API proberen we de data op te halen.
	// Als dat gelukt is, gaan we naar onze showResult functie.
};
const setDOMElements = () => {
	console.log("test");
	SunriseElement = document.querySelector('.js-sunrise');
	SunsetElement = document.querySelector('.js-sunset');
	LocationElement = document.querySelector('.js-location');
	SunElement = document.querySelector('.js-sun');
	TimeLeftElement = document.querySelector('.js-time-left');

	if (!SunriseElement || !SunsetElement || !LocationElement) {
		throw new Error('DOM element not found');
	}
}

const updateTimeAndTimeLeft = (city) => {
	const now = new Date();
	const timeLeft = city.sunset - now.getTime() / 1000;
	const timeLeftElement = document.querySelector('.js-time-left');
	timeLeftElement.innertext = `${Math.round(timeLeft / 60)} minutes left`;
}


const makeReadableTime = (timestamp) => {
	return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const setLocationdata = (city) => {
	console.log("test");
	SunriseElement.innertext = makeReadableTime(city.sunrise);
	SunsetElement.innertext = makeReadableTime(city.sunset);
	LocationElement.innertext = `${city.name}, ${city.country}`;
}

const getData = (endpoint) => {
	return fetch(endpoint)
		.then((r) => r.json())
		.catch((error) => { console.log(error) });
}

document.addEventListener('DOMContentLoaded', async function () {
	// 1 We will query the API with longitude and latitude.
	// getAPI(50.8027841, 3.2097454)
	let lat = 50.8934;
	let lon = 3.3365;
	const endpoint = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a733c6d9a85be2c82a95d193c5365dbd&units=metric&lang=nl&cnt=1`
	const { city } = await getData(endpoint);
	console.log(city);
	setLocationdata(city);
	updateTimeAndTimeLeft(city);

});
