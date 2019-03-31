export default function Powers(powers) {
    return `
        <ul class="powers">
            ${powers.map(power => {
        return `
                    <li class="power">
                        <h4 class="power__powerName" id="${power.powerId}">${power.powerName}</h4>
                    </li>
                `
    }).join('')}
        </ul>
    `
}