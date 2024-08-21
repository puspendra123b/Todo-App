
export function Todos({todos}){
    
    return (
        <div>
            {todos.map(function(todo){
                return(
                    <div>
                        <h10>{todo.title}</h10>
                        <h2>{todo.description}</h2>
                        <button onClick={()=>{
                            fetch("https://todo-app-three-flame.vercel.app/completed", {
                                method : "PUT",
                                body : JSON.stringify({
                                    id : todo._id
                                }),
                                headers : {
                                    "Content-type" : "application/json"
                                }
                            })
                            .then(function (res){
                                alert("Marked")
                            })
                        }}>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
                    </div>
                )
            })}
        </div>
    )
}