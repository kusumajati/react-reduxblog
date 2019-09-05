import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem, Badge, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1',
          project:{}
        };
      }
    
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
      componentDidMount(){
        fetch(`http://reduxblog.herokuapp.com/api/posts/${this.props.match.params.id}?key=terserahsihmas`)
        .then(response=>response.json())
        .then(data=>{
            this.setState(state=>({
                project: data
            }))
            console.log(this.state.project)
        })
      }
  render() {
    return (
      <Container>
        
          <br></br>
        <Row>
          <Col sm='4'>
          <ListGroup>
        <ListGroupItem className="paddingZero justify-content-between"> <img className='imageProfile' src={this.state.project.categories} alt=""/> </ListGroupItem>
        <ListGroupItem className="justify-content-between">{this.state.project.title} </ListGroupItem>
      </ListGroup>
          </Col>
           <Col sm='8'> 
           <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Project Details
            </NavLink>
          </NavItem>


        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <p style={{fontSize:'1.25em'}}><strong>{this.state.project.content}</strong></p>
              </Col>
            </Row>
          </TabPane>
          
        </TabContent>

          </Col>
        </Row>

      </Container>
    );
  }
}