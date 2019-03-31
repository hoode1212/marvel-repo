import Heroes from './Heroes'

export default function Teams(teams){
    return `
    <ul>
    ${teams.map(team => {
        return `
        <li>
        <img src="${team.teamImage}" alt= "Team Image">
        <h3>${team.teamName}</h3>
        </li>
        `
    }
    )
}
</ul>
`
}
