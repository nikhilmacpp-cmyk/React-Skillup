import { useRef } from 'react'
import Counter from './component/Counter';
import Theme from "./component/Theme"
import Users from "./component/Users"
import Posts from "./component/Post"
import RTKUsers from "./component/RTKUsers"
import Login from './features/auth/Login';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './component/ProtectedRoute';
const App = () => {

    // return (
    //     <>
    //     <Counter/>
    //     <span>----------------------</span>
    //     <Theme/>
    //     <span>----------------------</span>
    //     <Users/>
    //     <span>----------------------</span>
    //     <Posts/>
    //     <span>----------------------</span>
    //     <RTKUsers/>
    //     <span>----------------------</span>
    //     <Login/>
    //     </>
    // )

    return (
        <BrowserRouter>
            <Login />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route

                    path="/dashboard"

                    element={

                        <ProtectedRoute>

                            <Dashboard />

                        </ProtectedRoute>

                    }

                />
            </Routes>
        </BrowserRouter>
    )
}
export default App
