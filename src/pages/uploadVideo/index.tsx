import { useContext, useRef, useState } from "react";
import { 
        ChannelContainer, Container, ContentWithoutLogin, ButtonContainer,
        DescriptionsContainer, Input, InputContainer, LoginContainer, MainContainer, TopContainer, UploadButton
    } from "./styles";
import { UserContext } from "../../contexts/userContext";
import { VideoContext } from "../../contexts/videoContext";
import { useNavigate } from "react-router-dom";

function UploadVideo(){

    const { login, userName, channel, user } = useContext(UserContext);
    const { createVideo } = useContext(VideoContext);

    const user_id = user.id;

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [isImageValid, setIsImageValid] = useState(true);
    const [isTitleValid, setIsTitleValid] = useState(true);

    const imageRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate()

    let alertMessage; // Criada variável para indicar ao usuário quando atingir limite de 200 caracteres na url da imagem

    function tryToUploadVideo(){
        let isAllValid = true

        if(title.trim() === ''){
            setIsTitleValid(false)
            titleRef.current && titleRef.current.focus()
            isAllValid = false
        } else{
            setIsTitleValid(true)
        }

        if(image.trim() === ''){
            setIsImageValid(false)
            imageRef.current && imageRef.current.focus()
            isAllValid = false
        } else {
            setIsImageValid(true)
        }

        if (isAllValid === false){
            alert('Não foi possível enviar o vídeo, por favor verifique as informações e tente novamente')
        } else{
            //Gerar número aleatório de 0 a 5 milhões de views como string
            const views = (Math.floor(Math.random() * 5000000)).toString();
            //Data de publicação do vídeo em formato de string
            const upload_date = new Date().toISOString()

            createVideo(user_id, image, title, description, channel, views, upload_date);  
        }
    }

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
                    </DescriptionsContainer>
                </TopContainer>

                <MainContainer>
                    <h3>Faça o Upload do seu vídeo aqui</h3>
                    <LoginContainer>
                      <InputContainer $isValid={isImageValid}>
                        <label htmlFor='image-video' className='label'>Endereço da imagem de fundo</label>
                        <Input 
                            id='image-video'
                            $isValid={isImageValid}
                            ref={imageRef} 
                            type='url' 
                            value={image} 
                            maxLength={200}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <span> {alertMessage || 'Por favor digite um endereço de imagem'}</span>
                      </InputContainer>

                      <InputContainer $isValid={isTitleValid}>
                        <label htmlFor='title-video' className='label'>Título do vídeo</label>
                        <Input
                            id='title-video' 
                            $isValid={isTitleValid}
                            ref={titleRef}
                            type='text' 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <span>Por favor digite um título para o vídeo</span>
                      </InputContainer>

                      <InputContainer>
                        <label htmlFor='description-video' id='description-video-id' className='label'>Descrição (opcional)</label>
                        <textarea 
                            id='description-video' 
                            rows={4} 
                            cols={51} 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                      </InputContainer>

                      <ButtonContainer>
                            <div 
                                style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}} 
                                onClick={() => navigate('/user-channel')}
                            >
                                Voltar para vídeos do seu canal
                            </div>
                            <UploadButton onClick={() => tryToUploadVideo()}> Upload Vídeo </UploadButton>
                      </ButtonContainer>

                    </LoginContainer>
                </MainContainer>
            </>
            ) : (
                    <ContentWithoutLogin>
                        <h3>Faça login para fazer upload do seu vídeo</h3>
                        <p></p>
                    </ContentWithoutLogin>
            )}

        </Container>
    )
} 

export { UploadVideo }