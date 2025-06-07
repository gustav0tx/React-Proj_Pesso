import ActionsArea from "./ActionsArea";
import ButtonBack from "./ButtonBack";
import Container from "./Container";
import MainArea from "./MainArea";
import Subtitle from "./Subtitle";
import Title from "./Title";

export default function StackParts ({ children, subtitleText, haveComeBack, funcComeBack }) {
    return(
        <Container>

            <Title />

            {haveComeBack ? <ButtonBack onClickFunc={funcComeBack} /> : null}

            <MainArea>

                <ActionsArea>

                    <Subtitle>{subtitleText}</Subtitle>

                    {children}

                </ActionsArea>

            </MainArea>

        </Container>
    )
}