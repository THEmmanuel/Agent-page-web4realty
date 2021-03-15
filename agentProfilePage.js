import {
    agentProfile,
    properties,
} from "./mockAPI.js";


const renderAgentProfile = () => {
    const agentProfilePicture = document.querySelector('.agent-profile-picture');
    const agentName = document.querySelector('.agent-profile-name');
    const agentBio = document.querySelector('.agent-bio');
    const agentRating = document.querySelector('.agent-rating');
    const agentMarketsList = document.querySelector('.agent-markets-list')

    agentName.innerHTML = `${agentProfile.first_name + " " + agentProfile.last_name}`;
    agentRating.innerHTML = agentProfile.rating;
    agentBio.innerHTML = agentProfile.bio;
    agentProfilePicture.src = agentProfile.profile_picture;

    const renderAgentMarkets = () => {
        const agentMarketRows = agentProfile.markets.map(market => {
            return (`<li class = "agent-market">
                <span>
                    ${agentProfile.markets[0]}
                </span>
            </li>`)
        })
        
        const agentMarketContent = `<ul class = "agent-markets-list">${agentMarketRows.join("")}</ul>`;
        agentMarketsList.innerHTML = agentMarketContent;
    }

    renderAgentMarkets();
}

const renderAgentProperties = () => {
    const propertiesList = document.querySelector('.properties');

    const propertyRows = properties.map(property => {
        return (`<li>
        <div class="property-card">
        <div>
        <span class="property-status">${property.status}</span>
        <img class="property-image"
            src=${property.property_image}>
        </div>
    
            <div class="property-information-wrapper">
                <div class="property-information">
                    <span class="property-price">$${property.price}</span>
                    <span class="property-address">${property.address}</span>
                    <span class="property-market">${property.market}</span>
                </div>
    
                <button class="property-share-btn">
                </button>

            </div>

            <div class="property-additional-information">

            <div class="property-icons-wrapper">
            <div>
            <img src="https://img.icons8.com/ios/16/808080/bedroom.png"              class="property-information-icon" />
            <span>2</span>
        </div>

        <div>

        <img src="https://img.icons8.com/ios/16/808080/toilet-bowl.png"                class="property-information-icon" />
            <span>2</span>
        </div>

        <div>
        <img src="https://img.icons8.com/ios/16/808080/garage.png"
                class="property-information-icon" />
            <span>2</span>
        </div>
            <span class = "property-type">Condo</span>
        </div>
        
            </div>

            <span class="property-sold-date">Sold by private sale on</span>
        </div>
    </li>`)
    })

    const propertiesContent = `<ul class = "property-list">${propertyRows.join("")}</ul>`;
    propertiesList.innerHTML = propertiesContent;
}

renderAgentProperties();
renderAgentProfile();