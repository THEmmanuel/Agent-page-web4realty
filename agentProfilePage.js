import properties from "./mockAPI.js";
const propertiesList = document.querySelector('.properties')


const renderAgentProperties = () => {
    const propertyRows = properties.map(property => {
        return `<li>
            <div class = "card">
                name: ${property.name}
            </div>
        </li>`
    })

    const propertiesContent = `<ul>${propertyRows.join()}</ul>`;
    propertiesList.innerHTML = propertiesContent;
}

renderAgentProperties();