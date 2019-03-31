import Powers from './Powers'

export default function Hero(hero) {
    return `
        <h3 class="hero__heroName title">Hero: ${hero.heroName}</h3>
        <image src="${hero.heroImage}">
        <p class="hero__heroRatings">Rating: ${hero.heroRating}/5</p>
        
        <ul class="powers">
            <li class="power">
            ${Powers(hero.powers)}
            </li>
        </ul>        
            `
}