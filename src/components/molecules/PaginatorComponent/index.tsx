import ButtonComponent from "components/atoms/ButtonComponent"
import { Container } from "./style"

type Args = {
    currentPage: number;
    lastPage: number;
    onPreviusClick: () => void;
    onNextClick: () => void;
}

const PaginatorComponent = ({
    currentPage,
    lastPage,
    onPreviusClick,
    onNextClick,
}: Args) => {
    return (
        <Container>
            <div>
                {
                    currentPage !== 1
                    && (<ButtonComponent onClick={onPreviusClick}>Prev</ButtonComponent>)
                }
                {
                    currentPage < lastPage
                    && (<ButtonComponent onClick={onNextClick}>Next</ButtonComponent>)
                }
            </div>
            { lastPage > 0 && (<small> {currentPage} of {lastPage}</small>) }
        </Container>
    );
}

export default PaginatorComponent
