import styled from "styled-components";

export const SectionWrap = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    height: 100vh;
    width: 100vw;
    position: sticky;
    top: 0vh;
    overflow-x: hidden;
    margin-top: ${ props => props.first ? '100vh' : 0};
    background: black;

    .inner-placeholder{
        width: 100%;
        height: 100%;
        background: lightseagreen;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 10px solid orange;
    }
`

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: ${ props => props.background ? `url(${props.background }) no-repeat center center` : null };
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${props => props.shouldDisplay ? 1 : .3};
    transition: .3s opacity;
`

export const TextBlock = styled.div`
    position: absolute;
    left: 55vw;
    top: 50vh;
    transform: translateY(-50%);
    z-index: ${ props => props.theme.z.text };
    opacity: ${props => props.shouldDisplay ? 1 : 0};
    transition: .3s opacity;

    h1 {
        text-transform: uppercase;
    }

    .button{
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`