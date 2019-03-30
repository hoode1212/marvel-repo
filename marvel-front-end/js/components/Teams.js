export default function Teams(teams){
    return `
    <ul id="teams" class = "grid-list">
    ${teams.map(team => {
        return `
        <li id="teams" class ="grid-list--item">
        <div class = grid-item-container">
        <img class = "grid-image btn-team" src="${team.teamImage}" alt= "Team Image">
        <h3 class = "item-name">${team.teamName}</h3>
        </div>
            
        </li>


        `

    }
    )
}`
}
