import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Notes extends React.Component{
    constructor(){
        super()
        this.state={
            notes:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3015/notes')
        .then(response=>{
            const notes=response.data
            console.log(response.data)
            this.setState({notes})
        })
    }

    handleRemove=(id)=>{
        axios.delete(`http://localhost:3015/notes/${id}`)
            .then(response=>{
            this.setState(prevState=>({
                notes:prevState.notes.filter(note=>note._id!==response.data._id)
            }))
         })
        }
    

    
    
    render(){
        return(
            <div>
                
                <h2>Listing Notes</h2>
                <ul>
                {
                    this.state.notes.map(note=>{
                    return <li key={note._id}> <Link to={`/notes/${note._id}`}>{note.title}</Link>
                    <Link to={`/notes/${note._id}`}><button>show</button></Link>
                    <button onClick={()=>{this.handleRemove(note._id)}} >remove</button></li>
                    })
                }
                </ul>
                <Link to="/notes/NoteNew">Add Notes</Link>
            </div>
        )
    }
}
export default Notes