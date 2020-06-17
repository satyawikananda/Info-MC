import { BASE_URL } from '../const';
import { status } from '../helpers/status';
export default async function getTanding() {
  const url = new URL(`${BASE_URL}teams/65/matches`),
    params = { status: 'SCHEDULED' };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );
  await fetch(url, {
    headers: {
      'X-Auth-Token': 'b015cf4cb4054df0b752aad38fc24cb8',
    },
  })
    .then(status)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
