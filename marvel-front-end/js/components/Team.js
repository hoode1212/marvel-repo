import Heroes from './Heroes'

export default function Team(team) {
    return `
    <div class="team__container">
        <h3 class="team__teamName title">Team: ${team.teamName}</h3>
        <img src="${team.teamImage}" class="team__teamImage">
 
        <ul class="heroes">
            <li class="hero">
            ${team.heroes}
            </li>
        </ul>        
    </div>
            `
}       