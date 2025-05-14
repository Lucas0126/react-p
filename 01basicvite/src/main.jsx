import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
    
}

function MyApp(){
    return(
        <div>
            <h1>custom react</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>visit Google</a>
)

const areactElement= React.createElement(
    'a',
    {href:"https://google.com", target:'_blank'},
    'click me to vist google'
)

createRoot(document.getElementById('root')).render(
    <App />
)
