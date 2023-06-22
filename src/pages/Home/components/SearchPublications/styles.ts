import styled from "styled-components";


export const SearchInputContainer = styled.div`
    width: 100%;
    margin-top: 4.5rem;
    margin-bottom: 3rem;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.85rem;

        h3 {
            font-size: ${({theme}) => theme.textSizes["title-title-s"]};
            color: ${({theme}) => theme.colors["base-subtitle"]};
        }

        span {
            font-size: ${({theme}) => theme.textSizes["title-title-s"]};
            color: ${({theme}) => theme.colors["base-span"]};
        }

    }
    input {
        width: 100%;
        padding: 0.75rem;
        border-radius: 6px;
        background: ${({theme}) => theme.colors["base-input"]};
        border: 1px solid ${({theme}) => theme.colors["base-border"]};
        color: ${({theme}) => theme.colors["base-text"]};
        transition: 0.4s;

        &:focus {
            border-color: ${({theme}) => theme.colors.blue};
            outline: none;
        }

        &::placeholder {
            color: ${({theme}) => theme.colors["base-label"]};
        }
    }
`;
// export const Container = styled.div`
//     display: flex;
//     flex-direction: column;

//     width: 100%;
//     margin-top: 72px;
// `;

// export const Contentlabels = styled.div`
//     display:flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 20px;
// `;

// export const Label = styled.label`
//     font-weight: 700;
//     font-size: 18px;
//     color: ${props => props.theme["base-subtitle"]};
// `;
// export const AmountPublications = styled.span`
//     font-weight: 400;
//     font-size: 14px;
//     color: ${props => props.theme["base-span"]};
// `;
// export const SearchInput = styled.input`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     padding: 12px 16px;
//     box-sizing: border-box;

//     height: 50px;

//     border: 1px solid #1C2F41;
//     border-radius: 6px;
//     background: ${props => props.theme["base-input"]};

//     font-style: normal;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 160%;

//     color: ${props => props.theme["base-label"]};
// `;
