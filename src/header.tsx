type HeaderProps = {
    text?: string
    leftpart: string
    rightpart: string
    order?: number
    background?: string
}
const Header = ({ order, leftpart, text, rightpart, background = "purple" }: HeaderProps) => {
    return (
        <h1 style={{
            background: background,
            color: "white",
            fontSize: "30px",
            padding: "20px"
        }}>
            {order} {leftpart} {text} {rightpart}
        </h1>
    )
}
export default Header

