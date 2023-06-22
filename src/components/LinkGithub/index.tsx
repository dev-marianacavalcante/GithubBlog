import { ComponentProps, ReactNode } from "react";
import { LinkGithubContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


type LinkGithubProps = ComponentProps<typeof LinkGithubContainer> & {
    text: string;
    icon?: ReactNode;
    variant?: "iconLeft";
}
export function LinkGithub({text, icon, ...rest}: LinkGithubProps) {
    return (
        <LinkGithubContainer {...rest}>
        {text}
        {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare}/>}
        </LinkGithubContainer>
    )
}