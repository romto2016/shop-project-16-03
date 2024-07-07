import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from "./header"

type ContentType = {
    title: string
    text1: string
    text2: string
}

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

const Content = ({ title, text1, text2 }: ContentType) => (
    <React.Fragment>
        <h1>{title}</h1>
        <p>{text1}</p>
        <p>{text2}</p>
    </React.Fragment>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
