import { Link } from 'react-router-dom'
import { device } from './interfaces/device'
import styled from 'styled-components'

export const HexGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    overflow: hidden;
    font-family: sans-serif;
    list-style-type: none;
    margin: calc((100% / 9)/4) auto;
    padding-right: calc((100% / 9)/2);

    @media ${device.large} {
        padding-bottom: 4.4%
    }
`

export const Hex = styled.li`
    position: relative;
    outline: 1px solid transparent;

    &::after{
        content: '';
        display: block;
        padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
    }

    @media ${device.large} {
        width: calc(100%/9);

        &:nth-child(n+10):nth-child(-n+18){
            left: calc(100%/18);
        }
        &:nth-child(n+28):nth-child(-n+36){
            left: calc(100%/18);
        }
    }
`

export const HexIn = styled.div`
    position: absolute;
    width: 96%;
    padding-bottom: 110.851%; /* =  width / sin(60) */
    margin: 2%;
    outline: 1px solid transparent;
    -webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    overflow: hidden;

    * {
        position: absolute;
        outline:1px solid transparent;
    }
`

export const HexLink = styled(Link)`
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
    -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
    transform: skewY(-30deg) rotate3d(0,0,1,60deg);
    background-color: #f5f5f5;
    overflow: hidden;

    &:hover {
        background-color: #fa6831;
        color: white;
        cursor: pointer;
    }

    svg {
        top: calc(50% - 32px);
        left: calc(50% - 32px);
    }

    span {
        left: 0;
        top: calc(100% - 60px);
        text-align: center;
        text-transform: uppercase;
        font-size: 0.6rem;
        color: black;
        width: 100%;
    }
`