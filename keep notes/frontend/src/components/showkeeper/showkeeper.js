import React from 'react'
import "./showkeeper.css"
import axios from "axios"

export default function Showkeeper({keeperList,setkeeperList}) {
    const deleteKeeper=(id)=>{
        axios.post("http://localhost:3001/api/delete",{id})
        .then(res => setkeeperList(res.data))
    }
  return (
    <div className='showKeeper row'>
    {
        keeperList.map(keeper =>(
            <div className="keeperCard col-md-3" key={keeper._id}>
                <h1 className='title'>
                {keeper.title} 
                <i className="deleteIcon fa fa-trash" aria-hidden="true" onClick={()=> deleteKeeper(keeper._id)}></i>
                </h1>
                <textarea className="descriptionBox" value={keeper.description} readOnly></textarea>
            </div>
        ))
    }    
    </div>
  )
}
