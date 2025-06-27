import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const HeaderShortsElement = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    border-top: 1px solid #d9d9d9;
    padding-top: 10px;
`;

export const ButtonContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 24px;
`;