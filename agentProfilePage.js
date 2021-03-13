import {
    agentProfile, properties, 
} from "./mockAPI.js";

const propertiesList = document.querySelector('.properties');
const agentProfilePicture = document.querySelector('.agent-profle-picture');
const agentName = document.querySelector('.agent-profile-name');


const renderAgentProfile = () => {
    // agentProfilePicture.src = agentProfile.profile_picture;
    agentName.innerHTML = agentProfile.name;
}  

const renderAgentProperties = () => {
    const propertyRows = properties.map(property => {
        return `<li>
            <div class = "propert-card">
                name: ${property.name}
            </div>
        </li>`
    })

    const propertiesContent = `<ul class = "property-list">${propertyRows.join()}</ul>`;
    propertiesList.innerHTML = propertiesContent;
}

renderAgentProperties();
renderAgentProfile();