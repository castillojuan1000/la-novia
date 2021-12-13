import styled from "styled-components";

export const NoButton = styled.button`
    background: #098191;
    transition: background ease .25s;
    border-radius: 5px;
    display: inline-block;
    border: none;
    padding: 1rem 2.5rem;
    margin: 20px;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: ${props => (props.isHovered && "absolute")};
    top: ${props => (props.isHovered && props.randomTop)};
    left: ${props => (props.isHovered && props.randomLeft)};
`