import React, { useContext, useState } from 'react';
import { userContex } from '../../App';
import Typography from '@material-ui/core/Typography';
import "./Info.css"
import { useNavigate } from 'react-router-dom';


const Info = () => {
    const { contexData, setContexData } = useContext(userContex)
    const { destination, details } = contexData;
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const submitHandle = (e) => {
        setContexData({ ...contexData, data })
        navigate("/details")
        e.preventDefault();
    }
    const dataHandle = (d) => {
        let validField = true
        if (d.target.name === "origin") {
            const len = d.target.value.length >= 1;
            validField = len
        }
        if (d.target.name === "from") {
            const len = d.target.value !== " ";
            validField = len
        }
        if (d.target.name === "to") {
            const len = d.target.value !== " ";
            validField = len
        }
        if (validField) {
            const prev = { ...data };
            prev[d.target.name] = d.target.value;
            setData(prev);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <h1>{destination} </h1>
                    <Typography>{details}</Typography>
                </div>
                <div className="col-lg-8">
                    <form onSubmit={submitHandle} className="form-group">
                        <div className="full-card" >

                            <label className=" form-label" htmlFor="origin">Origin</label>
                            <input className="form-control origin-form" onChange={dataHandle} type="text" name="origin" required />

                            <label className=" form-label" htmlFor="destination">Destination</label>
                            <input className="form-control origin-form" value={destination} type="text" name="destination" readOnly />

                            <div className="row">
                                <div className="col-lg-6">
                                    <label name="from" className="form-label" htmlFor="from">From</label>
                                    <input className="date-form form-control" name='from' onChange={dataHandle} type="date" required />
                                </div>

                                <div className="col-lg-6">
                                    <label className="form-label" htmlFor="to">To</label>
                                    <input name="to" onChange={dataHandle} className="date-form form-control" type="date" required />
                                </div>
                                <button className="chose-btn">Start Booking</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Info;