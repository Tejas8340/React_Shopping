import {useState, useEffect} from "react";

function EventBindingComponent(){
    const[userName, setUserName] = useState('john');

    function handleUserName(e){
        setUserName(e.target.value)
    }
    return(
        <div className="container-fluid">
           <dl>
            <dt>User Name</dt>
            <dd><input type="text" onChange={userName} onBlur={handleUserName}/></dd>
           </dl>
           <h3>Hello !  {userName}</h3>
        </div>
    );
}

export default EventBindingComponent