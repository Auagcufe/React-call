import React from 'react';

const Hello = function(props){
    const name = props.name;
    const lang = props.language;
    const color = props.color || "black";
    let hello = ''

    if (lang === 'en'){
        hello = 'Hello,'
    }else if(lang === "cn"){
        hello = "你好,"
    }
    return(
        <div style={{ color: color }}>{hello} {name}</div>
    )
};


export default Hello;