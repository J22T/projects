async function getHotelData() {
    try {
        const response = await fetch('../hotel.json')
        return await response.json() //return the JSON object
    } catch (error) {
        console.error(error)
    }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

    // store in a variable document.querySelectorAll("a")
    // use that variable to loop over each element and addEventListener to each that is suggested for use

    document.querySelector("#marriott").addEventListener('click'. hotel.Info)

    function hotelInfo(event) {
        let hotelChoice = hotelData.hotels.find(hotel => {
            return event.target.id === hotel.name.toLowerCase()
        })
        console.log(hotelChoice)

        document.querySelector("#hotelName").textContent = `${hotelChoice.name} Hotel`
    }