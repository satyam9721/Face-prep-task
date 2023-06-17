import React  from 'react'
import { useState } from 'react';
import Home from './Home';


function Login() {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedin, setIsLoggedin] = useState(false);

	const login = (e) => {
		e.preventDefault();
		
		const userData = {
		
			email,
			password,
		};
        console.log("userlogin",userData);
		localStorage.setItem('token-info', JSON.stringify(userData));
        if(userData.email==="foo"&&userData.password==="bar"){
            setIsLoggedin(true); 
            // navigate("/home")
        }else{
            setIsLoggedin(false);
            alert("Wrong data")
        }
		
	
		setEmail('');
		setPassword('');
	};

	const logout = () => {
		localStorage.removeItem('token-info');
		setIsLoggedin(false);
	};

	return (
		<>
			<div style={{ textAlign: 'center' }}>
				
				{!isLoggedin ? (
					<>
                    <div className='form-style'
                    ><h3>Login Page  </h3>
                    <form action="">

							
							<input 
                            className='input-field'								type="email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								placeholder="Email"
							/>
							<input
                             className='input-field'		
								type="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								placeholder="Password"
							/>
							<button className='btn-log' type="submit" onClick={login}>
								Login
							</button>
						</form></div>
						
					</>
				) : (
					<>
						<h1>User is logged in</h1>
                        <button onClickCapture={logout}>logout user</button>
                        
                        <Home/>
						
					</>
				)}
			</div>
		</>
	);
}

export default Login;
