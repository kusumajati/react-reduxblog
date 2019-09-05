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
                    <button style={{marginBottom:'1em'}}>Add Project</button>

                </Link>

                <ul style={{listStyle:'none', padding:0}}>
                    {
                        this.state.projectArray.map(project=>{
                            return(
                                <li className={this.state.projectArray.indexOf(project) !== 0 &&this.state.projectArray.indexOf(project)%2===0?'brokenWhite':''} style={{ padding:'1em'}}>
                                    <Link to={`/projects/${project.id}`}>
                                    <img src={project.categories} alt=""/>
                                    <p  style={{margin:0}}>{project.title}</p>
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