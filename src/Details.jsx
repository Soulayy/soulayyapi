import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Details.css"

export default function Details() {

  const [mythem, setMythem] = useState(true)
  const [bk, setbk] = useState("white")
  
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => setPays(response.data))
      .catch((error) => console.log(error))
  }, [])
  
  const [pays, setPays] = useState([]);
  const {id} = useParams();
    
  const theme = () => {
    setMythem(!mythem)
    if (mythem) {
      setbk("rgb(44, 44, 44)")
    } else if (!mythem) {
      setbk("white")
    }
  }

  return (
    <div className='h-full w-[100%] flex justify-center gap-7 flex-wrap' style={{backgroundColor: `${bk}`}}>
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
      <div className='w-full h-14 flex justify-start ps-40 items-center p-6'>
        <Link to={"/soulayyapi/"} class="btn-conteiner">
          <a class="btn-content" href="#">
            <span class="btn-title">BACK</span>
            <span class="icon-arrow">
              <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                  <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                  <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                </g>
              </svg>
            </span> 
          </a>
        </Link>
      </div>
      <div className='w-full h-[550px] flex justify-center items-center'>
        <div className='w-1/2 h-full flex justify-center items-center'>
          <div className='w-[70%] h-[60%] bg-blue-300'> 
            {pays.length > 0 ? (
              <img className='h-full w-full' src={pays[id]?.flags?.png} alt="" />
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <div className='w-1/2 h-full flex items-center justify-center'>
          <div className='w-[70%] h-[50%] '> 
            <div className='h-[15%] flex justify-start items-center'>
              {pays.length > 0 ? (
                <h1 className='text-3xl font-semibold'>{pays[id]?.name?.common}</h1>
              ) : (
                <div>Loading...</div>
              )}
            </div>
            <div className='h-[65%]    flex justify-start items-center'>
              {pays.length > 0 && (
                <div className='w-full flex'>
                  <div className='w-1/2 '>
                    <p><span className='font-bold'>Native Name : </span>{pays[id]?.name?.nativeName?.eng?.common}</p>
                    <p><span className='font-bold'>Population :</span> {pays[id]?.population}</p>
                    <p><span className='font-bold'>Region :</span> {pays[id]?.region}</p>
                    <p><span className='font-bold'>Sub Region :</span> {pays[id]?.subregion}</p>
                    <p><span className='font-bold'>Capital :</span> {pays[id]?.capital}</p> 
                  </div>
                  <div className='w-1/2 '>
                    <p><span className='font-bold'>Top Level Domain :</span> {pays[id]?.tld}</p>
                    <p><span className='font-bold'>Currencies :</span> {pays[id]?.currencies?.EUR?.name}</p>
                    <p><span className='font-bold'>Languages :</span> {pays[id]?.languages?.deu}, {pays[id]?.languages?.fra}, {pays[id]?.languages?.nld} </p>
                  </div>
                </div>
                
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
