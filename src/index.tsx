import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element
// const h1 = React.createElement('h1', { id: 'title' }, 'Hello World')
// const p = React.createElement('p', null, 'Blablabla')

// const app = (
//     <div>
//         {h1}
//         {p}
//     </div>
// )

// const h1 = <h1 id="title">Hello World</h1>
// const p = (
//     <p>
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi hic
//         unde at vero error magnam, possimus illo quae perferendis. Possimus
//         recusandae omnis saepe voluptas consequatur repudiandae repellendus, ex
//         quod quas.
//     </p>
// )
// const ul = (
//     <ul>
//         <li>list item 1</li>
//         <li>list item 2</li>
//         <li>list item 3</li>
//     </ul>
// )
// const app = (
//     <div>
//         {h1}
//         {p}
//         {ul}
//     </div>
// )

// function declaration
// function Title() {
//     return <h1>Hello Title Component</h1>
// }
// function Content() {
//     return (
//         <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
//             corporis eveniet, nam nulla deserunt atque laboriosam ipsam possimus
//             vitae odit dolorem doloremque nemo provident numquam quia recusandae
//             officia sit repellat.
//         </p>
//     )
// }

// arrow function

// =========================================================
type HeaderProps = {
    text?: string
    leftpart: string
    rightpart: string
    order?: number
}
type ContentType = {
    title: string
    text1: string
    text2: string
}
const user = {
    name: "Jack",
    age: 10,
}
const {name, age} = user
console.log(name,age);

const Header = (props: HeaderProps) => {
    console.log(props)
    return (
        <h1>
            {props.order} {props.leftpart} {props.text} {props.rightpart}
        </h1>
    )
}
// const TitleApp = () => <h1>Hello App Component</h1>
// const TitleReact = () => <h1>Hello React Component</h1>
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

const Content = (props: ContentType) => (
    <React.Fragment>
        <h1>{props.title}</h1>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
    </React.Fragment>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
