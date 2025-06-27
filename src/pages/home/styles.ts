import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const VideosContainer = styled.div<{$isOpenMenu: boolean}>`
    width: 100%;
    padding-top: 24px;
    display: grid;
    grid-template-columns: ${({$isOpenMenu}) => ($isOpenMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)')};
    column-gap: 20px;
    row-gap: 50px;
`;

export const ShortsVideosContainer = styled.div<{$isOpenMenu: boolean, $showMoreShortsContent: boolean}>`
    width: 100%;
    height: ${({$showMoreShortsContent}) => ($showMoreShortsContent? 'min-content' : '540px')};
    overflow-y: hidden;
    padding: 24px 0;
    display: grid;
    grid-template-columns: ${({$isOpenMenu}) => ($isOpenMenu? 'repeat(4, 1fr)' : 'repeat(5, 1fr)')};
    column-gap: 20px;
    row-gap: 50px;
    margin-bottom: 30px;
`;

export const FooterShorts = styled.div`
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
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