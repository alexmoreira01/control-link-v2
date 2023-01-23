import styled from "styled-components";

export const LoadindContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: #00000094;
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    /* border-color: #e5e7eb; */
`;

export const LoadingContent = styled.div`
    border-width: 4px;
    border-radius: 9999px;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
    /* animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: spin; */

    width: 3rem;
    height: 3rem;
    display: inline-block;
    margin-top: -2.5rem;
    margin-left: -2.5rem;

    top: 50%;
    left: 50%;
    position: absolute;
`;