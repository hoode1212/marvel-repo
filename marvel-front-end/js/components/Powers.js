
export default function Powers(powers) {
    return `
        <ol id="songs">
            ${powers.map(power => {
                return `
                    <li class="song">
                        <h3 class="song__title">${power.powerName}</h3>
                            </li>
                `;
            }).join('')}
        </ol>
        `}   