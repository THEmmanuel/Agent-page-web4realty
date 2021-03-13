import {
    properties
} from "./mockAPI.js";

const propertiesList = document.querySelector('.properties')


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