const elForm =  document.querySelector(".form")
const elInput =  document.querySelector(".locationInput")
const elWeather = document.querySelector(".weather")






elForm.addEventListener("submit", function(e){
    e.preventDefault()

    const location = elInput.value

    getCountryData(location)
})


const getCountryData = async(location) => {
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)


    if(request.status > 400){
        alert("Qayerdadir xatolik bor shuni tekshirib ko'ring!")
    } else {

        const data = await request.json()
        console.log(data);
        render(data)
    }

}


    function render(data){

        const html = `
        <div class="answer">
        <h3 class="country-name">${data.name}</h3>
        <p class="country-temp">${data.main.temp} ℃</p>
        <p>${data.wind.speed} km/h</p>
        </div>

        `
        elWeather.innerHTML = null
        elWeather.insertAdjacentHTML("beforeend", html)
    }
