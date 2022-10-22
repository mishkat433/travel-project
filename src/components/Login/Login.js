import React, { useContext, useState } from 'react';
import { userContex } from '../../App';
import { useLocation, useNavigate } from 'react-router';
import "./Login.css"
import google from "../../Icon/google.png";
import facebook from "../../Icon/fb.png";
import app from './firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const Login = () => {
    const { setLoginData } = useContext(userContex);
    const location = useLocation();
    const from = location.state?.form?.pathname || "/";
    const navigate = useNavigate();


    const googleProvider = new GoogleAuthProvider();

    const [newUse, setNewUse] = useState(false);
    const [user, setUser] = useState({
        newUse: true,
        fullName: '',
        userName: '',
        email: '',
        password: '',
    })

    const googleSignInHandle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setLoginData(result.user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    const createHandle = (ev) => {
        if (user.email && user.password && user.fName && user.lName) {
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((resp) => {
                    setNewUse(!newUse)
                })
                .catch((error) => {
                    console.log("not create account", error.message)
                    console.log(error.code)
                });
        }
        ev.preventDefault()
    }
    const loginHandle = (e) => {
        if (user.email && user.password) {
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((result) => {

                })
                .catch((error) => {
                    console.log("not login", error)
                });
        }
        e.preventDefault()
    }
    const changeHandle = (e) => {

        let isFieldvalid = true;
        if (e.target.name === "email") {
            isFieldvalid = /\S+@\S+\.\S+/.test(e.target.value)
        }

        if (e.target.name === "password") {
            const passwordValid = e.target.value.length >= 6;
            const passwordValidNumber = /\d{1}/.test(e.target.value)
            isFieldvalid = passwordValid && passwordValidNumber
        }
        if (e.target.name === "passwordConfirm") {
            const passwordValid = e.target.value.length >= 6;
            const passwordValidNumber = /\d{1}/.test(e.target.value)
            isFieldvalid = passwordValid && passwordValidNumber
        }

        if (e.target.name === "fName") {
            const len = e.target.value.length >= 1;
            isFieldvalid = len
        }
        if (e.target.name === "lName") {
            const leng = e.target.value.length >= 1;
            isFieldvalid = leng
        }
        if (isFieldvalid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value
            newUser.fullName = newUser.fName + " " + newUser.lName
            setUser(newUser)
        }
    }
    const newUserHandle = (even) => {
        setNewUse(!newUse)
        even.preventDefault()
    }

    return (
        <div>
            <div className="card login-card">
                <div className="card-body">
                    {
                        newUse ? <div className="bor p-2">
                            <h5 className="card-title text-dark">Create an account</h5>
                            <form className="bg-white" onClick={createHandle}>

                                <input onChange={changeHandle} type="text" name="fName" className=" d-block mb-1 text" placeholder="Enter your first name" />

                                <input onChange={changeHandle} type="text" name="lName" className=" d-block mb-1 text" placeholder="Enter your last name" required />

                                <input onChange={changeHandle} type="email" name="email" className=" d-block mb-1 text" placeholder="Enter your email" />

                                <input onChange={changeHandle} type="password" name="password" className="text pass mb-1" placeholder="password" />

                                <input onChange={changeHandle} type="password" name="passwordConfirm" className="text pass" placeholder="confirm password" />

                                <input className="submit text-dark" type="submit" value="Crate an account" />
                            </form>
                            <p className="create">Already have an account?<label className="text-warning" onClick={newUserHandle}>Login</label></p>
                        </div>
                            :
                            <>
                                <div className="bor p-2">
                                    <h5 className="card-title text-dark">Login</h5>
                                    <form className="bg-white" onClick={loginHandle}>
                                        <input onChange={changeHandle} type="text" name="email" className=" d-block mb-4 text" placeholder="Username or email" required />
                                        <input onChange={changeHandle} type="password" name="password" className="text pass" placeholder="password" required />
                                        <input onChange={changeHandle} className="mt-3 check " name="check" type="checkbox" />
                                        <label htmlFor="check" className="text-dark">remember me</label>
                                        <p className="forgot text-warning">forgot password</p>
                                        <input onChange={changeHandle} type="submit" value="Login" className="submit text-dark" />
                                    </form>
                                    <p className="create">Don't have an account?<label className="text-warning" onClick={newUserHandle}>create an account</label></p>
                                </div>
                            </>
                    }
                    <p className="form-after text-dark">or</p>
                    <button className="google-btn" onClick={googleSignInHandle} ><img className="google" src={google} alt="" />Continue with google</button>
                    <button className="google-btn mt-3" onClick={googleSignInHandle} ><img className="google" src={facebook} alt="" />Continue with facebook</button>
                </div>
            </div>
        </div>
    );
};

export default Login;