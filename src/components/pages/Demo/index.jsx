import React, {useState} from "react";
import './index.css';
import {ToolBar} from '../../molecules/ToolBar';


export const Demo = () =>{
    const [config, setConfig] = useState({});
    const [clicks, setClicks] = useState(0);

    return(
            <main>
                <ToolBar setConfig={setConfig} />
                <div style={config}>
                    Big block of texts, with {clicks} clicks
                </div>
                <button onClick={()=>setClicks(clicks+1)} >My button</button>
            </main>
        )
}

export const Demo2 = (props) =>{
    const [config, setConfig] = useState({});

    const showElement = true;

    return(<div style={props.dconfig} >{showElement?<div>Hello</div>:<div>Hi</div>}</div>);
}

