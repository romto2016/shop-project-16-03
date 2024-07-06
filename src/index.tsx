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
const Title = () => <h1>Hello Title Component</h1>
const App = () => {
    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}

const Content = () => (
    <div>
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
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
