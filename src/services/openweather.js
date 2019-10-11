function api() {
  const apiKey = process.env.OPEN_WEATHER_API_KEY;
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const defaultParams = { appid: apiKey };

  return {
    getCityById: async (cityId) => {
      if (!cityId) return null;

      const url = new URL(baseUrl);
      const params = { ...defaultParams, id: cityId };
      url.search = new URLSearchParams(params);

      try {
        const response = await fetch(url);
        const { name, sys: { country }, main: { temp, pressure, humidity } } = await response.json();
        return { id: cityId, name, country, temperature: temp, pressure, humidity };
      } catch (e) {
        return null;
      }
    },
  };
}

export default api;
