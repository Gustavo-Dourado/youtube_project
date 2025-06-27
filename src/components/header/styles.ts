import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #ffffff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{$margin?: string, $zIndex? : number}>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({$margin}) => $margin ? $margin : 0};
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: ${({$zIndex}) => $zIndex === 2 ? 2 : 1}; //Apenas o botão do usuário ficará por cima do menudropdown

    &:hover{
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const ClearSearchContainer = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover{
        background-color: #f2f2f2;
    }
`

export const SearchButton = styled.div`
    width: 70px;
    height: 35px;
    background-color: #f8f8f8;
    border-radius: 0 40px 40px 0;
    border: 1px solid #d3d3d3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const HeaderButtons = styled.div`
    width: max-content;
    display: flex;
    position: relative;
`;

export const FullScreen = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
`

export const DropDownContainer = styled.div`
    display: flex;
    width: min-content;
    flex-direction: column;
    row-gap: 15px;
    padding: 10px;
    position: absolute;
    top: 50px;
    right: 20px;
    z-index: 2;
    text-align: center;
    border: 1px solid #000000;
    border-radius: 8px;
    background-color: #F8F8F8;
    box-shadow: 3px 3px #707070;

    div{
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    div img{
        width: 20px;
        margin-right: 10px;
    }
`;

export const LoginButton = styled.div`
    width: 130px;
    height: 35px;
    box-sizing: border-box;
    padding: 4px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border: 2px solid #d3d3d3;
    border-radius: 40px;
    cursor: pointer;
    
    div{
        display: flex;
        align-items: flex-end;
    }

    div img{
        width: 20px;       
    }

    span{
        color: #004aad;       
        transform: translateY(-10%);
    }
`;