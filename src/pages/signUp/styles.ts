import styled from "styled-components";

export const PageContainer = styled.div`
    width: 1500px;
    max-width: 1500px;
    height: 93vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f0; 
`;

export const MainContainer = styled.div`
    max-width: 850px;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    column-gap: 30px;
    padding: 20px;
`;

export const ImageContainer = styled.div`
    min-width: 180px;
    display: flex;
    flex-direction: column;
`;

export const LoginContainer = styled.div`
    width: 80%;
    max-width: 500px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 30px;
`;

export const InputContainer = styled.div<{$isValid: boolean}>`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    align-items: flex-start;

    span{
        width: 100%;
        font-size: 10px;
        color: red;
        margin-left: 10px;
        display: ${({$isValid}) => $isValid? 'none' : 'inline'};
    }
`;

export const Input = styled.input<{$isValid : boolean}>`
    width: 400px;
    height: 30px;
    border: 1px solid ${({$isValid}) => $isValid? '#0047b3' : 'red'};
    border-radius: 10px;
    padding: 0 10px;

    &:focus{
        outline: 2px solid ${({$isValid}) => $isValid? '#0047b3' : 'red'};  
    }

    &::placeholder{
        color: ${({$isValid}) => $isValid? '#0047b3' : 'red'};
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SignUpButton = styled.button`
    width: 90px;
    height: 30px;
    background-color: #0047b3;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;


