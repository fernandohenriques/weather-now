export default (kelvin) => Number((kelvin - 273.15).toFixed(2).replace(/[.,]00$/, ''));
