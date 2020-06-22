import convertDate from '../helpers/convertDate';

export const getPinTanding = (res) => {
  return `
    <div class="col l6 m12 s12">
      <div class="card-panel z-depth-2 large indigo darken1">
        <center>
          <img src="${
            res.ensignUrl
          }" alt="ensign-logo" class="circle" style="width: 10vh; height: 10vh; object-fit: cover;">
        </center>
        <p class="center flow-text white-text">${
          res.kompetisi
        } matchday: ${res.matchday}</p>
        <h5 class="center white-text">${res.away_team}</h5>
        <h6 class="center white-text">VS</h6>
        <h5 class="center white-text">${res.home_team}</h5>
        <div class="divider"></div>
        <h6 class="center white-text">Tanggal pertandingan: ${convertDate(
          new Date(res.tgl_tanding),
        )}</h6>
        <center>
          <a class="waves-effect waves-light btn indigo lighten-2 hps-jadwal" data-id="${
            res.id
          }"><i id="${
    res.id
  }" class="material-icons right">delete</i>Hapus</a>
        </center>
      </div>
    </div>
    `;
};
