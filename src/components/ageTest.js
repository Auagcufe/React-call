import React from 'react';

const Age = function(props){
    let aa=''
    if (props.age>=18){
        aa='drink alcohol.'
    }else if (props.age<18){
        aa='drink tea.'
    }
    return(
        <div>You can {aa}</div>
    )
}

export default Age;