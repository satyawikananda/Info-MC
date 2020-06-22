import convertDate from '../helpers/convertDate';

export const tanding = (res) => {
  return `
    <div class="col l6 m12 s12">
      <div class="card-panel z-depth-2 large indigo darken1">
        <center>
          <img src="${
            res.competition.area.ensignUrl === null
              ? 'https://upload.wikimedia.org/wikipedia/id/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png'
              : res.competition.area.ensignUrl
          }" alt="ensign-logo" class="circle" style="width: 10vh; height: 10vh; object-fit: cover;">
        </center>
        <p class="center flow-text white-text">${
          res.competition.name
        } matchday: ${res.matchday}</p>
        <h5 class="center white-text">${res.awayTeam.name}</h5>
        <h6 class="center white-text">VS</h6>
        <h5 class="center white-text">${res.homeTeam.name}</h5>
        <div class="divider"></div>
        <h6 class="center white-text">Tanggal pertandingan: ${convertDate(
          new Date(res.utcDate),
        )}</h6>
        <center>
          <a class="waves-effect waves-light btn indigo lighten-2 pin_jadwal" data-id="${
            res.id
          }" data-logo="${
    res.competition.area.ensignUrl === null
      ? 'https://upload.wikimedia.org/wikipedia/id/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png'
      : res.competition.area.ensignUrl
  }" data-kompetisi="${res.competition.name}" data-matchday="${
    res.matchday
  }" data-awayteam="${res.awayTeam.name}" data-hometeam="${
    res.homeTeam.name
  }" data-tgl="${res.utcDate}"><i id="${
    res.id
  }" class="material-icons right">favorite_border</i>Pin ini</a>
        </center>
      </div>
    </div>
    `;
};
