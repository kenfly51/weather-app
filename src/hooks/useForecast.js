import { useState } from "react";
import axios from "axios";
import { getSearchLocation, getForecast } from "../helpers/paths";
import { transformWeatherItem } from "../helpers/transformers";

export const useForecast = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const execute = async (searchText) => {
    setLoading(true);
    const url = getSearchLocation(searchText);
    try {
      const response = await axios(url);
      const { data } = response;
      if (data && data.length === 1) {
        const foreCastUrl = getForecast(data[0].woeid);
        const foreCast = await axios(foreCastUrl);
        const transformedData = foreCast.data.consolidated_weather.map(
          transformWeatherItem
        );
        return setResult(transformedData);
      }
      setResult([]);
    } catch {
      setResult([]);
    } finally {
      setLoading(false);
    }
  };

  return [{ loading, result }, execute];
};
