import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCHED, FETCH_START } from '../Red/Action';
import Axios from 'axios';
import Loader from './Loading';
import Title from './Title';

const Page01 = ()=> {
    let apiData = useSelector((state)=> state.statusReducer)
    const dispatch = useDispatch();
    console.log(apiData);
    const fetchAPI = async()=>{
        const data = await Axios({
            url:"https://jsonplaceholder.typicode.com/todos",
            method:"GET"
        })
        console.log(data.data);
        dispatch({type:FETCHED, data:data.data})
    }
    const fetchData = ()=> {
        dispatch({type:FETCH_START});
        fetchAPI()

    }
    return (
        <>
            <h1> Page-01 </h1>
            <button onClick={fetchData} > Fetch Data </button>
            {
                apiData.loading == true ? <Loader /> :  <Title title={apiData.data} />
            }
        </>
    )
}

export default Page01;