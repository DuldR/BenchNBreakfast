import React from 'react'
import { Link } from 'react-router-dom'


export const BenchIndexItem = (props) => {

    return ( 
        <li>
            <Link to={`/benches/${props.benchId}`}>
            
                {props.desc}

            </Link>
            <ul>
                <li>
                    {props.benchId}
                </li>
                <li>
                    <label> Lat: </label>
                    {props.lat}
                </li>
                <li>
                    <label> Long: </label>
                    {props.long}
                </li>

                <li>
                    <label> Seats: </label>
                    {props.seats}
                </li>
            </ul>

        
        </li>
    )
}