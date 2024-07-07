import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./header"
import Content from './Content'


const App = () => {
    return (
        <>
            <Header order={1} text="Title" leftpart="Hello" rightpart="Test" />
            <Header text="App" leftpart="Hi" rightpart="Bla-Bla" />
            <Header text="React" leftpart="Bye-Bye" rightpart="Rainbow" />

            <Content title="Content 1" text1="hello 1" text2="Hello 2" />

            <Content
                title="Content 2"
                text1="hello 1"
                text2="Hello 2 bla-bla-bla"
            />
        </>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
