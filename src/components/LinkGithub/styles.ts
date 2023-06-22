import { ArrowUpRight } from "@phosphor-icons/react";
import styled from "styled-components";

export const LinkGithubContainer = styled.a`
    border: none;
    background: none;
    color: ${({theme}) => theme.colors.blue};
    font-size: ${({theme}) => theme.textSizes["components-link"]};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
    transition: 0.4s;
    border-bottom: 1px solid transparent;
    height: 19px;
    line-height: 19px;
    
    &:hover {
        border-color: ${({theme}) => theme.colors.blue};
    }
`;

export const IconArrow = styled(ArrowUpRight)`
    width: 0.75rem;
    height: 0.75rem;
    color: ${({theme}) => theme.colors.blue};

    
`;