import { Grid, html } from 'gridjs';
import 'gridjs/dist/theme/mermaid.css';

export const pemain = (url, token) => {
  const dataTable = new Grid({
    columns: [
      'Nama pemain',
      'Posisi',
      'Kewarganegaraan',
      'Tempat lahir',
      'Tanggal lahir',
      'Status',
      'Aksi',
    ],
    pagination: {
      limit: 10,
    },
    search: true,
    sort: true,
    server: {
      url: url,
      headers: {
        'X-Auth-Token': token,
      },
      then: (data) =>
        data.squad.map((res) => [
          res.name,
          res.position === null ? 'N/a' : res.position,
          res.nationality,
          res.countryOfBirth,
          res.dateOfBirth,
          res.role,
          html(
            `<center><a class="waves-effect waves-light btn indigo lighten-2"><i class="material-icons right">favorite_border</i>Pin ini</a></center>`,
          ),
        ]),
    },
  }).render(document.getElementById('data-pemain'));

  return dataTable;
};
