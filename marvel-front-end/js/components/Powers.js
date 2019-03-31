export default function Powers(powers) {
    return `
        <ol id="powers">
            ${powers.map(powers => {
                return `
                    <li class="powers">
                        <h3 class="powers__title">${powers.powersName}<span><small> (${powers.description})</small></span></h3>
                    </li>
                `;
            }).join('')}
        </ol>
        
       
        
        `}   