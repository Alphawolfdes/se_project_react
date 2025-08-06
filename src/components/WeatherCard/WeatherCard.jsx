import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  if (!weatherData || !weatherData.temp || weatherData.temp.F === undefined) {
    return null; // or a loading/error message
  }

  let weatherOptionUrl = ""; // Make sure this is declared at the top

  const filteredWeatherOption = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  if (filteredWeatherOption.length === 0) {
    const defaultWeatherKey = weatherData.isDay ? "day" : "night";
    const defaultWeatherOption = defaultWeatherOptions[defaultWeatherKey];
    weatherOptionUrl = defaultWeatherOption?.url || "";
  } else {
    weatherOptionUrl = filteredWeatherOption[0]?.url || "";
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      {weatherOptionUrl ? (
        <img
          src={weatherOptionUrl}
          alt={weatherData.condition}
          className="weather-card__image"
        />
      ) : (
        <div className="weather-card__image--placeholder">No image</div>
      )}
    </section>
  );
}

export default WeatherCard;
