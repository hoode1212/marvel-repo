import Powers from './Powers'

export default function Hero(hero) {
    return `
        <h3 class="hero__heroName title">Hero: ${hero.heroName}</h3>
        <image src="${hero.heroImage}">
        <p class="hero__heroRating">Rating: ${hero.heroRating}/5</p>
<ul class="powers">
    <h3>Powers</h3>
    <li class="power">${Powers(hero.powers)}</li>
</ul>

    <section class="add__power">
        <input type="text" class="add__powerName" placeholder="Power Name">
        <input type="text" class="add__description" placeholder="Description">
        <input type="text" class="add__powerRating" placeholder="Power Rating">
        <button class="add__power__button" id="${hero.heroId}">Add Power</button>
    </section>
            `
}
