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
            <div class = "property-card">
            <img src="https://images.ratemyagent.com/ratemyagent/image/upload/q_auto:eco,f_auto,w_900,h_600,c_limit/cdn-usa/listing/329ec365-b4d3-43a2-83d0-d51624b72ac0.png" alt="">

            <span>${property.price}</span>
            <span>${property.address}</span>
            <span>${property.status}</span>
            <span>solld by ...</span>
            
    
            </div>
        </li>`
    })

    const propertiesContent = `<ul class = "property-list">${propertyRows.join()}</ul>`;
    propertiesList.innerHTML = propertiesContent;
}

renderAgentProperties();
renderAgentProfile();