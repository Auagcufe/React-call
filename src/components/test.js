import React from 'react';

const Gender = function(props){

    let gender = ''
    if(props.ggender === 'male'){
        gender = 'You looks handsome today.'
    }else if(props.ggender === 'female'){
        gender = 'You are more elegant than before.'
    }
    return(
        <div>{gender}</div>
    )
}

export default Gender;