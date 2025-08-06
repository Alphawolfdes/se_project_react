import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredWeatherOption = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  if (filteredWeatherOption.length === 0) {
    // Fallback to default weather options
    const defaultWeatherKey = weatherData.isDay ? "day" : "night";
    const defaultWeatherOption = defaultWeatherOptions[defaultWeatherKey];
    weatherOptionUrl = defaultWeatherOption.url;
  } else {
    weatherOptionUrl = filteredWeatherOption[0]?.url;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img
        src={weatherOptionUrl[0]?.url}
        alt={weatherData.condition}
        className="weather-card__image"
      />
    </section>
  );
}
export default WeatherCard;
