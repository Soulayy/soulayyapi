import { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
function App() {
  const [pays, setPays] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then((response) => setPays(response.data))
    .catch((error) => console.log(error))
  }, [])

  const [mythem, setMythem] = useState(true)
  const [bk, setbk] = useState("white")

  function theme() {
    setMythem(!mythem)
    if (mythem) {
      setbk("rgb(44, 44, 44)")
    } else if (mythem == false) {
      setbk("white")
    }
    }


    const [query, setQuery] = useState("")
    const [region, setRegion] = useState("Europe")
    const [pays2, setpays2] = useState(pays)

    useEffect(() => {

      const copie = pays.filter(items => items.name.common.toLowerCase().includes(query.toLowerCase()))
      setpays2(copie)
    
    }, [query])

  

  return (
    <div className='h-full w-[100%] flex justify-center gap-7 flex-wrap' style={{backgroundColor : `${bk}`}}>
      <div className='w-full bg-white flex justify-between p-6'>
        <div>
          <h1 className='title font-bold text-3xl'>Where is the world?</h1>
        </div>
        <div>
          <label className="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <input onChange={theme} type="checkbox" value={mythem} className="toggle theme-controller"/>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
        </div>
      </div>
      <div className='w-full h-14 flex justify-center items-center p-6'>
        <div className='flex w-[87%] justify-between'>
          <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              <input onChange={(e) => setQuery(e.target.value)} type="text" className="grow" placeholder="Search for a country..." />
          </label>

            <select onChange={(e) => setRegion(e.target.value)} className="select select-bordered w-full max-w-xs">
              <option disabled selected>Filter by Region?</option>
              <option value={"Africa"}>Africa</option>
              <option value={"Europe"}>Europe</option>
              <option value={"Americas"}>Americas</option>
              <option value={"Asia"}>Asia</option>
              <option value={"Oceania"}>Oceania</option>
            </select>
        </div>
      </div>
      {
        pays2.map((pays, key) => {
          return(
            pays.region == region? <Link key={key} to={`/soulayyapi/details/${key}`} className='cardy w-[20%] bg-white rounded-xl justify-center items-center'>

              <div className='h-72 w-full flex flex-col  rounded-xl'>
                <div className='h-[50%] rounded-t-xl'>
                  <img className='h-[100%] w-[100%] rounded-t-xl' src={pays.flags.png} alt="" srcset="" />
                </div>

                
                <div className='h-[15%] flex justify-start items-center ps-5'>
                <p className='font-bold'>{pays.name.common}</p>
                </div>

                <div className='h-[35%] rounded-b-xl flex justify-center items-start flex-col ps-5'>
                <p><span className='font-bold'>Population :</span> {pays.population}</p>
                <p><span className='font-bold'>Region :</span> {pays.region}</p>
                <p><span className='font-bold'>Capital :</span> {pays.capital}</p>
                </div>

              </div>
            </Link> : ""
              
          )
        })
      }
    </div>
  );
}

export default App;
