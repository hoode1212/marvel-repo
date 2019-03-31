import Powers from './Powers'

export default function Heroes(heroes) {
    return `
        <ul class="heroes">
            ${heroes.map(hero => {
                return `
                <li class="hero">
                    <h4 class="hero__heroName" id="${hero.heroId}">${hero.heroName}</h4>
                    
                    </li>
                    `
                }).join('')}
        </ul>
    `
}