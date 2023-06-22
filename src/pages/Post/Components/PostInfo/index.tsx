import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { Container } from "./styles";
import { ExternalLink } from "../../../../components/ExternalLink";

export function PostInfo() {
    return(
        <Container>
            <header>
                <ExternalLink
                as="button"
                icon={<FontAwesomeIcon icon={faChevronLeft}/>}
                text="Voltar"
                href="http://localhost:5173/"
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