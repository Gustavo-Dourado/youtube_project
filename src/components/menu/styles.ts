import styled from 'styled-components';

export const Container = styled.div<{$isOpenMenu: boolean}>`
    width: ${({$isOpenMenu}) => ($isOpenMenu? '250px' : '100px')};
    height: calc(100vh - 55px);
    padding: 10px 10px 10px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{$isOpenMenu: boolean}>`
    width: 100%;
    min-height: ${({$isOpenMenu}) => ($isOpenMenu? '45px' : '70px')};
    border-radius: 10px;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({$isOpenMenu}) => ($isOpenMenu? 'row' : 'column')};
    align-items: center;
    justify-content: ${({$isOpenMenu}) => ($isOpenMenu? 'none' : 'center')};
    
    
    .menu-item-span{
        width: min-content;
        font-weight: ${({$isOpenMenu}) => ($isOpenMenu? '600' : '400')};
        margin-top: ${({$isOpenMenu}) => ($isOpenMenu? 'none' : '5px')};
        margin-left: ${({$isOpenMenu}) => ($isOpenMenu? '20px' : 'none')};
        font-size: ${({$isOpenMenu}) => ($isOpenMenu? '14px' : '10px')};
        display: ${({$isOpenMenu}) => ($isOpenMenu? 'block' : 'flex')};
        text-align: center;
        overflow: hidden;
        white-space: ${({$isOpenMenu}) => ($isOpenMenu? 'nowrap' : 'wrap')};
        text-overflow: ${({$isOpenMenu}) => ($isOpenMenu? 'ellipsis' : 'clip')};
    }

    &:hover{
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img<{$isOpenMenu?: boolean}>`
    width: ${({$isOpenMenu}) => ($isOpenMenu? '24px' : '20px')};
`;

export const MenuItemContainer = styled.div<{$isOpenMenu: boolean}>`
    width: 98%;
    min-height: ${({$isOpenMenu}) => ($isOpenMenu? '45px' : '70px')};
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    :hover + .description-hover-button{
        display: flex;
    }
`;

export const DescriptionHoverButton = styled.div<{$isOpenMenu: boolean}>`
    width: max-content;
    box-sizing: border-box;
    padding: 10px;
    background-color: #ffffcc;
    display: none;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    font-size: 10px;
    position: relative;
    top: -20px;
    left: ${({$isOpenMenu}) => ($isOpenMenu? '60px' : '0px')};;
    z-index: 1;
`;