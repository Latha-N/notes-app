import React from 'react'
import axios from 'axios'
import CategoryForm from './CategoryForm'
import {Link} from 'react-router-dom'

class Category extends React.Component{
    constructor(){
        super()
        this.state={
            categories:[],
            name:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3015/categories')
        .then(response=>{
            const categories=response.data
            console.log('1',response.data)
            this.setState({categories})
        })
    }

    handleSubmit=(formData)=>{
        axios.post('http://localhost:3015/categories',formData)
        .then(response=>{
            const category=response.data
        
            this.setState(prevState=>({
                categories:prevState.categories.concat(category)
            }))
        })
    }
    handleRemove=(id)=>{
        axios.delete(`http://localhost:3015/categories/${id}`)
            .then(response=>{
            this.setState(prevState=>({
                categories:prevState.categories.filter(category=>category._id!==response.data._id)
            }))
         })
        }
    

    render(){
        console.log(this.props.match.params.id)
        return(
            <div>
                
                <h2>Listing Categories</h2>
                <ul>
                {
                    
                this.state.categories.map(category=>{
                    return <li key={category._id}>{category.name}
                     <button onClick={()=>{this.handleRemove(category._id)}} >remove</button>
                     <Link to={`/categories/edit/${category._id}`}><button>edit</button></Link></li>
                    })
                }
                </ul>
                <h2>Add Categories</h2>
                <CategoryForm handleSubmit={this.handleSubmit}/>
               
            </div>
        )
    }
}
export default Category