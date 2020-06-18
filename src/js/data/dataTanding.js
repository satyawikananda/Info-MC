import { BASE_URL, TOKEN } from '../const';
import { status } from '../helpers/status';
import { tanding } from '../components/tanding';
export default async function getTanding() {
  const url = new URL(`${BASE_URL}teams/65/matches`),
    params = { status: 'SCHEDULED' };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );
  await fetch(url, {
    headers: {
      'X-Auth-Token': TOKEN,
    },
  })
    .then(status)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let tandingHtml = '';

      data.matches.forEach((res) => {
        tandingHtml += tanding(res);
      });
      return (document.getElementById(
        'data-tanding',
      ).innerHTML = tandingHtml);
    })
    .catch((error) => {
      console.log(`Error: ${new Error(error)}`);
    });
}
