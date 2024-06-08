import './CityWeather.css'
import { Icon } from 'react-icons-kit'
import { droplet } from 'react-icons-kit/icomoon/droplet'
import { thermometer1 } from 'react-icons-kit/fa/thermometer1'

export default function CityWeather({ weather, searchCity, inputRef }) {

    return (
        <>
            <div className={ weather.temp > 28 ? 'weather-container class-hot' : weather.temp < 10 ? 'weather-container class-cold' : 'weather-container' }>
                <h2>Weather App</h2>
                <input type="text" id="weather-search" className="weather-input" placeholder="Enter city..." onKeyUp={searchCity} ref={inputRef} />
                <div className="wheather-info">
                    <div className="weather-info-city" id="weather-location">
                        {weather.city}
                    </div>
                    <div className="weather-info-temp" id="weather-temp">
                        {weather.temp}°C
                    </div>
                    <div className="weather-details">
                        <div className="feelsLike" title='Feels Like'>
                            <div className="icon-cont">
                                <Icon icon={ thermometer1 } size={'50%'} />
                                <span>{weather.feelsLike}°C</span>
                            </div>
                        </div>
                        <div className="humidity" title='Humidity'>
                            <div className="icon-cont">
                                    <Icon icon={ droplet } size={'50%'} />
                                    <span>{weather.humidity}%</span>
                            </div>
                        </div>
                    </div>
                    <div className="weather-icon">
                        <img src={weather.icon} alt="Temperature Icon" />
                    </div>
                    <div className="weather-datetime">
                        <span>Register:</span> {weather.register}
                    </div>
                </div>
            </div>
        </>
        
    )

}