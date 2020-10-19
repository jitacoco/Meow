import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;
`;

export const LoginBox = styled.div`
    width: 300px;
    height: 180px;
    margin: 100px auto;
    padding-top: 20px;
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`;

export const Input = styled.input`
    display: block;
    width: 220px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 20px;
    background: #eee;
    line-height: 30px;
    padding: 0 10px;
    margin: 15px auto;
    font-size: 16px;
    text-align: center;
`;

export const Button = styled.div`
    width: 150px;
    height: 35px;
    line-height: 35px;
    border: 2px solid #14aec1;    
    color: #ffff;
    border-radius: 20px;
    margin: 15px auto;
    background: #14aec1;
    text-align: center;
        cursor: pointer;
`;