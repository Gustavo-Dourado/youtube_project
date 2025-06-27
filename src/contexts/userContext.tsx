import { createContext, useContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { PageContext } from "./pageContext";

interface userProps{
    name: string,
    email: string,
    id: string
}

interface userContextInterface{
    createUser: (name: string, email: string, password: string) => void
    login: boolean
    user: userProps
    userName: string
    channel: string
    handleLogin: (email: string, password: string) => void
    logOut: () => void
    token: string
}

interface userStorageInterface{
    children: React.ReactNode
}

export const UserContext = createContext<userContextInterface>({} as userContextInterface);

export const UserStorage = ({ children }: userStorageInterface) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({} as userProps);
    const [userName, setUserName] = useState('');
    const [channel, setChannel] = useState(''); //Channel é a primeira letra do nome do usuário
    const [token, setToken] = useState(localStorage.getItem('token') as string);

    const { setIsHiddenHeaderAndMenu } = useContext(PageContext);
    const navigate = useNavigate()

    const createUser = (name: string, email: string, password: string) =>{
        api.post('/user/sign-up', {name, email, password}).then(() =>{
                console.log('Cadastro realizado com sucesso');
                alert('Usuário cadastrado com sucesso, por gentileza faça o login para começar a usar o youtube');
                setIsHiddenHeaderAndMenu(false);
                navigate('/sign-in')

        })
        .catch((error) =>{
            console.log('Falha ao realizar cadastro do usuário', error);
            if (error.response.status === 409){ //Erro 409 no backend email já existe
                 alert('Email já existe, por favor tente outro')
            } else{
                alert('Não foi possível criar usuário, verifique os dados e tente novamente')
            }
        })
    }

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setUserName(data.user.name);
            setChannel(data.user.name.substring(0, 1));
            setLogin(true);
        }).catch((error) => {
            console.log('Usuário não autenticado', error);
        })
    }

    useEffect(() => {
        getUser(token);
    }, [token])

    const handleLogin = (email: string, password: string) => {
            api.post('/user/sign-in', {email, password}).then(({ data }) => {  
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            setIsHiddenHeaderAndMenu(false); //Mostra header e Menu
            navigate('/')
        
            }).catch((error) => {
                alert('Usuário ou senha inválidos, por favor tente novamente')
                console.log('Não foi possível fazer o login', error);
            })
    }

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({name: '', email: '', id: ''});
        navigate('/')
    }

    return (
            <UserContext.Provider value={{
                createUser,
                login,
                user,
                userName,
                channel,
                handleLogin,
                logOut,
                token
            }}>
                { children }
            </UserContext.Provider>
    )
}

