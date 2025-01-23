import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({ updateInfo }){
    
    let [city, setCity]= useState("");
    let [error, setError]= useState(false);
    const API_URL= 'http://api.openweathermap.org/geo/1.0/direct';
    const API_KEY = 'e44dea865a5da6efbe0185aaad9d1608';

    const getWeatherInfo= async () => {
        // eslint-disable-next-line no-useless-catch
        try{
            let response =  await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`

            );
            let jsonResponse=  await response.json();
            console.log(jsonResponse);
            let result = {
              city:city,
             lat:jsonResponse.lat,
             lon: jsonResponse.lon,
             };
            console.log(result);
            return result;
        } catch(err) {
           throw err;
        }
     

    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    
    };
    let handleSubmit = async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
          let newInfo =  await getWeatherInfo();
          updateInfo(newInfo);
        
       
    } catch (err){
        setError(true);

    };
};

return (
    <div className='searchBox'>
        <form onSubmit= {handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" 
         required
          value={city}
           onChange={handleChange}

           />
        <br>
        </br>
        <br></br>
        <Button variant="contained" type='submit'>
        Search
      </Button>
      {error && <p>NO Such place exits!</p>}

        </form>
    </div>
);
}