import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button, Container} from 'reactstrap'

export default class AddProjects extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            title:'',
            imageUrl:'',
            description:'',
            redirect: false
        }
        this.AddNewProject = this.AddNewProject.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeUrl = this.onChangeUrl.bind(this)
        this.onChangeDesc = this.onChangeDesc.bind(this)
    }
    onChangeDesc(event){
        this.setState({
            description:event.target.value
        })
    }
    onChangeTitle(event){
        this.setState({
            title:event.target.value
        })
    }
    onChangeUrl(event){
        this.setState({
            imageUrl:event.target.value
        })
    }
    AddNewProject(){
        fetch(	"http://reduxblog.herokuapp.com/api/posts?key=terserahsihmas",
        {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({
            title: this.state.title,
            categories: this.state.imageUrl,
            content: this.state.description
        }),
        
    })
    .then(()=>{
        this.setState({
            redirect:true
        })
    })

    }
    render() {
            if(this.state.redirect){
                return(
                <Redirect to="/projects"></Redirect>
                )
            }
        return (
            <div>
                <Container >
                    
                <Form style={{width:'50%', margin:'1em auto'}}>
        <FormGroup>
          <Label for="exampleEmail">Project Name</Label>
          <Input onChange={this.onChangeTitle} type="email" name="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Image URL</Label>
          <Input onChange={this.onChangeUrl} name="password"  />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Project Description</Label>
          <Input onChange={this.onChangeDesc} type="textarea" name="select" >
          </Input>
        </FormGroup>
        <Link to='/projects'>
        <Button onClick={this.AddNewProject}>Back</Button>
        </Link>
        <Button style={{float:'right'}} onClick={this.AddNewProject}>Submit</Button>
      </Form>
      </Container>
            </div>
            
        )
    }
}