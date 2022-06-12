import { ReactNode } from "react"
import { Button } from './style'

type Args = {
    onClick: () => void;
    children: ReactNode;
}
const ButtonComponent = ({
    onClick,
    children,
}: Args) => (
    <Button onClick={onClick}>
        {children}
    </Button>
)

export default ButtonComponent
