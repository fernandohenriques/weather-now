const api = function () {
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
        return await response.json();
      } catch (e) {
        return null;
      }
    },
  };
};

export default api;
