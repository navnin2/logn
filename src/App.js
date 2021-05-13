import { message, Button } from 'antd';
import React, { useState } from 'react';
import LoginPage from './LoginPage';

const Context = React.createContext({ name: 'Default' });

function App() {
  const adminUser ={
    email: "admin@ad.com",
    password: "admin123"
  }
  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");
  const [messsageApi, contextHolder] = message.useMessage();
  
  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("LOGED IN");
      setUser({
        email: details.email,
      });
    }else{
      console.log(" INCORRECT EMAIL OR PASSWORD");
      setError(" INCORRECT EMAIL OR PASSWORD");
    }
  }

  
  const info = () => {
    messsageApi.open({
      type: 'info',
      content: <Context.Consumer>{({ name }) => ` ${name}!`}</Context.Consumer>,
      duration: 1,
    });
  }
 
  return (
    <div className="App">
      {(user.email != "") ? (
        <dev className="welcome">
          <h2>Login, <span>{user.email}</span></h2>
          <Context.Provider value={{ name: 'LOGED OUT' }}>
          {contextHolder}
            <Button type="primary" onClick={info}>
              LOGOUT
            </Button>
          </Context.Provider>
        </dev>
      ) : (
      <LoginPage Login={Login} error={error}/>
      )}
      
    </div>
    
  )
}

export default App;
