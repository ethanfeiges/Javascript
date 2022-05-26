// Foursquare API Info
const foursquareKey = "fsq3h2xHyOHWdbU5k/VahnVeYsoBJgEYV44oxfv3iNPFviw=";
const url = "https://api.foursquare.com/v3/places/search?near=";

// OpenWeather Info
const openWeatherKey = "45869a3d24caa6a8d43c255277045e2a";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

// Page Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $placeDivs = [$("#place1"), $("#place2"), $("#place3"), $("#place4")];
const $weatherDiv = $("#weather1");
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: foursquareKey,
  },
};

const getPlaces = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10`;
  try {
    const response = await fetch(urlToFetch, options);

    if (response.ok) {
      // json response has context and results
      // we will only be using "results"
      const jsonResponse = await response.json();
      // geocodes, distance
      const places = jsonResponse.results;
      return places;
    }
  } catch (error) {
    console.log(error);
  }
};

// fetches forecast from city that user requests
const getForecast = async () => {
  const urlToFetch =
    weatherUrl + "?q=" + $input.val() + "&APPID=" + openWeatherKey;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

// Render functions
const renderPlaces = (places) => {
  // array of the divs in index.html
  $placeDivs.forEach(($place, index) => {
    // place is an object
    const place = places[index];
    // placeIcon has prefix and suffix fields
    const placeIcon = place.categories[0].icon;
    // bg_64 is required to fetch icons
    const placeImgSrc = placeIcon.prefix + "bg_64" + placeIcon.suffix;
    const placeContent = createPlaceHTML(
      place.name,
      place.location,
      placeImgSrc
    );

    $place.append(placeContent);
  });
  $destination.append(`<h2>${places[0].location.locality}</h2>`);
};

const renderForecast = (forecast) => {
  const weatherContent = createWeatherHTML(forecast);
  $weatherDiv.append(weatherContent);
};

// hooks up renderPlaces with the JSON data from getPlaces
const executeSearch = () => {
  $placeDivs.forEach((place) => place.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getPlaces().then((places) => renderPlaces(places));
  getForecast().then((forecast) => renderForecast(forecast));
  return false;
};

$submit.click(executeSearch);
