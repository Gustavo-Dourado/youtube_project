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

export const UploadButton = styled.div`
    width: max-content;
    height: 30px;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 12px;
    margin-top: 12px;
    color: #000000;
    background-color: #F0F0F0;
    display: flex;
    flex-shrink: 0;
    cursor: pointer;

    &:hover  {
        background-color: #B8B8B8;
    }
`;

export const VideosContainer = styled.div<{$isOpenMenu: boolean}>`
    width: 100%;
    padding-top: 24px;
    display: grid;
    grid-template-columns: ${({$isOpenMenu}) => ($isOpenMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)')};
    column-gap: 20px;
    row-gap: 50px;
`;

export const ArrowButton = styled.img<{$showMoreContent?: boolean}>`
    width: 24px;
    height: 24px;
    cursor: pointer;
    transform: ${({$showMoreContent}) => ($showMoreContent? 'none' : 'rotate(180deg)')};
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