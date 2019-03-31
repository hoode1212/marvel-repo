import Heroes from './Heroes'
import '../../css/teams.css'

export default function Teams(teams) {
   return `
       <ul class="teams">
           ${teams.map(team => {
               return `
                   <li class="team">
                       <h3 class="team__teamName" id="${team.teamId}">${team.teamName}</h3>
                   </li>
                   `
           }).join('')}
       </ul>
       <section class="add__team">
           <input type="text" class="add__teamName" placeholder="Team Name">
           <input type="text" class="add__teamImage" placeholder="Image URL">
           <button class="add__team__button">Add Team</button>
       </section>
      `
}