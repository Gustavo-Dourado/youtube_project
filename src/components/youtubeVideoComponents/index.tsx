import { FormatVideoDate} from "../../functions/formatDataVideo"
import { BannerImg, ChannelImg, Container, TextCard, TextContainer, Title, TitleContainer } from "./styles"

interface videoProps{
    id: string,
    snippet: {
        title: string,
        channelTitle: string,
        description: string,
        publishedAt: string,
        thumbnails: {
            high: {
                url: string,
            }
            maxres: {
                url: string,
            }
        }
    },
}

interface YoutubeVideoComponentsProps {
    video: videoProps; // Definindo que a prop 'video' é do tipo 'videoProps'
  }
  
function YoutubeVideoComponents( {video} : YoutubeVideoComponentsProps ){

    const image = video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url
    const firstLetterChannel = video.snippet.channelTitle.substring(0, 1).toUpperCase()

    //LINHA ABAIXO DESCONTINUADA POIS A API DO YOUTUBE NÂO RETORNA MAIS AS VIEWCOUNTS
    /*
        //Formatação dos views 
        const formmattedViews = FormatVideoViews(video.statistics.viewCount)
    */

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
                <TextCard>{/*{formmattedViews} visualizações -*/}{formattedDate}</TextCard> 
            </TextContainer>
        </TitleContainer>
       </Container>
    )
} 

export {YoutubeVideoComponents}