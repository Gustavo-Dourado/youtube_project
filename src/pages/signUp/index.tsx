import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
    PageContainer, MainContainer, ImageContainer, LoginContainer,
    InputContainer, Input, ButtonContainer, SignUpButton
} from "./styles";
import GoogleLogo from "../../assets/google-imagem.png";
import { UserContext } from "../../contexts/userContext";

function SignUp(){
    const { createUser } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [message, setMessage] = useState('') // mensagem para alterar os textos de validação dos campos das senhas, de acordo com a situação atual

    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

    const [isHiddenPasswords, setIsHiddenPasswords] = useState(true);

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const confirmPasswordRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate();

    useEffect(() =>{ // Dar o foco inicial no name Ref
      if(nameRef.current !== null){
        nameRef.current.focus()
      } 
    }, [])

    function handleCreateAccount(name: string, email: string, password: string){
      
      let isAllValid = true // variável para verificar se tos os campos são válidos

      if (confirmPassword.trim() === '' || confirmPassword.trim().length < 4){
        setMessage('A senha deve conter pelo menos 4 caracteres')
        setConfirmPasswordValid(false)
        isAllValid = false // Quando qualquer campo perde no teste da validação, a variável assume valor false
        confirmPasswordRef.current && confirmPasswordRef.current.focus()
      } else if(password.trim() === '' || confirmPassword.trim().length < 4){
        setMessage('A senha deve conter pelo menos 4 caracteres')
        setPasswordValid(false)
        isAllValid = false
        passwordRef.current && passwordRef.current.focus()
      } else if(confirmPassword !== password){
        setMessage('As senhas não conferem')
        setPasswordValid(false)
        setConfirmPasswordValid(false)
        isAllValid = false
        confirmPasswordRef.current && confirmPasswordRef.current.focus()
      } else{
        //Senhas válidas
        setPasswordValid(true)
        setConfirmPasswordValid(true)
      }

      if(email.trim() === ''){
        setEmailValid(false)
        isAllValid = false
        emailRef.current && emailRef.current.focus()
      } else if(!/\S+@\S+\.\S+/.test(email)){
        setEmailValid(false)
        isAllValid = false
        emailRef.current && emailRef.current.focus()
      } else{
        setEmailValid(true)
      }

      if (name.trim() === ''){
        setNameValid(false)
        isAllValid = false
        nameRef.current && nameRef.current.focus()
      } else {
        setNameValid(true)
      }

      if (isAllValid === false){
        //Caso em que existe algum campo inválido
        alert('Não foi possível criar a conta, revise seus dados e tente novamente')
      } else{
        //Caso passe em todas as validações faz a chamada da função para criar conta
        createUser(name, email, password);
      }
    }

    function moveLoginPage(){
      navigate('/sign-in');
    }
          
    return (
      <PageContainer>
        <MainContainer>
          <ImageContainer>
            <img style={{width: '60px', backgroundColor: '#ffffff'}}alt="Google Logo" src={GoogleLogo}/>
            <h1>Criar Conta</h1>
            <span>Crie sua conta no Youtube</span>
          </ImageContainer>
          <LoginContainer>
            <InputContainer $isValid={nameValid}>
              <Input $isValid={nameValid} 
                id='sign-name'
                ref={nameRef} 
                placeholder='Digite seu nome' 
                type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
              <span>Este campo não pode ficar vazio, por favor preencha seu nome</span>
            </InputContainer>

            <InputContainer $isValid={emailValid}>
              <Input $isValid={emailValid}
                id='sign-email'
                ref={emailRef} 
                placeholder='Digite seu email' 
                type='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Por favor preencha um email válido</span>
            </InputContainer>

            <InputContainer $isValid={passwordValid}>
              <Input
                $isValid={passwordValid}
                id='sign-password'
                ref={passwordRef} 
                minLength={4}
                required
                placeholder='Digite sua senha com mínimo de 4 caracteres' 
                type= {isHiddenPasswords? 'password' : 'text'} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>{message}</span>
            </InputContainer>

            <InputContainer $isValid={confirmPasswordValid}>
              <Input 
                $isValid={confirmPasswordValid}
                id='confirm-password' 
                ref={confirmPasswordRef}
                minLength={4}
                required
                placeholder='Confirme sua senha'
                type= {isHiddenPasswords? 'password' : 'text'} 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span>{message}</span>
            </InputContainer>

            <ButtonContainer>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <div>
                    <input 
                      type="checkbox" 
                      name="showPassword" 
                      id="showPassword" 
                      style={{cursor: 'pointer'}}
                      onChange={() => setIsHiddenPasswords(!isHiddenPasswords)}
                    />
                    <span style={{marginLeft: '5px'}}>Mostrar senha</span>
                  </div>
                  <span 
                    style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}} 
                    onClick={() => moveLoginPage()}>
                    Voltar para área de login
                  </span>
                </div>
              <SignUpButton onClick={() => handleCreateAccount(name, email, password)}> Criar Conta </SignUpButton>
            </ButtonContainer>

          </LoginContainer>
        </MainContainer>
      </PageContainer>
    )
} 

export { SignUp }