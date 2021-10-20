import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextareaAutosize from 'react-autosize-textarea';

export default class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            title:""
            };
            this.handleTitleChange = this.handleTitleChange.bind(this);
            this.handleTextChange = this.handleTextChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }

          componentDidUpdate(props){
            console.log(props.isEdit);
          }

          handleTitleChange(event) {
            this.setState({title: event.target.value});
          }
        
          handleTextChange(event) {
            this.setState({text: event.target.value});
          }
        
          handleSubmit(event) {
            event.preventDefault();
            if(this.state.text.length === 0) return
            const note = {
                title: this.state.title,
                text: this.state.text,
                date: new Date(),
                id: uuidv4()
            }
            if(this.props.isEdit){
              this.props.editNote(note)
            }else{
            this.props.addNote(note)
            }

            this.setState({text:"", title:''}) 
         
          }
        
          render() {
            return (
              <form onSubmit={this.handleSubmit}>
          
                 <input tyoe="text" style={{ textAlign: 'center'}} placeholder="Note Title" value={this.props.title} onChange={this.handleTitleChange} />
                 <br/>
                  <TextareaAutosize style={{resize:'none', textAlign: 'center'}}placeholder="Add note here" value={this.props.todo} onChange={this.handleTextChange} />
               <br/>

               {!this.props.isEdit ? <input type="submit" value="ADD" />:<input type="submit" value="EDIT"/> }
              </form>
            );
          }
 }