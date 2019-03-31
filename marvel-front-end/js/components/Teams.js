import Heroes from './Heroes'

export default function Teams(teams){
    return `
    <ul>
    ${teams.map(team => {
        return `
        <li>
        <img src="${team.teamImage}" alt= "Team Image">
        <h3>${team.teamName}</h3>
        <h3>${team.teamRating}</h3>
        <h3>${team.heroes}</h3>
        </li>
        `
    }
    )
}
</ul>
`
}
