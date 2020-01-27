import React from 'react'
import axios from 'axios'
import NoteForm from './NoteForm'

class NoteEdit extends React.Component{
    constructor(){
        super()
        this.state={
            note:{}
        }
    }
    handleSubmit=(formData)=>{
        axios.put(`http://localhost:3015/notes/${this.props.match.params.id}`,formData)
            .then(response=>{
                console.log('i', this.props.match.params.id)
            // const note=response.data
            // console.log(note)
            console.log('here')
            this.props.history.push(`/notes`)
        })

        .catch(err => alert(err))
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3015/notes/${id}`)
        .then(response=>{
            const note=response.data
            console.log(note)
            this.setState({note})
        })
        .catch(err=>{
            alert(err)
        })
    }
    render(){
        return(
            <div>
                <h1>Edit Notes</h1>
                {
                    Object.keys(this.state.note).length!=0 && <NoteForm {...this.state.note} handleSubmit={this.handleSubmit}/>
                }
            </div>
        )
    }
}
export default NoteEdit