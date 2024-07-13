import styles from './Header.module.scss'

type HeaderProps = {
    text?: string
    leftpart: string
    rightpart: string
    order?: number
    background?: string
    color?: string
}
const Header = ({
    order,
    leftpart,
    text,
    rightpart,
    background = 'purple',
    color = 'orange',
}: HeaderProps) => {
    return (
        <h1 className={`${styles.header}`}>
            {order} {leftpart} {text} {rightpart}
        </h1>
    )
}
export default Header
