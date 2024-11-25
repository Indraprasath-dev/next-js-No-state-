const regions = ["Africa", "Asia", "Europe", "NorthAmerica", "NotDefined", "Oceania", "SouthAmerica"]
const countries = ["Argentina", "Armenia", "Australia", "Belarus", "Belgium", "Brazil", "Cambodia", "Cameroon", "Canada", "Chile"]
const engagementTypes = ["OfficeHours", "OpenToCollaborate", "Friends", "NewMember"]

export const fetchData = async (pageNumber: Number) => {
    try {
        //const res = await fetch('https://stag-protocol-labs-network-api.herokuapp.com/v1/members?pagination=false') 
        const res = await fetch(`https://stag-protocol-labs-network-api.herokuapp.com/v1/members?pagination=true&page=${pageNumber}&limit=60`)
        if (!res.ok) {
            console.error(`Error: ${res.status} ${res.statusText}`)
        }
        const jsonData = await res.json()

        for (let i = 0; i < jsonData.length; i++) {
            jsonData[i].region = regions[i % regions.length]
            jsonData[i].country = countries[i % countries.length]
            jsonData[i].engagementType = engagementTypes[i % engagementTypes.length]
        }

        return jsonData
    } catch (error) {
        console.error('Error fetching members:', error)
        return []
    }
}
