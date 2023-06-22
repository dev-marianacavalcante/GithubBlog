// import { ArrowLineUpRight, Buildings, GithubLogo, Users } from "@phosphor-icons/react";
import styled from "styled-components";


export const ProfileContainer = styled.section`
    width: 100%;
    min-height: 13.25rem;
    margin-top: -5.5rem;
    background: ${({theme}) => theme.colors["base-profile"]};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem 2.5rem;
    display: flex;
    gap: 2rem;
`;

export const ProfileImg = styled.img`
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    object-fit: cover;
    
`;

export const ProfileDetails = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        h1 {
            font-size: ${({theme}) => theme.textSizes["title-title-l"]};
            color: ${({theme}) => theme.colors["base-title"]};
            line-height: 130%;
        }
    }

    ul {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: 0.5rem;
        margin-top: auto;

        svg {
            width: 1.125rem;
            height: 1.125rem;
            color: ${({theme}) => theme.colors["base-label"]};
        }
    }
`;


// export const Container = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     padding: 32px;

//     background: ${props => props.theme["base-profile"]};
//     box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
//     border-radius: 10px;
// `;

// export const ContentImgAvatar = styled.div`
//     border-radius: 8px;
// `;

// export const AvatarImg = styled.img`
//     width: 148px;
//     height: 148px;
// `;

// export const Name = styled.p`
//     font-style: normal;
//     font-weight: 700;
//     font-size: 24px;
//     color: ${props => props.theme["base-title"]};
    

// `;
// export const Bio = styled.label`
//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 160%;
//     color: ${props => props.theme["base-text"]};

// `;
// export const ContentInfo = styled.div`
//     display: flex;
//     flex-direction: column;
//     margin-left: 5%;
// `;
// export const ContentIcons = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     gap: 24px;

//     margin-top: 24px;
// `;

// export const Username = styled.label`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding: 0px;
//     gap: 8px;
//     color: ${props => props.theme["base-subtitle"]};

// `;
// export const Company = styled.label`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding: 0px;
//     gap: 8px;
//     color: ${props => props.theme["base-subtitle"]};
// `;
// export const Followers = styled.label`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding: 0px;
//     gap: 8px;
//     color: ${props => props.theme["base-subtitle"]};
// `;

// export const IconGithub = styled(GithubLogo)`
//     color: ${props => props.theme["base-label"]};
// `;
// export const IconBuildings = styled(Buildings)`
//     color: ${props => props.theme["base-label"]};
// `;
// export const IconUsers = styled(Users)`
//     color: ${props => props.theme["base-label"]};
// `;

// export const LinkGithub = styled.a`
//     display: flex;
//     flex-direction: row;
//     align-items: flex-end;
//     gap: 8px;
    
//     font-style: normal;
//     font-weight: 700;
//     font-size: 12px;
//     line-height: 160%;
//     text-transform: uppercase;
//     color: ${props => props.theme.blue};
// `;

// export const IconArrow = styled(ArrowLineUpRight)``

// export const ContentNameLink = styled.div`
//     display:flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
// `;