import SpinnerLogo from '../../../assets/img/spinner.svg'
import {
    Container,
    Span,
} from './style'

type Args = {
    title?: string;
}

const Spinner = ({
    title,
}: Args) => {
    const style = {
        width: '100px',
        height: 'auto',
    }
    return (
        <Container>
            <img src={SpinnerLogo} alt="Loading" style={style}/>
            {!title ? (<div>
                <Span />
                <Span />
                <Span />
                <Span />
                <Span />
            </div>) : (<div>{title}</div>)
            }
        </Container>
    )
}

export default Spinner