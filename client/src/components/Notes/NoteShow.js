import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class NoteShow extends React.Component{
    constructor(){
        super()
        this.state={
            note:{},
            category:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3015/notes/${id}`)
        .then((response)=>{
            const note=response.data
            console.log('note',response.data)
            this.setState({note})
            
            axios.get(`http://localhost:3015/categories/${note.category}`)
            .then((response)=>{
                const category=response.data
                console.log('category',category)
                this.setState({category})
            })
        })
        
        
    }
    render(){
        return(
            <div>
                    <h1>Note Show</h1>
                    <h2>Note-{this.props.match.params.id}</h2>
                    <h2>{this.state.note.title}-{this.state.note.description?this.state.note.description:'n/a'}-
                    {this.state.note.category?this.state.note.category.name:'n/a'}</h2>
                    <img src={`http://localhost:3015/${this.state.note.noteimage}`}/>
                    <Link to={`/notes/edit/${this.props.match.params.id}`}>edit</Link>
               <Link to="/notes">back</Link>
            </div>
        )
    }
}
export default NoteShow