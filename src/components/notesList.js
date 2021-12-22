import React from 'react';
import ToDo from './toDo';


function NotesList(props) {

        return (
      <div style={{
          display:'grid',
          gridColumnGap: '16px',
          rowGap: 16,
          gridTemplateColumns: 'repeat(4, 1fr)'
      }}>
          {props.notes.map((note, index) => <ToDo note ={props.note} isEditFunc={props.isEditFunc} title={note.title} todo={note.text} date={note.date} index={index} editNote={props.editNote} deleteNote={props.deleteNote} key={note.id} idToPass={note.id} isEdit={props.isEdit}/>)}
      </div>
          );
         
 }
 export default NotesList