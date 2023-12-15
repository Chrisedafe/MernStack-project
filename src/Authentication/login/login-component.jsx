import React, {useState, useContext} from 'react';
import { Link, useNavigate} from "react-router-dom"
import FormInput from '../../component/form-input/form-input-component';
import CustomButton from '../../component/custom-button/custom-button';
import { AuthContext } from '../context/authContext';
import './login-component.css';


const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email:'',
        password:'',
    });

    const [error, setError] = useState(" ");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = userInfo;
        try{
            await login(email, password);
            console.log("login Succesfully");
            navigate("/home");
        }catch (error) {
            setError(error.message);
            console.log("login failed.please try again");
        }
    };
        const handleOnChangeText = (e, fieldName) => {
            setUserInfo({...userInfo, [fieldName]: e.target.value });
        }
    return (
        <>
          <div className='web-page'>
            <div className='left-view'></div>
            <div className='right-view'>
                <div className='facts'>
                    <h2 className="text-center text-red-900 my-5">Login Here</h2>
                    {error? <p className="text-center text-red-900">{error}</p>: null}
                    <form onSubmit={handleSubmit}>
                        <FormInput
                        name="email"
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => handleOnChangeText(e, "email")}
                        placeholder="Enter your Email"
                        required
                        />
                        <FormInput
                        name="password"
                        type="password"
                        value={userInfo.password}
                        onChange={(e) => handleOnChangeText(e, "password")}
                        placeholder="Enter your password"
                        required
                        />
                           <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "20px"
                        }}>
                    <CustomButton type="submit">Sign in</CustomButton>
                     </div>

                    </form>
                    <h2 className="account">
                        Do you want to create a new Account ?
                    </h2>
                    <span>
                        Click the link below to Sign-Up
                        <Link
                        to="/registration"
                            style={{
                                textDecoration: "underline",
                                fontSize: "17px",
                                color: "red",
                                marginLeft: "10px"
                            }}
                            >
                            Sign-up
                        </Link>
                    </span>
                  </div>
                  
                </div>
            </div>
        </>  
    );
}

export default Login;

