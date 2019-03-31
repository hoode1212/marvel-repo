export default function Hero(hero) {
    return `
      <ul id="albums" class="grid-list">
        ${hero.map(hero => {
        return `
                <li id="hero" class="hero grid-list--item">
                  <div class="grid-item-container">
                    <img class="grid-image btn-hero" src="${hero.heroImage}" alt="Hero Image">
                    <h3  class="item-name">${hero.heroName}</h3>
                    // <img class="grid-image slide" src="heroArt">
                  </div>
                  <div class="hidden modal hero-modal">
                  <div class="hero-content">
                    <div class="modal-content--header">
                      <img class="model--header-image" src="${hero.heroImage}" alt="Hero Image">
                      <h2>${hero.heroName}</h2>
                      <ul>
                        <li>Hero Rating: ${hero.heroRating}/10</li>
                        <li>Powers: ${hero.power.rating}</li>
                      </ul>
                    </div>
                    <div class="modal-content--body powers">${Powers(hero.powers)}
                          <section class="add-powers">
                          <input class= "add-powers__powersType" type = "text" placeholder= "Powers type">
                          <input class= "add-powers__hero hidden" type = "text" placeholder= "Hero Name" value= "${hero.heroName}">
                          <input class= "add-powers__description" type = "text" placeholder= "Powers Description">
                          <input class= "add-powers__powersRating" type = "text" placeholder= "Powers Rating">
                          
                           
                         
                          <button class="add-song__submit">Submit</button>
                          </section>
                    
                    
                    
                    
                    
                    
                    </div>
                    
                  </div>
                </div>
         
                
                </li>
            `;
    }).join('')}
    </ul>
  `;
}