import React from 'react';
import {Navbar} from "./components/NavBar";
import {ToDoForm} from "./components/ToDo";

const App: React.FunctionComponent = ()=> {
    return<>
    <Navbar/>
    <div className="container mt2">
        <ToDoForm/>

    </div>
    </>

}
export default App

