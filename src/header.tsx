type HeaderProps = {
    text?: string
    leftpart: string
    rightpart: string
    order?: number
}
const Header = ({ order, leftpart, text, rightpart }: HeaderProps) => {
    return (
        <h1>
            {order} {leftpart} {text} {rightpart}
        </h1>
    )
}
export default Header

