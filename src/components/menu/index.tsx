import { ButtonIcon, Container, MenuItemContainer, DescriptionHoverButton, MenuItem } from './styles';
import { useContext } from "react";
import { section_first, section_user, section_inscriptions, section_explore, section_suport } from "./arrayIcons";
import ArrowRigthIcon from "../../assets/menuIcons/seta-direita.png";
import { useNavigate } from 'react-router-dom';
import { PageContext } from '../../contexts/pageContext';
import { VideoContext } from '../../contexts/videoContext';
import { UserContext } from '../../contexts/userContext';

function Menu(){

    const { isOpenMenu, isHiddenHeaderAndMenu } = useContext(PageContext);
    const { user, login } = useContext(UserContext);
    const { getUserVideos } = useContext(VideoContext);

    const itemsMenu_first = section_first;
    const itemsMenu_user = section_user;
    const itemsMenu_inscriptions = section_inscriptions;
    const itemsMenu_explore = section_explore;
    const itemsMenu_suport = section_suport;

    const navigate = useNavigate();

    const activeFunction = (item: string) => {
        if(item === 'Seu canal'){
            getUserVideos(user.id);
            navigate('/user-channel');
        } 
    }
    
    return(
        <>
            {!isHiddenHeaderAndMenu&& (
                <Container $isOpenMenu={isOpenMenu}>
                    {/* Seção 1 */}
                    {itemsMenu_first.map((item) => (
                        <MenuItemContainer key={item.id} $isOpenMenu={isOpenMenu}>

                           <MenuItem $isOpenMenu={isOpenMenu} onClick={() => navigate(item.link)}>
                               <ButtonIcon alt="" src={item.source} $isOpenMenu={isOpenMenu}/>
                               <span className="menu-item-span">{item.name}</span>
                           </MenuItem>
                               <DescriptionHoverButton $isOpenMenu={isOpenMenu} className="description-hover-button">{item.name}</DescriptionHoverButton>
                        </MenuItemContainer>
                    ))}

                    {/* Seção 2 */}
                    {login&& (
                        <>                           
                            <div style={{width: '98%',border: '1px solid #f2f2f2',margin: '10px 0'}}></div> {/* Separador de seção */}
                            <MenuItem $isOpenMenu={isOpenMenu} style={{fontSize: '16px',fontWeight: 'bold'}}>
                                <span>Você</span>
                                <img 
                                alt=""
                                src={ArrowRigthIcon}
                                style={{width: '16px', opacity: '70%', margin: ' 3px 0 0 3px'}}
                                />
                            </MenuItem>

                            {itemsMenu_user.map((item) => (   
                                <MenuItemContainer key={item.id} $isOpenMenu={isOpenMenu}>   
                                   <MenuItem $isOpenMenu={isOpenMenu} onClick={() => activeFunction(item.name)}>
                                       <ButtonIcon alt="" src={item.source} $isOpenMenu={isOpenMenu}/>
                                       <span className="menu-item-span">{item.name}</span>
                                   </MenuItem>
                                   <DescriptionHoverButton $isOpenMenu={isOpenMenu} className="description-hover-button">{item.name}</DescriptionHoverButton>
                                </MenuItemContainer>
                                          
                            ))}
                        </>
                    )}
                                            
                    {/* Seção 3 */}
                        {login&& (
                            <>  
                                <div style={{width: '98%',border: '1px solid #f2f2f2',margin: '10px 0'}}></div> {/* Separador de seção */}
                                <MenuItem $isOpenMenu={isOpenMenu} style={{fontSize: '16px',fontWeight: 'bold', textAlign: 'center'}}>
                                    Inscrições
                                </MenuItem>

                                {itemsMenu_inscriptions.map((item) => (
                                    <MenuItemContainer key={item.id} $isOpenMenu={isOpenMenu}>
                                       <MenuItem $isOpenMenu={isOpenMenu}>
                                           <ButtonIcon alt="" src={item.source} style={{borderRadius: '50%'}} $isOpenMenu={isOpenMenu}/>
                                           <span className="menu-item-span" style={{flexShrink: '1'}}>{item.name}</span>
                                       </MenuItem>
                                           <DescriptionHoverButton $isOpenMenu={isOpenMenu} className="description-hover-button">{item.name}</DescriptionHoverButton>
                                    </MenuItemContainer>
                                ))}
                            </>
                        )}

                    {/* Seção 4 */}
                        <>  
                            <div style={{width: '98%',border: '1px solid #f2f2f2',margin: '10px 0'}}></div> {/* Separador de seção */}
                            <MenuItem $isOpenMenu={isOpenMenu} style={{fontSize: '16px',fontWeight: 'bold', textAlign: 'center'}}>
                             Explorar
                            </MenuItem>

                            {itemsMenu_explore.map((item) => (
                                <MenuItemContainer key={item.id} $isOpenMenu={isOpenMenu}> 
                                   <MenuItem $isOpenMenu={isOpenMenu}>
                                       <ButtonIcon alt="" src={item.source} $isOpenMenu={isOpenMenu}/>
                                       <span className="menu-item-span">{item.name}</span>
                                   </MenuItem>
                                       <DescriptionHoverButton  $isOpenMenu={isOpenMenu} className="description-hover-button">{item.name}</DescriptionHoverButton>
                                </MenuItemContainer>
                            ))}
                        </>
                   
                    {/* Separador de seção */}
                    <div style={{width: '98%',border: '1px solid #f2f2f2',margin: '10px 0'}}></div> 

                    {/* Seção 5 */}
                        {itemsMenu_suport.map((item) => (
                            <MenuItemContainer key={item.id} $isOpenMenu={isOpenMenu}>
                               <MenuItem $isOpenMenu={isOpenMenu}>
                                   <ButtonIcon alt="" src={item.source} $isOpenMenu={isOpenMenu}/>
                                   <span className="menu-item-span" >
                                     {item.name}
                                   </span>
                               </MenuItem>
                                   <DescriptionHoverButton $isOpenMenu={isOpenMenu} className="description-hover-button">{item.name}</DescriptionHoverButton>
                            </MenuItemContainer>
                        ))}
                </Container>
            )}
        </>
    )
}

export { Menu };