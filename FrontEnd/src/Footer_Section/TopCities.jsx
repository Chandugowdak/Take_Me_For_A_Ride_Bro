import React,{useState,useEffect} from "react";
import axios from 'axios';
import "./TopCities.css";


const TopCities = () => {
    const [cities, setCities] = useState([]);
    
    const fetach_cities = async()=>{
        try{
            const resp = await axios.get('http://localhost:3000/api/static/city');
            setCities(resp.data.data);
            
        }
        catch(err){
            console.log('Server Error ',err.message);
        }
    }
    useEffect(()=>{
        fetach_cities();
    },[])
  return (
    <div className="top-cities container-fluid py-5">
      <div className="container text-center mb-5">
        <h2 className="cities-title">
          Top <span>Cities</span> we serve in India
        </h2>
        <p className="cities-subtitle">
          Unlock the Essence of India’s Vibrant Cities with Us! Discover unmatched self-drive rental services.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {cities.map((city, index)=>(
            <div
              className="col-4 col-sm-3 col-md-2 mb-4 text-center"
              key={index}
            >
              <div className="city-circle">
                <img src={city.image} alt={city.name} />
              </div>
              <p className="city-name">{city.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCities;



