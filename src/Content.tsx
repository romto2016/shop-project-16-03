type ContentType = {
    title: string
    text1: string
    text2: string
}
const Content = ({ title, text1, text2 }: ContentType) => (
    <>
        <h1>{title}</h1>
        <p>{text1}</p>
        <p>{text2}</p>
    </>
)
export default Content
