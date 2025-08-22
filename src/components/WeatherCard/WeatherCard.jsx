import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  if (!weatherData || !weatherData.temp || weatherData.temp.F === undefined) {
    return null; // or a loading/error message
  }

  let weatherOptionUrl = ""; // Make sure this is declared at the top

  const filteredWeatherOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  if (filteredWeatherOptions.length === 0) {
    const defaultWeatherKey = weatherData.isDay ? "day" : "night";
    const defaultWeatherOption = defaultWeatherOptions[defaultWeatherKey];
    weatherOptionUrl = defaultWeatherOption?.url || "";
  } else {
    weatherOptionUrl = filteredWeatherOptions[0]?.url || "";
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}{" "}
        &deg; {currentTemperatureUnit}
      </p>
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
