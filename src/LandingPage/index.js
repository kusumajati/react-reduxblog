import React from 'react';
import {
     Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
import '../App.css'


export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }


    }
    
    render() {


        return (
            <div className='form-lp'>

                    <br />
                    <div style={{borderRadius:'.25rem',textAlign:'center', margin:'2em auto', padding:'70px', width:'50%', boxShadow: "0px 0px 10px 1px rgba(0,0,0,.2)"}}>
                    <Link to='/projects'>
                    <Button color="info" >See Our Projects</Button>
                    </Link>

                    </div>

            </div>
        );
    }
}

