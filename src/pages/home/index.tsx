import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../contexts/pageContext";
import { UserContext } from "../../contexts/userContext";
import { TopBarFilters } from "../../components/topBarFilters"
import { YoutubeVideoComponents } from "../../components/youtubeVideoComponents";
import { ArrowButton, Container, ContentWithoutLogin, FooterShorts, ShortsVideosContainer, VideosContainer} from "./styles"
import { ShortVideoComponents } from "../../components/Shorts/ShortsVideoComponents";
import { HeaderShorts } from "../../components/Shorts/HeaderShorts";
import ArrowButtonIcon from "../../assets/setas-para-cima.png";
import api from "../../api";

interface FilterCategoryProps{
    filterName: string
    categoryId: number
}

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
    }
}

function Home(){

    const { isOpenMenu } = useContext(PageContext);
    const { login } = useContext(UserContext);

    const filterCategory = [
        {filterName:'Todos', categoryId: 0},
        {filterName:'Música', categoryId: 10},
        {filterName:'Esportes', categoryId: 17},
        {filterName:'Séries', categoryId: 23},
        {filterName:'Entretenimento', categoryId: 24},
        {filterName:'Games', categoryId: 20},
        {filterName:'Infantil', categoryId: 1},
        {filterName:'Notícias', categoryId: 25},
        {filterName:'Automóveis e veículos', categoryId: 2},
        {filterName:'Animais e Pets', categoryId: 15},
        {filterName:'Hits do momento', categoryId: 10},
        {filterName:'Viagens pelo Mundo', categoryId: 24},
        {filterName:'Educação', categoryId: 1},
        {filterName:'Comédia', categoryId: 23},
        {filterName:'Investimentos e finança', categoryId: 20},
        {filterName:'Ciências', categoryId: 15},
        {filterName:'Comunicação', categoryId: 10},
        {filterName:'Moda e estilo', categoryId: 23},
        {filterName:'Economia', categoryId: 25}
    ]

    const arrayShorts = [
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurn15f-W3IU2BGYxHHv8Vl3G7QSJwqYJOMw&s",
            title: 'Hugh Jackman provando comidas brasileiras',
            views: '1,4 mi de'
        },

        {
            id: 2,
            image: "https://i.ytimg.com/vi/4KIn2tt27N8/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLA5ThTIW5O7h4xGu-8EZlG5DmL6kw",
            title: 'Bolo de Caneca - Receita fit',
            views: '0,6 mi de'
        },

        {
            id: 3,
            image: "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2024/08/06/338098777-tatiana-weston-webb.jpg",
            title: 'Conquista de prata no surfe olímpico, Tati Weston-Webb',
            views: '2 mi de'
        },

        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTknDY5J4sXYdUqdpnao0X5mQuc0rxdni1l-Q&s",
            title: 'Entendendo hooks no reactJS',
            views: '4,1 mi de'
        }, 

        {
            id: 5,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBdbpTfc-Xog4uQ9ARq80Hd227UFyYg_J4g&s",
            title: 'Trilha para cachoeira do Buracão, Chapada Diamantina',
            views: '23 mil'
        },

        {
            id: 6,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDyWZflWTer4fGQy8C0rOYbACVbnVUDc_ww&s",
            title: 'Duda ex-Diamba se lança na carreira solo',
            views: '100 mil'
        }, 
    ]

    const [currentFilterActive, setCurrentFilterActive] = useState<FilterCategoryProps>(filterCategory[0])
    const categoryId = currentFilterActive.categoryId

    const [youtubeArray, setYoutubeArray] = useState<videoProps[]>([])
    const [showMoreShortsContent, setShowMoreShortsContent] = useState(false);


    const getVideosYoutube = (categoryId: number) =>{
        api.get('/videos/search-category', {params: {categoryId}}).then(({data}) =>{
            setYoutubeArray(data.videos)
        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() =>{
        getVideosYoutube(categoryId)
        // eslint-disable-next-line
    }, [currentFilterActive])

    return (
        <Container>
            {login? (
            <>
                <TopBarFilters
                currentFilterActive={currentFilterActive}
                setCurrentFilterActive={setCurrentFilterActive}
                filterCategory={filterCategory}
                />

                <VideosContainer $isOpenMenu={isOpenMenu}>
                    {youtubeArray.map((video : videoProps) => (
                        <YoutubeVideoComponents key={video.id} video={video} />
                    ))}
                </VideosContainer>
                
                <HeaderShorts/>

                <ShortsVideosContainer $isOpenMenu={isOpenMenu} $showMoreShortsContent={showMoreShortsContent} >
                    {arrayShorts.map((short) => (
                        <ShortVideoComponents key={short.id} short={short}/>
                    ))}
                </ShortsVideosContainer>

                <FooterShorts>
                    <ArrowButton 
                        alt="" 
                        src={ArrowButtonIcon} 
                        $showMoreContent={showMoreShortsContent}
                        onClick ={() => setShowMoreShortsContent(!showMoreShortsContent)}
                    />
                </FooterShorts>            
            </>
            ) : (
                    <ContentWithoutLogin>
                        <h3>Por gentileza faça uma pesquisa para começar</h3>
                        <p>Vamos selecionar os vídeos de acordo com o seu histórico de pesquisa para sua melhor experiência</p>
                    </ContentWithoutLogin>
            )}

        </Container>
    )
} 

export { Home }