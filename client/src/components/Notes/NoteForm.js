import React from 'react'
import axios from 'axios'


class NoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:props.title?props.title:'',
            description:props.description?props.description:'',
            categories:[],
            category:props.category?props.category:'',
            noteimage:props.noteimage?props.noteimage:''
            }
    }

    componentDidMount(){
        axios.get('http://localhost:3015/categories')
        .then((response)=>{
            const categories=response.data
            this.setState({categories})
        })
    }
        handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }

        handleSubmit=(e)=>{
            e.preventDefault()
            const formData={
                title:this.state.title,
                description:this.state.description,
                category:this.state.category
            }


            const form=new FormData()
            for(let key in formData){
                form.append(key,formData[key])
            }
            
        form.append('noteimage',this.state.noteimage)
        console.log(formData)
            this.props.handleSubmit(form)
        }

        handleOnFile=(e)=>{
            this.setState({
                noteimage:e.target.files[0]
            })
        }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.title} name="title" id="title" onChange={this.handleChange}/><br/>
                    <label htmlFor="description">Description</label><br/>
                    <input type="text" value={this.state.description} name="description" id="description" onChange={this.handleChange}/><br/>
                    <input type="file" name="noteimage"  id="noteimage"  onChange={this.handleOnFile} />
                <label>Categotry</label>
                <select name="category" value={this.state.category} onChange={this.handleChange}>
                    <option></option>
                    {
                        this.state.categories.map(category=>{
                        return <option key={category._id} value={category._id}>{category.name}</option>
                        })
                    }
                    </select>
                    <input type="submit"/>
                </form>
            </div>

        )
    }

}

export default NoteForm