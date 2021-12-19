import React, { useState } from 'react';
import LoginForm from './components/LoginForm';


function App() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
const [user, setUser] = useState({ email: ""});
const [error, setError] = useState("");

const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
    console.log("Logged in");
    setUser({
        
        email: details.email
    });
} else {
 console.log("Login Unsuccessful");
 setError("Login Unsuccessful")

}
}
 



const Logout = () => {
    setUser({ email: ""});

}
return (
        <div className="App">
        {(user.email != "") ? (
            <div className="welcome">
                <h2>Successful Login <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
        </div>
    ) : (
        <LoginForm Login={Login} error={error} />
    )}
    </div>
    );
    

    }
export default App;
