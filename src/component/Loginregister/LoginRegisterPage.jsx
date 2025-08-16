import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from './Register';

function LoginRegisterPage() {
    return (
        <Router>
            <Routes>

                <Route path="/rgister" element={<Register />} />


            </Routes>
        </Router>
    )
}

export default LoginRegisterPage
