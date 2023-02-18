import { useState } from "react"

export default function FormComponent(){
    const [users] = useState([
        {UserId: 'john'},
        {UserId:'john12'},
        {UserId: 'david'},
        {UserId:'john_nit'}
    ]);
    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setIsUserValid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    const [capsStatus, setCapsStatus] = useState(false);

    function VerifyUserId(e){
          for(var user of users)
          if(user.UserId==e.target.value){
            setUserMsg('User Id Taken - Try Another');
            setIsUserValid(false);
            break;
          } else {
            setUserMsg('User Id Available');
            setIsUserValid(true);
          }
    }
    function VerifyPassword(e){
          if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/))
          {
            setPwdMsg('Strong Password');
          }else{
            if(e.target.value.length<4){
                setPwdMsg('poor Password');
            } else {
                setPwdMsg('weak Password');
            } 
          }
    }
    function HidePasswordMsg(){
        setPwdMsg('');
        setCapsStatus(false);
    }
    function VerifyCaps(e){
        console.log(e.KeyCode);
        if(e.KeyCode>=65 && e.keyCode<=90 || e.which>=65 && e.which<=65){
             setCapsStatus(true);
        } else {
            setCapsStatus(false);
        }
    }
    return(
        <div className="container-fluid">
            <h2>Register Uses</h2>
            <dl>
                <dl>User Id</dl>
                <dd><input required type="text" onKeyUp={VerifyUserId} /></dd>
                <dd className={(isUserValid==true)?'text-success':'text-danger' }>{userMsg}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onKeyPress={VerifyCaps} onBlur={HidePasswordMsg} onKeyUp={VerifyPassword} />
                </dd>
                <dd>{pwdMsg}</dd>
                <dd className={(capsStatus==true)?'d-block':'d-none'}>
                   <span  className="text-warning"> <span className="bi bi-exclamation-triangle"></span>Caps On</span>
                </dd>
            </dl>
        </div>
    )
}