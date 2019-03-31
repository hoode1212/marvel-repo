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
      `
}