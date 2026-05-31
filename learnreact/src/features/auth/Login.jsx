import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginUserMutation } from './authApi';
import { setCredentials, logout } from './authSlice';
import {useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {
        user,
        isAuthenticated
    } = useAuth()

    const [
        loginUser,
        { isLoading }
    ] = useLoginUserMutation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = async () => {
        try {
            const reaponse = await loginUser({
                email,
                password
            });
            dispatch(setCredentials({
                user: {

                    email
                },

                token:
                    "fake-jwt-token"
            }))
            navigate("/dashboard")
        } catch (err) {
            console.log('Error Occured', err)
        }
    }

    return (

        <div>

            <h1>Login</h1>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <br />

            <button
                onClick={submitHandler}
            >
                Login
            </button>

            {
                isLoading &&
                <h3>Loading...</h3>
            }

            {
                isAuthenticated && (

                    <div>

                        <h2>
                            Welcome {user.email}
                        </h2>

                        <button
                            onClick={() =>
                                dispatch(logout())
                            }
                        >
                            Logout
                        </button>

                    </div>

                )
            }

        </div>

    )
}

export default Login