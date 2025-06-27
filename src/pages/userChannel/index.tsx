import { useContext, useEffect} from "react";
import { PageContext } from "../../contexts/pageContext";
import { UserVideoComponents } from "../../components/userVideoComponents";
import {
        ChannelContainer, Container, ContentWithoutLogin, DescriptionsContainer, 
        TopContainer, UploadButton, VideosContainer
    } from "./styles";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { VideoContext } from "../../contexts/videoContext";


function UserChannel(){

interface userVideosArrayInterface{
        video_id?: string,
        user_id?: string,
        image: string,
        title: string,
        description: string,
        channel: string,
        views: string,
        upload_date: string
    }

    const { isOpenMenu } = useContext(PageContext);
    const { login, user, userName, channel } = useContext(UserContext);
    const { arrayVideos, getUserVideos } = useContext(VideoContext);

    const navigate = useNavigate();

    useEffect(() => {
        getUserVideos(user.id)
        // eslint-disable-next-line
    }, [user.id])

    return (
        <Container>
            {login? (
            <>
                <TopContainer>
                    <ChannelContainer>
                    {channel} 
                    </ChannelContainer>
                    <DescriptionsContainer>
                        <span>Seu canal</span>
                        <h1>{userName}</h1>
                        <UploadButton onClick={() => navigate('/create-video')}>Fazer Upload</UploadButton>
                    </DescriptionsContainer>
                </TopContainer>

                <h3 style={{alignSelf: 'flex-start', marginTop: '10px'}}>Vídeos do seu canal</h3>

                <VideosContainer $isOpenMenu={isOpenMenu}>
                    {arrayVideos.map((video : userVideosArrayInterface) => (
                        <UserVideoComponents key={video.video_id} video={video} />
                    ))}
                </VideosContainer>    
            </>
            ) : (
                    <ContentWithoutLogin>
                        <h3>Faça login para ter acesso ao seu canal</h3>
                        <p>
                            Entre em sua conta e faça upload de vídeos para o seu canal, 
                            o que você tem de bom para compartilhar com o mundo? Vai fundo!
                        </p>
                    </ContentWithoutLogin>
            )}

        </Container>
    )
} 

export { UserChannel }