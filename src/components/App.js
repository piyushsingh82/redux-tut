import React from 'react'
import '../App.css'
const App = () => {
    return (
        <div>
                <div class="container">
                    <h1> Counter <span>Using React and Redux</span></h1>

                    <div class="counter form-inline">
                        <a class="btn btn-primary">+</a><input type="text" /><a class="btn btn-primary">-</a>

                    </div>
                </div>
        </div>
    )
}

export default App
