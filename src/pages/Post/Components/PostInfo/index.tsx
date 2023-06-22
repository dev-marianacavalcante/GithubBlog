import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { ExternalLink } from "../../../../components/externalLink";

export function PostInfo() {
    const navigate = useNavigate();

    function goBack() {
        navigate (-1)
    }
    return(
        <Container>
            <header>
                <ExternalLink
                as="button"
                onClick={goBack}
                icon={<FontAwesomeIcon icon={faChevronLeft}/>}
                text="Voltar"
                variant="iconLeft"
                />
                <ExternalLink text="Ver no Github" href="https://github.com/dev-marianacavalcante" target ="_blank"/>
            </header>
            <h1>JavaScript data types and data structures</h1>
            <ul>
                <li><FontAwesomeIcon icon={faGithub}/> dev-marianacavalcante</li>
                <li><FontAwesomeIcon icon={faCalendar}/> Há 1 dia</li>
                <li><FontAwesomeIcon icon={faComment}/> 5 comentários</li>
            </ul>
        </Container>
    )
}