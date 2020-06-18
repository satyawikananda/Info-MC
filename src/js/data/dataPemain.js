import { BASE_URL, TOKEN } from '../const';
import { pemain } from '../components/pemain';

export default async function getPemain() {
  const url = new URL(`${BASE_URL}teams/65`);
  await pemain(url, TOKEN);
}
