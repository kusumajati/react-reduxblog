import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col} from 'reactstrap'

export default class Projects extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projectArray:[]
        }
    }

    componentDidMount(){
        fetch('http://reduxblog.herokuapp.com/api/posts?key=terserahsihmas')
        .then(response=>response.json())
        .then(data=>{
            this.setState(state=>({
                projectArray: [...state.projectArray, ...data]
            }))
        })
    }

    render() {
        //get()
        return (
            <div style={{ textAlign: 'center' }}>
                <Link to='/addproject'>
                    <button>Add Project</button>
                </Link>
                <ul>
                    {
                        this.state.projectArray.map(project=>{
                            return(
                                <li>
                                    <Link to={`/projects/${project.id}`}>
                                    <img src={project.categories} alt=""/>
                                    <p>{project.title}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
                )
            }
}