import {
    agentProfile,
    properties,
} from "./mockAPI.js";


const renderAgentProfile = () => {
    const agentProfilePicture = document.querySelector('.agent-profle-picture');
    const agentName = document.querySelector('.agent-profile-name');
    const agentBio = document.querySelector('.agent-bio');
    const agentRating = document.querySelector('.agent-rating');

    // agentProfilePicture.src = agentProfile.profile_picture;
    agentName.innerHTML = agentProfile.name;
    agentRating.innerHTML = agentProfile.rating;
    agentBio.innerHTML = agentProfile.bio;
}

const renderAgentProperties = () => {
    const propertiesList = document.querySelector('.properties');

    const propertyRows = properties.map(property => {
        return `<li>
        <div class="property-card">
            <span class="property-status">${property.status}</span>
            <img class="property-image"
                src="https://images.ratemyagent.com/ratemyagent/image/upload/q_auto:eco,f_auto,w_900,h_600,c_limit/cdn-usa/listing/329ec365-b4d3-43a2-83d0-d51624b72ac0.png">
    
            <div class="property-information-wrapper">
                <div class="property-information">
                    <span class="property-price">$${property.price}</span>
                    <span class="property-address">${property.address}</span>
                    <span class="property-market">${property.market}</span>
                </div>
    
                <button class="property-share-btn">
                    share
                </button>

            </div>

            <div class="property-additional-information">

            <div class="property-icons-wrapper">
            <div>
            <img src="https://img.icons8.com/android/16/000000/bedroom.png"
                class="property-information-icon" />
            <span>2</span>
        </div>

        <div>
            <img src="https://img.icons8.com/android/16/000000/bedroom.png"
                class="property-information-icon" />
            <span>2</span>
        </div>

        <div>
            <img src="https://img.icons8.com/android/16/000000/bedroom.png"
                class="property-information-icon" />
            <span>2</span>
        </div>
            | 
            <span>Condo</span>
        </div>
        
            </div>

            <span>solld by ...</span>
        </div>
    </li>`
    })

    const propertiesContent = `<ul class = "property-list">${propertyRows.join()}</ul>`;
    propertiesList.innerHTML = propertiesContent;
}

renderAgentProperties();
renderAgentProfile();