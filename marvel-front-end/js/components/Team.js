import Heroes from './Heroes'

export default function Team(team) {
    return `
    <div class="team__container">
        <h3 class="team__teamName title">Team: ${team.teamName}</h3>
        <img src="${team.teamImage}" class="team__teamImage">

        <ul class="heroes">
            <li class="hero">
            ${Heroes(team.heroes)}
            </li>
        </ul> 
        
        <section class="add__hero">
            <input type="text" class="add__heroName" placeholder="Hero Name">
            <input type="text" class="add__heroImage" placeholder="Image URL">
            <input type="text" class="add__heroRating" placeholder="Hero Rating">
            <button class="add__hero__button" id="${team.teamId}">Add Hero</button>
        </section>
        
    </div>
            `
}       