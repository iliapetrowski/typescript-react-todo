import React from "react";

export const ToDoForm: React.FunctionComponent = () => {
    return (
        <div className="input-field mt2" >
            <input type="text" id='title' placeholder='Введите название задачи'/>
            <label htmlFor="title" className='active'>Название задачи</label>

        </div>
    )
}