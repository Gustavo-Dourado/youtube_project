import { 
    ButtonContainer,
    ButtonIcon, 
    Container, 
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons,
    DropDownContainer,
    LoginButton,
    FullScreen,
    ClearSearchContainer
} from "./styles";
import HamburguerIcon from "../../assets/menu-hamburger.png";
import ClearSearchButton from "../../assets/botao-fechar.png";
import YoutubeLogo from "../../assets/YouTube-Logo.png";
import SearchIcon from "../../assets/search.png";
import MicIcon from "../../assets/microfone-gravador.png";
import VideoIcon from "../../assets/video.png";
import NotificationIcon from "../../assets/sino.png";
import HelpIcon from "../../assets/suporte-icons/ajuda.png";
import ConfigIcon from "../../assets/suporte-icons/definicoes.png";
import LogOutIcon from "../../assets/sair.png";
import UserIcon from "../../assets/user.png";

import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { PageContext } from "../../contexts/pageContext";
import { SearchContext } from "../../contexts/searchContext";

function Header(){
    
    const { login, logOut, channel } = useContext(UserContext);
    const { isOpenMenu, 
            setIsOpenMenu,
            isHiddenHeaderAndMenu, 
            setIsHiddenHeaderAndMenu
        } = useContext(PageContext);

    const { setSearchContent, searchContent, searchItem } = useContext(SearchContext);
    
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const clearIconRef = useRef<HTMLInputElement | null>(null)
    
    const navigate = useNavigate();

    function moveToPageLogin(){
        setIsHiddenHeaderAndMenu(true);
        navigate('/sign-in');
    }

    function closeDropDownMenu() {
        setIsDropDownOpen(false);
    }

    function searchVideos(){
        searchItem(searchContent)
        navigate('/search-content')
        if(clearIconRef.current){
            clearIconRef.current.value = ''
        }
    }

    function clearSearchContent(){
        if(clearIconRef.current){
            clearIconRef.current.value = ''
        }
    }

    return(
        <>
            {isHiddenHeaderAndMenu? (
                <div></div>
             ) : (
                <Container>
                    <LogoContainer>
                        <ButtonContainer onClick={() => setIsOpenMenu(!isOpenMenu)} $margin='0 10px 0 0'>
                            <ButtonIcon  alt="" src={HamburguerIcon}/>
                        </ButtonContainer>
                        <img
                            style={{cursor: 'pointer', width: '100px'}} 
                            alt=""
                            src={YoutubeLogo}
                        />
                    </LogoContainer>

                    <SearchContainer>
                        <SearchInputContainer>
                            <SearchInput 
                                name='search-content'
                                ref={clearIconRef}
                                placeholder='Pesquisar'
                                onChange={(e) => setSearchContent(e.target.value)}
                            />
                            <ClearSearchContainer>
                                <ButtonIcon
                                    style={{opacity: '50%'}}
                                    alt='Clear Search Content Button'
                                    src={ClearSearchButton}
                                    onClick={() => clearSearchContent()}
                                    />
                            </ClearSearchContainer>
                        </SearchInputContainer>
                        <SearchButton>
                            <ButtonIcon 
                                alt="" 
                                src={SearchIcon}
                                onClick={() => searchVideos()}
                            />
                        </SearchButton>
                        <ButtonContainer $margin='0 0 0 10px'>
                            <ButtonIcon alt ="" src={MicIcon}/>
                        </ButtonContainer>
                    </SearchContainer>

                    {login? (
                        <HeaderButtons>
                            <ButtonContainer $margin='0 10px 0 0'>
                                <ButtonIcon alt="" src={VideoIcon}/>
                            </ButtonContainer>
                            <ButtonContainer $margin='0 10px 0 0'>
                                <ButtonIcon alt="" src={NotificationIcon}/>
                            </ButtonContainer>                            
                            <ButtonContainer 
                                onClick={() => setIsDropDownOpen(!isDropDownOpen)} 
                                $margin='0 10px 0 0'
                                $zIndex={2}>
                                {channel}
                            </ButtonContainer>
                        </HeaderButtons>     
                    ) : (
                        <LoginButton onClick={() => moveToPageLogin()}>
                            <div>
                                <img alt="" src={UserIcon} />
                            </div>
                            <span>Fazer Login</span>
                        
                        </LoginButton>
                    )}
                            
                            {isDropDownOpen&&(
                                <FullScreen onClick={() => closeDropDownMenu()}>
                                    <DropDownContainer id='menu-dropdown'>
                                        <div onClick={() => closeDropDownMenu()}>
                                            <img alt="Símbolo de Ajuda" src={HelpIcon} />
                                            Ajuda
                                        </div>
                                        <div onClick={ () => closeDropDownMenu()}>
                                            <img alt="Símbolo de configurações" src={ConfigIcon} />
                                            Configurações
                                        </div>
                                            <div onClick={() => {closeDropDownMenu(); logOut()}}>
                                            <img alt="Símbolo de Sair" src={LogOutIcon} />
                                            Sair
                                        </div>
                                    </DropDownContainer>
                                </FullScreen>
                            )}
                </Container>
            )}
        </>    
    )
}
    
export { Header } 