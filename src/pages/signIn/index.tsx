import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../contexts/userContext";
import { PageContext } from "../../contexts/pageContext";
import { useNavigate } from "react-router-dom";
import { 
  PageContainer, MainContainer, ImageContainer, LoginContainer,
   InputContainer, Input, ButtonContainer, LoginButton, 
} from "./styles";
import GoogleLogo from "../../assets/google-imagem.png";

function SignIn(){

    const { handleLogin } = useContext(UserContext);
    const { setIsHiddenHeaderAndMenu } = useContext(PageContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const [isHiddenPassword, setIsHiddenPassword] = useState(true);

    const isEmailRef = useRef<HTMLInputElement>(null);
    const isPasswordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    useEffect(() => {
      setIsHiddenHeaderAndMenu(true); //Sempre que recarregar a página vai esconder o menu e o header
    })

    function moveToSignUpPage(){
      setIsHiddenHeaderAndMenu(true);
      navigate('/sign-up');
    }

    function doLoginAndGoToHomePage(){

        let isAllValids = true;

        if (password.trim() === ''){
          setIsPasswordValid(false)
          isAllValids = false
          isPasswordRef.current && isPasswordRef.current.focus()   
        } else{
          setIsPasswordValid(true)
        }

        if (email.trim() === ''){
          setIsEmailValid(false)
          isAllValids = false
          isEmailRef.current && isEmailRef.current.focus()
        } else if(!/\S+@\S+\.\S+/.test(email)){
          setIsEmailValid(false)
          isAllValids = false
          isEmailRef.current && isEmailRef.current.focus() 
        } else{
          setIsEmailValid(true)
        }

        if (isAllValids === false){
          alert('Não foi possível realizar o Login, revise seus dados e tente novamente')
        } else {
          handleLogin(email, password) //Tenta realizar o login
        }
    }
      
    return (
      <PageContainer>
        <MainContainer>
          <ImageContainer>
            <img style={{width: '60px', backgroundColor: '#ffffff'}}alt="Google Logo" src={GoogleLogo}/>
            <h1>Fazer Login</h1>
            <span>Prosseguir no Youtube</span>
          </ImageContainer>
          <LoginContainer>
            <InputContainer $isValid={isEmailValid}>
              <Input 
                $isValid={isEmailValid}
                ref={isEmailRef}
                id='login-email' 
                placeholder='Digite seu email' 
                type='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Por favor digite um email válido</span>
            </InputContainer>
            <InputContainer $isValid={isPasswordValid}>
              <Input
                $isValid={isPasswordValid}
                ref={isPasswordRef}
                id='login-password' 
                placeholder='Digite sua senha' 
                type={isHiddenPassword? 'password' : 'text'} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Por favor digite sua senha</span>
            </InputContainer>
            <ButtonContainer>
              <div style={{display: 'flex', flexDirection: 'column', fontSize: '14px'}}>
                  <div style={{display: 'flex', marginBottom: '5px'}}>
                    <input 
                      type="checkbox" 
                      name="show-password" 
                      id="show-password" 
                      style={{cursor: 'pointer'}}
                      onChange={() => setIsHiddenPassword(!isHiddenPassword)}
                      />
                    <span style={{marginLeft: '5px'}}>Mostrar senha</span>
                  </div> 

                <span>Ainda não nem cadastro?</span>
                <div
                  style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}}
                  onClick={() => moveToSignUpPage()}>
                  Fazer Cadastro no Youtube
                </div>
              </div>
              <LoginButton onClick={() => doLoginAndGoToHomePage()}> Login </LoginButton>
            </ButtonContainer>
          </LoginContainer>
        </MainContainer>
      </PageContainer>
    )
} 

export { SignIn }