import Powers from './Powers'

export default function Heroes(heroes) {
    return `
      <ul id="albums" class="grid-list">
        ${heroes.map(hero => {
        return `
                <li id="album" class="album grid-list--item">
                  <div class="grid-item-container">
                    <img class="grid-image btn-album" src="${hero.heroImage}" alt="Album Cover">
                    <h3  class="item-name">${hero.heroName}</h3>
                    <img class="grid-image slide" src="../images/Record_Album_clip_art.svg">
                  </div>


                  <div class="hidden modal album-modal">
                  <div class="modal-content">
                    <div class="modal-content--header">
                      <img class="model--header-image" src="${hero.heroImage}" alt="Album Cover">
                      <h2>${hero.heroName}</h2>
                      <ul>
                        <li>Artist Rating: ${hero.heroRating}/10</li>
                        <li>Songs: ${hero.powers.length}</li>
                        <li class="albumCommentOn">Album Comments</li>
                        <li class="albumCommentOff hidden">Close Album Comments</li>
                      </ul>
                    </div>
                    <div class="modal-content--body songs">${Powers(hero.powers)}</div>
                  </div>
                </div>
         
                
                </li>
            `;
    }).join('')}
    </ul>
  `;
}