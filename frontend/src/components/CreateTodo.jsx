import { useState } from "react"

export function CreateTodo () {

    const [title ,setTitle] = useState("")
    const [description ,setDescription] = useState("")
    return (
        <div>
            <input id="title" style={{
                padding: 10,
                margin : 10
            }}
            type="text" placeholder="title" onChange={function (e){
                setTitle(e.target.value) 
            }}/><br />
            <input id="desc" style={{
                padding: 10,
                margin : 10
            }}
            type="text" placeholder="description" onChange={function (e){
                setDescription(e.target.value) 
            }}/><br />

            <button style={{
                padding: 10,
                margin : 10
            }} onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method : "POST",
                    body : JSON.stringify({
                        title : title,
                        description : description,
                    }),
                    headers : {
                        "Content-type" : "application/json"
                    }
                })
                .then(function (res){
                    alert("Todo added")
                })
            }}>Add todo</button>
        </div>
    )
}