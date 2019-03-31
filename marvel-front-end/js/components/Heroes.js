import Powers from './Powers'

export default function Heroes(heroes) {
    return `
        <ul class="heroes">
            ${heroes.map(hero => {
                return `
                    <h4 class="hero__heroName" id="${hero.heroId}">${hero.heroName}</h4>
                    `
                }).join('')}
        </ul>
    `
}