import './App.css';
import React, {useState,useEffect} from 'react';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';

import len from'./Images/len.png';
import lendam from'./Images/lendam.png';
import xuong from'./Images/xuong.png';
import xuongdam from'./Images/xuongdam.png';
import trai from'./Images/trai.png';
import traidam from'./Images/traidam.png';
import phai from'./Images/phai.png';
import phaidam from'./Images/phaidam.png';
import coi from'./Images/coi.png';
import coidam from'./Images/coidam.png';
import mot from'./Images/mot.png';
import motdam from'./Images/motdam.png';
import hai from'./Images/hai.png';
import haidam from'./Images/haidam.png';
import ba from'./Images/ba.png';
import badam from'./Images/badam.png';
import bon from'./Images/bon.png';
import bondam from'./Images/bondam.png';

import firebaseConnect from './firebaseConnect'
import { getDatabase, ref, set } from "firebase/database";

//var DataToDB="A1B25C0D0E0F";  Control, Tốc độ, di chuyển, chức năng, còi

function App() {
  const [value, setValue] = useState(25);
  const [checked, setChecked] = useState(false);
  const [dilen, setdilen] = useState(false);
  const [dixuong, setdixuong] = useState(false);
  const [ditrai, setditrai] = useState(false);
  const [diphai, setdiphai] = useState(false);
  const [somot, setsomot] = useState(false);
  const [sohai, setsohai] = useState(false);
  const [soba, setsoba] = useState(false);
  const [sobon, setsobon] = useState(false);
  const [caicoi, setcaicoi] = useState(false);
  const [DataToDB, setDataToDB] = useState("A1B25C0D0E0F");
 
  function handleSliderChange(event, newValue)
  {
    setValue(newValue);
    WriteData();
  }
  function handleChangeSwitch(event)
  {
    setChecked(event.target.checked);
    WriteData();
  }
  function HandleDiLen()
  {
   
    setdilen(!dilen);
    setdixuong(false);
    setditrai(false);
    setdiphai(false);
    setsomot(false);
    setsohai(false);
    setsoba(false);
    setsobon(false);
    console.log(dilen);
    WriteData();
  }
  function HandleDiXuong()
  {
    setdixuong(!dixuong);
    setdilen(false);
    setditrai(false);
    setdiphai(false);
    setsomot(false);
    setsohai(false);
    setsoba(false);
    setsobon(false);
    WriteData();
  }
  function HandleDiTrai()
  {
    setditrai(!ditrai);
    setdilen(false);
    setdixuong(false);
    setdiphai(false);
    setsomot(false);
    setsohai(false);
    setsoba(false);
    setsobon(false);
    WriteData();
  }
  function HandleDiPhai()
  {
    setdiphai(!diphai);
    setdilen(false);
    setdixuong(false);
    setditrai(false);
    setsomot(false);
    setsohai(false);
    setsoba(false);
    setsobon(false);
    WriteData();
  }


  function HandleSoMot()
  {
    setsomot(!somot);
    setdilen(false);
    setdixuong(false);
    setditrai(false);
    setdiphai(false);
    setsohai(false);
    setsoba(false);
    setsobon(false);
    WriteData();
  }
  function HandleSoHai()
  {
    setsohai(!sohai);
    setdilen(false);
    setdixuong(false);
    setditrai(false);
    setdiphai(false);
    setsomot(false);
    setsoba(false);
    setsobon(false);
    WriteData();
  }
  function HandleSoBa()
  {
    setsoba(!soba);
    setdilen(false);
    setdixuong(false);
    setditrai(false);
    setdiphai(false);
    setsomot(false);
    setsohai(false);
    setsobon(false);
    WriteData();
  }
  function HandleSoBon()
  {
    setsobon(!sobon);
    setdilen(false);
    setdixuong(false);
    setditrai(false);
    setdiphai(false);
    setsomot(false);
    setsohai(false);
    setsoba(false);
    WriteData();
  }
  function HandleCoi()
  {
    setcaicoi(!caicoi);
    WriteData();
  }
  function HandleControl()
  {
    setChecked(!checked);
    WriteData();
  }
  useEffect(()=>{

      setDataToDB("A1B25C0D0E0F");
      const db = getDatabase();
      set(ref(db,"Data/"),DataToDB)
      .then(()=>{
        console.log("Thanh Cong");
      })
      
  },[]);
  useEffect(()=>{
    WriteData();
  });

  function WriteData()
  {
    var control, tocdo, dichuyen, chucnang, coi;
    checked?control="1":control="0";
    tocdo = value;
    dichuyen = 0;
    if(dilen === true) dichuyen = 1;
    if(dixuong === true) dichuyen = 2;
    if(ditrai === true) dichuyen = 3;
    if(diphai === true) dichuyen = 4;
    chucnang = 0;
    if(somot === true) chucnang = 1;
    if(sohai === true) chucnang = 2;
    if(soba === true) chucnang = 3;
    if(sobon === true) chucnang = 4;
    if(caicoi === true) coi = 1; else coi =0;

    setDataToDB("A" + control + "B" + tocdo + "C"+ dichuyen +"D"+ chucnang+ "E"+ coi + "F");
    // console.log(DataToDB);

    const db = getDatabase();
      set(ref(db,"Data/"),DataToDB)
      .then(()=>{
        console.log("Thanh Cong");
      })
  }
  return (
    <div className="to"> 
        <Slider className="slide"  onChange={handleSliderChange} defaultValue={25} aria-label="Default"  min={0} max={30}
          sx={{
            width: 350,
            height:10,
            color: 'danger.main',
            '& .MuiSlider-thumb': {
              borderRadius: '5px',
              width:'30px',
              height:'30px',
              color:'#e84118'
            },
          }}
        valueLabelDisplay="auto" />
        {checked?(<div className="textDK" onClick={HandleControl}>CONTROL</div>):(<div className="textDK" onClick={HandleControl}>AUTO</div>)}
        <div className="textMin">Min</div>
        <div className="textMax">Max</div>
        <Switch  className="switch"
          checked={checked}
          onChange={handleChangeSwitch}
          color="secondary"
          size="big"
          inputProps={{ 'aria-label': 'controlled' }}
        /> 
        {dilen?(<img src={lendam} className="lendam" onClick={HandleDiLen} />):(<img src={len} className="len" onClick={HandleDiLen} />)}
        {dixuong?(<img src={xuongdam} className="xuongdam" onClick={HandleDiXuong} />):(<img src={xuong} className="xuong" onClick={HandleDiXuong} />)}
        {ditrai?(<img src={traidam} className="traidam" onClick={HandleDiTrai} />):(<img src={trai} className="trai" onClick={HandleDiTrai} />)}
        {diphai?(<img src={phaidam} className="phaidam" onClick={HandleDiPhai} />):(<img src={phai} className="phai" onClick={HandleDiPhai} />)}
        
        {somot?(<img src={motdam} className="motdam" onClick={HandleSoMot} />):(<img src={mot} className="mot" onClick={HandleSoMot} />)}
        {sohai?(<img src={haidam} className="haidam" onClick={HandleSoHai} />):(<img src={hai} className="hai" onClick={HandleSoHai} />)}
        {soba?(<img src={badam} className="badam" onClick={HandleSoBa} />):(<img src={ba} className="ba" onClick={HandleSoBa} />)}
        {sobon?(<img src={bondam} className="bondam" onClick={HandleSoBon} />):(<img src={bon} className="bon" onClick={HandleSoBon} />)}
        {caicoi?(<img src={coidam} className="coidam" onClick={HandleCoi} />):(<img src={coi} className="coi" onClick={HandleCoi} />)}
       
    </div>
  );
}

export default App;
