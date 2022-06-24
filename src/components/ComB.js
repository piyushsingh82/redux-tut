import React,{useContext} from 'react'
import { Firstname , Lastname } from './Dashboard'

const ComB = () => {
    const fname = useContext(Firstname);
    const lname = useContext(Lastname);
    return (
        <div>
            <h4>This App is developed by {fname} {lname}</h4>
          
        </div>
    )
}

export default ComB;
