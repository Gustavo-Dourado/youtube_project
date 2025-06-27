import { FormatVideoDate } from "../../functions/formatDataVideo"
import { BannerImg, ChannelImg, Container, TextCard, TextContainer, Title, TitleContainer } from "./styles"

interface videoProps{
    id: {
        videoId: string,
    },
    snippet: {
        title: string,
        channelTitle: string,
        description: string,
        publishedAt: string,
        thumbnails: {
            high: {
                url: string,
            }
            maxres?: {
                url: string,
            }
        }
    },
}

interface SearchVideoComponentsProps {
    video: videoProps; // Definindo que a prop 'video' é do tipo 'videoProps'
  }
  
function SearchVideoComponents( {video} : SearchVideoComponentsProps ){

    const image = video.snippet.thumbnails.high?.url
    
    const firstLetterChannel = video.snippet.channelTitle.substring(0, 1).toUpperCase()

    //Importando função que faz a formatacao da data de publicação
    const formattedDate = FormatVideoDate(video.snippet.publishedAt)

    return (
       <Container>
        <BannerImg src={image}/> 
                
        <TitleContainer>
            <ChannelImg>
                {firstLetterChannel}
            </ChannelImg>
            <TextContainer>
                <Title>{video.snippet.title}</Title>
                <TextCard>{video.snippet.description}</TextCard>
                <TextCard>{formattedDate}</TextCard>
            </TextContainer>
        </TitleContainer>
       </Container>
    )
} 

export {SearchVideoComponents}