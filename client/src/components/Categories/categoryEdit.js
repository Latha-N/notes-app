import React from 'react'
import axios from 'axios'
import CategoryForm from './CategoryForm'

class CategoryEdit extends React.Component{
    constructor(){
        super()
        this.state={
            category:{}
        }
    }
    handleSubmit=(formData)=>{
        axios.put(`http://localhost:3015/categories/${this.props.match.params.id}`,formData)
            .then(response=>{
                console.log('hello')
            console.log('here')
            this.props.history.push(`/categories`)
        })

        .catch(err => alert(err))
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3015/categories/${id}`)
        .then(response=>{
            const category=response.data
            console.log(category)
            this.setState({category})
        })
        .catch(err=>{
            alert(err)
        })
    }
    render(){
        console.log('gfd')
        return(
            <div>
                <h1>Edit Category</h1>
                {
                    Object.keys(this.state.category).length!=0 && <CategoryForm {...this.state.category} handleSubmit={this.handleSubmit}/>
                }
            </div>
        )
    }
}
export default CategoryEdit