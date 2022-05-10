import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getOneAddress } from "../actions";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [address, setAddress] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setAddress(e.target.value);
    }
    const handleSubmit = (e) => {   
        e.preventDefault();
        dispatch(getOneAddress(address));
        setAddress("");
    }
    
    return (
        <div className="container py-5" >
            <div className="row">
                <div className="col-md-12">
                    <form id="taskForm" className="card card-body bg-dark rounded-0 mb-8">
                        <input
                            type="text"
                            id="title"
                            className="form-control bg-dark border-0 rounded-0 text-light my-4"
                            placeholder="Enter an address"
                            value={address}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
