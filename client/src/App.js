import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'

import Notes from './components/Notes/NotesList'
import NoteNew from './components/Notes/NoteNew'
import NoteShow from './components/Notes/NoteShow'
import NoteEdit from './components/Notes/NotesEdit'


import Category from './components/Categories/CategoryList'
import CategoryEdit from './components/Categories/categoryEdit'

function App(){
    return(
        <BrowserRouter>
        <div>
            <h1>Notes App</h1>
            <Link to="/notes">notes</Link>
            
            <Link to="/categories">|categories</Link>

            <Switch>
                <Route path="/notes" component={Notes} exact={true}/>
                <Route path="/notes/NoteNew" component={NoteNew} exact={true} />
                <Route path="/notes/edit/:id" component={NoteEdit} exact={true} />
                <Route path="/notes/:id" component={NoteShow} exact={true}/>
                
                <Route path="/categories" component ={Category} exact={true}/>
                <Route path="/categories/edit/:id" component={CategoryEdit}/>

                
            </Switch>
        </div>
        </BrowserRouter>
    )
}
export default App