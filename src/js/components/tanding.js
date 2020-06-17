import convertDate from '../helpers/convertDate';

export const tanding = (res) => {
  return `
    <div class="col l6 m12 s12">
        <div class="card-panel indigo darken1">
            <center>
                <img src="${
                  res.competition.area.ensignUrl
                }" alt="ensign-logo" class="circle" style="width: 10vh; height: 10vh; object-fit: cover;">
            </center>
            <p class="center flow-text white-text">Premier League matchday: ${
              res.matchday
            }</p>
            <h5 class="center white-text">${res.awayTeam.name}</h5>
            <h6 class="center white-text">VS</h6>
            <h5 class="center white-text">${res.homeTeam.name}</h5>
            <div class="divider"></div>
            <h6 class="center white-text">Tanggal pertandingan: ${convertDate(
              new Date(res.utcDate),
            )}</h6>
            <center>
                <a class="waves-effect waves-light btn indigo lighten-2"><i class="material-icons right">favorite_border</i>Pin ini</a>
            </center>
        </div>
    </div>
    `;
};
