import { BannerImg, Container, TextCard, TextContainer, Title, TitleContainer } from "./styles"

interface shortProps{
    short: {
        image: string,
        title: string,
        views: string
    }
}

function ShortVideoComponents({short} : shortProps){
    return (
       <Container>
        <BannerImg src={short.image}/> 
       
        <TitleContainer>
            <TextContainer>
                <Title>{short.title}</Title>
                <TextCard>{short.views} visuzlizações</TextCard>
            </TextContainer>
        </TitleContainer>
       </Container>

    )
} 

export { ShortVideoComponents }