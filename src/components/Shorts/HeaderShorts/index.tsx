import { ButtonContainer, ButtonIcon, Container, HeaderShortsElement } from "./styles";
import CloseIcon from "../../../assets/botao-fechar.png";
import ShortsIcon from "../../../assets/botao-play-color.png";

function HeaderShorts(){
    return (
        
        <Container>
            <HeaderShortsElement>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img alt="" src={ShortsIcon} style={{width: "24px", height: "24px"}}/>
                        <span style={{fontSize:"19px", fontWeight: "600", marginLeft: "8px"}}>Shorts</span>
                    </div>
                    <ButtonContainer>
                        <ButtonIcon alt="" src={CloseIcon} />
                    </ButtonContainer>
            </HeaderShortsElement>
        </Container>

    )
} 

export { HeaderShorts }