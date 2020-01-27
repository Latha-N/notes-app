import React from 'react'

class CategoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: props.name ? props.name : ''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    
       }
       handleSubmit=(e)=>{
           e.preventDefault()
           const formData={
               name:this.state.name
           }
           this.props.handleSubmit(formData)
       }
    render(){
        console.log(this.state.name)
        return(
            <div>
                            <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
                            <input type="submit" value="submit"/>
                        </form>

            </div>
        )
    }
}
export default CategoryForm