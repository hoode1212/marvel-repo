import Heroes from './Heroes'



export default function Teams(teams){
    return `
    <ul id="artists" class="grid-list">
      ${teams.map(team => {
      return `
              <li id="artist" class="grid-list--item">
                <div class="grid-item-container">
                  <img class="grid-image btn-artist" src="${team.teamImage}" alt="Artist Image">
                  <h3 class="item-name">${team.teamName}</h3>
                </div>

                <div id ="artist-modal" class="hidden modal">
                    <div class="modal-content">
                      <div class="modal-content--header">
                        <img class="model--header-image" src="${team.teamImage}" alt="Artist Image">
                        <h2>${team.teamName}</h2>
                        <ul>
                          <li>Artist Rating: ${team.artistRating}/10</li>
                          <li>Albums: ${team.heroes.length}</li>
                        </ul>
                      </div>
                      <div class="modal-content--body albums">${Heroes(Team.heroes)}</div>
                      <div class="modal-content--body comments hidden">${ArtistComments(artist.artistComments)}</div>
                    </div>
                  </div>
                </li>
          `;
  })}
</ul>`;
}
