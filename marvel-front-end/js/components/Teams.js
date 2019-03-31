import Heroes from './Heroes'
import '../../css/teams.css'

export default function Teams(teams) {
    console.log(teams)
   return `
       <ul class="teams">
           ${teams.map(team => {
               console.log(team.heroes)
               return `
                   <li class="team">
                       <h3 class="team__teamName" id="${team.teamId}">${team.teamName}</h3>
                       ${team.heroes}
                   </li>
                   `
           }).join('')}
       </ul>
      `
}