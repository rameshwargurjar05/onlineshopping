import React, { useEffect, useMemo, useState } from 'react'
import Message from './Message'
import Users from './Users'

function Index() {
    const [count,setCount]=useState(0)
    const [users,setusers]=useState([])
    const [num,setNum]=useState([])

    const counter=()=>{
        let countVal=count;
        countVal+=1;
        setCount(countVal)       
    }
    const getUsers=()=>{
        setusers(['rahul','Anil'])
    }
    useEffect(()=>{
        getUsers();
        return ()=>{
            setCount(0)
        }
    },[])


    const getTotal=()=> {
        let countVal=count;
        countVal+=1;     
        setNum([...num,countVal])
        console.log('Total Change')
    };
    
    const getTotal1=useMemo(()=> {
        console.log('getTotal1 Call');
        return num.reduce((p,n)=>p+n,0)
    },[num]);


    
    return (
        <>
        <h2 onClick={()=>counter()}>Count : {count}</h2>
        <h3 onClick={getTotal}>Change Total</h3>
        <Message msg="Hello"></Message>
        <Users userList={users}></Users>
        <h3>Total : {getTotal1}</h3>
        </>
    )
}

export default Index
