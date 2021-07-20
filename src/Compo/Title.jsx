import React from 'react';

const Title = ({title})=> {
    return(
        <div>
            <ul>
                {
                    title.length >= 1 ? ( 
                        title.map((element, i)=>{
                            return (
                                <li key={i} > { element.title } </li>
                            )
                        })
                     ) : (
                     <p> NO Data Available !! </p>
                    )
                }
            </ul>
        </div>
    )
}

export default Title;