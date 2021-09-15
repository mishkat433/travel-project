import React, { useContext, useState } from 'react';
import { userContex } from '../../App';
import Typography from '@material-ui/core/Typography';
import "./Info.css"
import { useHistory } from 'react-router-dom';


const Info = (props) => {

    const [location, setLocation] = useContext(userContex)
    const [valid, setValid] = useState(false)
  
    let locationName
    if (location.destination === "COX'S BAZAR"){
        locationName = " who became the Governor of Bengal following the British East India Company Act in 1773. Cox embarked upon the task of rehabilitation and settlement of the Arakanese refugees in the area."
    }
    else if (location.destination === "SREEMANGOL"){
        locationName = "Sreemangal has been nicknamed the tea capital of Bangladesh, due to the number of tea gardens in the area, and is the place of origin of the Seven Color Tea.[2] The Bangladesh Tea Research Institute in Sreemangal has  in evolving and standardising the quality of tea, and introducing its research findings to the tea industry of Bangladesh."
    }
    else if (location.destination === "SUNDORBAN"){
        locationName = "It spans from the Hooghly River in Indias state of West Bengal to the Baleswar River in Bangladeshs division of Khulna."
    }
    
    const history = useHistory()
    const blogHandle=()=>{
       if(validField){
           history.push("/details")
       }
       
    }

    let validField= false
    const dataHandle=(d)=>{
        if (d.target.name ==="origin"){
            const len = d.target.value.length >= 1;
            validField = len
        }
        
        if (d.target.name ==="destination"){
             const len = d.target.value.length >= 1;
            validField = len
        }
        if (d.target.name ==="from"){
            const len = d.target.value !=" " ;
            validField = len
        }
        if (d.target.name ==="to"){
            const len = d.target.value != " ";
            validField = len
        }
        if (validField){
            setValid(true)
        }
        d.preventDefault()
    }
    console.log(validField)

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <h1>{location.name} </h1>
                    
                    <Typography>{location.details + locationName}</Typography>
                </div>
                <div className="col-lg-8">
                    <form action="" className="form-group">
                    <div className="full-card">
                        
                            <label className=" form-label" htmlFor="origin">Origin</label>
                            <input className="form-control origin-form" onBlur={dataHandle} type="text" name="origin" required />
                                
                            <label className=" form-label" htmlFor="destination">Destination</label>
                            <input className="form-control origin-form" onBlur={dataHandle} type="text" name="destination" required />
                        
                        <div className="row">
                            <div className="col-lg-6">
                                
                                    <label name="from" className="form-label" htmlFor="from">From</label>
                                    <input className="date-form form-control" onBlur={dataHandle}  type="date" required/>
                               
                            </div>
                            <div className="col-lg-6">
                                    <label className="form-label" htmlFor="to">To</label>
                                    <input name="to" onBlur={dataHandle} className="date-form form-control" type="date" required/>
                            </div>
                                <button onClick={blogHandle} className="chose-btn">Start Booking</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Info;