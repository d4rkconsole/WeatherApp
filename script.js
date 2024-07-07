const api_key = `427951661e0d78319d54e11e3c8dcc0e`
const url =  `https://api.openweathermap.org/data/2.5/weather?units=metric`

const input=document.querySelector("#city-input")
const search=document.querySelector("#searchbutton")

// selecting all those elements which i need  to Change 
const temperature = document.querySelector("#temp")
const cityName = document.querySelector("#city")
const humidity = document.querySelector("#humidity")
const windSpeed = document.querySelector("#wind")
const icon = document.querySelector("#weather-image")

const errordiv = document.querySelector(".error")

async function FetchWeather(input) {
    try {
        const response = await fetch(url + `&q=${input.value}` + `&appid=${api_key}`)
        const data  = await response.json()

        if(response.status === 404) 
        {
            errordiv.style.display = "block";
            document.querySelector(".card-body").style.display = "none";

        } else 
        {
            temperature.innerHTML = Math.round(`${data.main.temp}`) + `°C`
            cityName.innerHTML = `${data.name}` 
            humidity.innerHTML = `${data.main.humidity}` + `%`
            windSpeed.innerHTML = `${data.wind.speed}` + `km/h`

            if(data.weather[0].main === "Clouds") {
                icon.src = "Images/clouds.png";
            } 

            if(data.weather[0].main === "Clear") {
                icon.src = "Images/clear.png";
            }

            if(data.weather[0].main === "Drizzle") {
                icon.src = "Images/drizzle.png";
            }

            if(data.weather[0].main === "Rain") {
                icon.src =  "Images/rain.png";
            }
            
            if(data.weather[0].main === "Snow") {
                icon.src = "Images/snow.png";
            }
    
            if(data.weather[0].main === "Mist") {
                icon.src = "Images/mist.png";
            } 
            document.querySelector(".card-body").style.display = "block";
            errordiv.style.display = "none";

        }

    } catch(error) 
    {
        console.log("Error Occured ", error)
    }
}

search.addEventListener("click", () => {
    FetchWeather(input)
})










