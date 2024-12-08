import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#051138"
      document.body.style.color = "white"
      let mainNav = document.querySelector(".mainNav")
      mainNav.style.backgroundColor = "#000000"
      mainNav.style.color= "#ffffff"
      let text = document.querySelector(".text")
      text.style.backgroundColor= "#051138"
      text.style.color= "#ffffff"
      let body1 = document.querySelector(".body1")
      body1.style.backgroundColor="#000000"

     let datas = document.querySelectorAll(".data")
     datas.forEach((data )=>{
     data.style.backgroundColor= "#051138"
     })

      let items = document.querySelectorAll(".item")
      items.forEach((item )=>{
      item.style.backgroundColor= "#000000"
         })

    }
    else if (mode === 'dark') {
      setMode("light")
      document.body.style.backgroundColor = "#cdefb9"
      document.body.style.color = "black"
      let mainNav = document.querySelector(".mainNav")
      mainNav.style.backgroundColor = "#0a9a00"
      mainNav.style.color= "#000000"
      let text = document.querySelector(".text")
      text.style.backgroundColor= "#56ff6c"
      text.style.color = "#000000"
      let body1 = document.querySelector(".body1")
      body1.style.backgroundColor="#a4ff42"

      let items = document.querySelectorAll(".item")
      items.forEach((item )=>{
      item.style.backgroundColor= "#a4ff42"
       })


     const datas = document.querySelectorAll(".data")
     datas.forEach((data )=>{
      data.style.backgroundColor= "#cdff97"
    })

    }
  }


  const [data, setData] = useState([])

 
  const handleSearch = () =>{
    let cityName = document.querySelector('.text').value
     console.log(cityName)

    // fetch(`YOUR API LINK HERE`)       ex:- fetch(`https://api.weatherapi.com/v1/current.json?key=6d6te64t6e6645646gr6&q=${cityName}`)     you can get your api from weatherapi.com

    .then(response => response.json())
    .then((data) => {
      console.log(data)
       setData([data.current.condition.icon,
                 data.current.temp_c,
                 data.current.condition.text,
                 data.location.name,
                 data.location.country,
                 data.current.cloud,
                 data.current.wind_kph,
                 data.current.humidity,
                 data.current.is_day,
                 data.current.windchill_c,
                 data.current.uv,
                 data.current.feelslike_c,
                 data.current.vis_km,
                 data.current.wind_dir ])
    })
    .catch((error) =>{
      alert("Error occured , City Not Found")
    })
  }
  


  return (
    <>
    
     <div className="mainNav">

        <div className="nav">
          <ul className="ul">
            <li>Weather App</li>
            <li> Home </li>
            <li>About </li>
           
            </ul>
        </div>

        <div className="form-check form-switch">
          <div className="search">
             <input type="text" className="text" placeholder="Enter city name" />
             <i className="fa-solid fa-magnifying-glass" id="search" onClick={handleSearch}></i>
          </div>
          <div className="mode">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" onClick={handleMode}>Mode</label>
          </div>  
        </div>

     </div>

     
      <div className="mainBody">

         <div className="body1">
            <div className="head">
                <div className="img"><img src={data[0]} alt="" /></div>
                <div className="temp"> {data[1]}<sup>°</sup>c</div>
                <div className="condition">{data[2]}</div>
            </div>

            <div className="main">
                 <div className="city">{data[3]}</div>
                 <div className="country">{data[4]}</div>
            </div>
        </div>
  
     <div className="body2">
        <div className="item" >Cloud status
           <div className="data">{data[5] <= 50 ? "less cloudy" : "more cloudy"}</div>
        </div>
        <div className="item">Wind speed
            <div className="data">{data[6] + "kph"}</div>
       </div>
        <div className="item">humidity
            <div className="data">{data[7]}</div>
        </div>
        <div className="item">Day or night
             <div className="data">{data[8] == 0 ? "Night" : "Day"}</div>
        </div>
       <div className="item">wind-chill
            <div className="data">{data[9] + "Cel"}</div>
       </div>
        <div className="item">uv-radiation
            <div className="data">{data[10] <= 5 ? "low" : "high"}</div>
        </div>
        <div className="item">Feels like
            <div className="data">{data[11] + "cel"}</div>
       </div>
       <div className="item">Visibility
           <div className="data">{data[12] + "km"}</div>
      </div>
      <div className="item">Wind direction
          <div className="data">{data[13]}</div>
      </div>
    </div>

  </div>
    
    </>
  )
}

export default App
