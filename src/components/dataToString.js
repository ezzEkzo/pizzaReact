export default function dataToQueryString(data) {
  let dataKey;
  let queryString = '?';
  for (dataKey in data) {
    if (data.hasOwnProperty(dataKey) && data[dataKey] !== undefined && data[dataKey] !== '') {
      if (Array.isArray(data[dataKey])) {
        for (let i = 0; i < data[dataKey].length; i++) {
          queryString += `${dataKey}[${i}]=${data[dataKey][i]}&`;
        }
      } else {
        queryString += `${dataKey}=${data[dataKey]}&`;
      }
    }
  }
  return queryString.slice(0, queryString.length - 1);
}
