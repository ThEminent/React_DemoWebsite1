import React, {useState, useEffect} from "react";
import './index.css';

export const Demo = ({title}) =>{
    const [color, setColor] = useState("blue");
    const [dtitle, setTitle] = useState("Not clicked");
    const [fontFamily, setFontFamily] = useState("Not clicked");
    const [fontSize, setFontSize] = useState(12);
    const [config, setConfig] = useState({});
    const [clicks, setClicks] = useState(0);
    
    function apply(){
        setConfig({color, fontSize:fontSize+"px", fontFamily, "margin":"2em", "padding":"2em", "border":"1px solid "+color});
    }

    return(
        <main className="flex-column" >
            <input placeholder="Font family" onChange={(e) => setFontFamily(e.target.value)}/>
            <input placeholder="Font Size" onChange={(e) => setFontSize(e.target.value)}/>
            <input type="color" onChange={(e) => setColor(e.target.value)} />

            <div>
                <button onClick={()=> {setClicks((nclicks)=> {nclicks = clicks+1; setTitle("clicked "+nclicks+" times"); return nclicks;});apply()}} style={{color}} >{dtitle}</button>
                {/* <button onClick={()=> {setClicks(()=> clicks+1); setTitle("clicking "+clicks+" times"); apply()}} style={{color}} >{dtitle}</button> */}
            </div>
            <div style={config} >
                Big block of text
            </div>
        </main>
    )
}


export const Demo2 = ({title}) =>{
    const [color, setColor] = useState("blue");
    const [dtitle, setTitle] = useState("Not clicked");
    const [fontFamily, setFontFamily] = useState("Not clicked");
    const [fontSize, setFontSize] = useState(12);
    const [config, setConfig] = useState({});
    const [clicks, setClicks] = useState(0);
    
    function apply(){
        setConfig({color, fontSize:fontSize+"px", fontFamily, "margin":"2em", "padding":"2em", "border":"1px solid "+color});
    }

    useEffect(()=>{
        setTitle("clicking "+clicks+" times");
    }, [clicks]);

    return(
        <main className="flex-column" >
            <input placeholder="Font family" onChange={(e) => setFontFamily(e.target.value)}/>
            <input placeholder="Font Size" onChange={(e) => setFontSize(e.target.value)}/>
            <input type="color" onChange={(e) => setColor(e.target.value)} />

            <div>
                <button onClick={()=> {setClicks(clicks+1);apply();}} style={{color}} >{dtitle}</button>
            </div>
            <div style={config} >
                Big block of text
            </div>
        </main>
    )
}