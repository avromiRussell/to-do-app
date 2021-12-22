import React from 'react';
import './App.css';
import TextInput from './components/textInput'
import NotesList from './components/notesList'

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      notes:[],
      isEdit: false
      }  
      this.addNote = this.addNote.bind(this);
      this.deleteNote = this.deleteNote.bind(this);
      this.editNote = this.editNote.bind(this);
      this.handleIsEdit = this.handleIsEdit.bind(this);
    }
  
    addNote(note){
      this.setState((oldState)=>{
        const newNotes = [...oldState.notes, note]
        
        return {...oldState, notes: newNotes}
        
      })
    }

    handleIsEdit(status) {
      this.setState({isEdit: status})
    }

    deleteNote(index){
      const deleteIsTrue = window.confirm("Are you sure you want to delete this note?")
      if (deleteIsTrue === true) {
        const newNotes = this.state.notes
        newNotes.splice(index,1)
        this.setState({notes:newNotes})
      }
    }
    editNote(newNote){
      console.log("strating edit");
      const {id, updatedDate, title, text} = newNote

      console.log(id, updatedDate, title, text);
    }
    render(){
      console.log(this.state.notes);
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Make A New Change!</h1>
 <TextInput addNote={this.addNote} notes = {this.state.notes} editNote={this.editNote} isEdit={this.state.isEdit}/>
 <br/>
 <NotesList notes = {this.state.notes} editNote={this.editNote} isEditFunc={this.handleIsEdit} deleteNote={this.deleteNote}  isEdit={this.state.isEdit}/>
 </header>
 </div>
  );}
}

export default App;
