import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TopContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 20px;
    border-bottom: 1px solid gray;
    padding-bottom: 20px;
`;

export const ChannelContainer = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: #79d2a6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    font-weight: 100;
`;

export const DescriptionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    span{
        font-size: 14px;
        color: #808080;
    }
`;

export const ContentWithoutLogin = styled.div`
    width: 500px;
    border: 1px solid gray;
    border-radius: 12px;
    padding: 10px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    box-shadow: 5px 10px 18px #888888; 

    h3, p{
        margin: 0;
        padding: 0;
        border: 0;
        text-align: center;
    }
`;

export const MainContainer = styled.div`
    width: min-content;
    background-color: #F0F0F0;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-top: 30px;
    padding: 20px;

    h3{
        align-self: center;
    }
`;

export const LoginContainer = styled.div`
    max-width: 500px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
`;

export const InputContainer = styled.div<{$isValid? : boolean}>`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    align-items: flex-start;

    .label{
        width: 100%;
        color: ${({$isValid}) => $isValid? '#0047b3' : 'red'};
    }

    #description-video-id{
        color: #0047b3;
    }

    textarea {
        padding: 5px 10px;
        border-color: #0047b3;
    }

    textarea:focus{ 
        outline: 2px solid #0047b3;
    }

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
    border-radius: 8px;
    padding: 0 10px;

    &:focus{
        outline: 2px solid ${({$isValid}) => $isValid? '#0047b3' : 'red'};;  
    }
`;

export const ButtonContainer = styled.div`
    width: 93%;
    display: flex;
    justify-content: space-between;
`;

export const UploadButton = styled.button`
    width: 90px;
    height: 30px;
    background-color: #0047b3;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;