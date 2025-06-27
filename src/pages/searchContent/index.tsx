import { useContext } from "react";
import { PageContext } from "../../contexts/pageContext";
import { Container, VideosContainer } from "./styles"
import { SearchContext } from "../../contexts/searchContext";
import { SearchVideoComponents } from "../../components/searchVideoComponents";

function SearchContent(){

    const { isOpenMenu } = useContext(PageContext);
    
    
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

    const { arrayVideosFound } = useContext(SearchContext);
    
    return (
        <Container>
                <VideosContainer $isOpenMenu={isOpenMenu}>
                    {arrayVideosFound.map((video : videoProps) => (
                        <SearchVideoComponents key={video.id.videoId} video={video} />
                    ))}
                </VideosContainer>
        </Container>
    )
}

export { SearchContent }