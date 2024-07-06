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
    text: string
}

const Header = (props: HeaderProps) => {
console.log(props);
return <h1>Hello {props.text} Component</h1>
}
// const TitleApp = () => <h1>Hello App Component</h1>
// const TitleReact = () => <h1>Hello React Component</h1>
const App = () => {
    return (
        <>
            <Header text="Title" />
            <Header text="App" />
            <Header text="React" />
            <Title />
            <Content />
        </>
    )
}

const Content = () => (
    <React.Fragment>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            corporis eveniet, nam nulla deserunt atque laboriosam ipsam possimus
            vitae odit dolorem doloremque nemo provident numquam quia recusandae
            officia sit repellat.
        </p>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi modi
            assumenda pariatur perspiciatis rerum commodi vitae dolor, nihil
            placeat sed est dolores aliquid in, facilis eligendi? At voluptates
            rem modi?
        </p>
    </React.Fragment>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <TitleApp />
        <TitleReact />
        <App />
    </React.StrictMode>
)
