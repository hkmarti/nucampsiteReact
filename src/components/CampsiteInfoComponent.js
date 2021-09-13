import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

//checks if no value(!val) OR value's length is less than or equal to maxlength
const maxLength = len => val => !val || (val.length <= len);

//checks if there's a value AND value length is greater or equal to minLength
const minLength = len => val => val && (val.length >=len)

class CommentForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };

        //binds this to toggleModal//
        //Can use this or rewrite toggleModal() as arrow function which auto-binds//
        this.toggleModal = this.toggleModal.bind(this);
    }

    //Toggles Modal on and off//
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    //Receives values from LocalForm and displays as alert & console.log//
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.campsiteId, values.ratings, values.author, values.text);
    } 

    render() {
        return (
            
            <div>
                {/* Submit Button, opens Model when clicked */}
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg"/> Submit Comment
                </Button>

                {/* START OF MODAL FORM */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    {/* Modal Header, toggle={this.toggleModal} --> enables X button */}
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            {/* Sends input value to handleSubmit() */}
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>

                                {/*RATING CONTROL*/}
                                <div className="form-group">
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        className="form-control"
                                        defaultValue="1"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Control.select>
                                </div>

                                {/*AUTHOR aka. YOURNAME CONTROL*/}
                                <div className="form-group">
                                    <Label htmlFor="author">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author"
                                        className="form-control"
                                        placeholder="Your Name"
                                        validators={{
                                            minLength: minLength(2),
                                            maxLength: maxLength(15),
                                        }}
                                    />
                                    <Errors 
                                            className="text-danger"
                                            model=".author"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                </div>

                                {/*COMMENT BOX CONTROL*/}
                                <div className="form-group">
                                    <Label htmlFor="text">Comment</Label>
                                    <Control.textarea model=".text" id="text" name="text" 
                                        className="form-control"
                                        row="6"
                                    />
                                </div>

                                {/*SUBMIT BUTTON, use type="submit" here bc you're sending data*/}
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                                
                            </LocalForm>
                    </ModalBody>
                </Modal>
                {/*END OF MODAL FORM*/}
            </div>
        );
    }
}

function RenderCampsite({campsite}){
    return (
        <div className="col-md-5 m-1">
            <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments, addComment, campsiteId}){
    if (comments){
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                <div>
                    {comments.map ( comment => 
                    
                    <div>
                         <p>
                             {comment.text}
                         <br/>
                         -- {comment.author} ,  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                         </p>
                    </div>  
                    )}
                </div>

                {/*Displays "Submit Comment" button which activates Modal*/}
                <CommentForm campsiteId={campsiteId} addComment={addComment} />
            </div>
        );   
    } //Else//
        return <div/>;
}

function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className = "container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                 </div>
                 <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} 
                        comments={props.comments}
                        addComment={props.addComment}
                        campsiteId={props.campsite.id}
                    
                    />
                </div>
            </div>
        );
    } //Else//
        return <div/>;
}

export default CampsiteInfo;



