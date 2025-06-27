import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-width: 300px;
    max-height: 360px;
`;

export const BannerImg = styled.img`
    width: 100%;
    height: 75%;
    border-radius: 12px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImg = styled.div`
    background-color: beige;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-right: 10px;
`;

export const TextContainer = styled.div`
    width: calc(100% - 50px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;