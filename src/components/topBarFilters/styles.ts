import styled from "styled-components";

export const TopBarFiltersContainer = styled.div`
    width: 100%;
    max-width: 1250px;
    box-sizing: border-box;
    height: 45px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 24px;
    overflow: hidden;
    flex-wrap: nowrap; 
`;

export const FiltersButtonsContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
`;

export const VideoFilter = styled.div<{ $isFilterActive? : boolean}>`
    width: max-content;
    height: 30px;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 12px;
    margin-right: 12px;
    color: ${({$isFilterActive})  => $isFilterActive? '#ffffff' : '000000'};
    background-color: ${({$isFilterActive}) => $isFilterActive? '#101010' : '#F0F0F0'};
    display: flex;
    flex-shrink: 0;
    cursor: pointer;

    &:hover  {
        background-color: ${({$isFilterActive})  => $isFilterActive? '#101010' : '#B8B8B8'};
    }
`;

export const ButtonContainer = styled.div<{$margin?: string;}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    margin: ${({$margin}) => $margin? $margin : '0px'};

    &:hover{
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 16px;
    opacity: 70%;
`;