import HomeIcon from "../../assets/menuIcons/home.png";
import ShortsIcon from "../../assets/menuIcons/botao-play.png";
import InscriptionIcon from "../../assets/menuIcons/inscricao.png";

import CanalIcon from "../../assets/menuIcons/perfil-de-usuario.png";
import HistoricIcon from "../../assets/menuIcons/historico.png";
import PlayListIcon from "../../assets/menuIcons/playlist-de-musica.png";
import UserVideosIcon from "../../assets/menuIcons/filme.png";
import LaterVideosIcon from "../../assets/menuIcons/relogio.png";
import LikeIcon from "../../assets/menuIcons/gostar.png";

import FireIcon from "../../assets/menuIcons/fogo.png"; 
import ShoppingIcon from "../../assets/menuIcons/sacola-de-compras.png";  
import MusicIcon from "../../assets/menuIcons/music.png";
import FilmsIcon from "../../assets/menuIcons/claquete.png";
import LiveIcon from "../../assets/menuIcons/transmissao-ao-vivo.png";
import GamesIcon from "../../assets/menuIcons/controle-de-video-game.png";
import NoticesIcon from "../../assets/menuIcons/jornal.png";
import SportsIcon from "../../assets/menuIcons/trofeu.png";
import CoursesIcon from "../../assets/menuIcons/graduacao.png";
import PodcastsIcon from "../../assets/menuIcons/podcast.png";

import CazeTv from "../../assets/incricoes-img/CazeTV.jpg";
import YogaMudra from "../../assets/incricoes-img/YogaMudra.jpg";

import ConfigIcon from "../../assets/suporte-icons/definicoes.png"; 
import DenuncIcon from "../../assets/suporte-icons/bandeira.png";
import HelpIcon from "../../assets/suporte-icons/ajuda.png";
import FeedbackIcon from "../../assets/suporte-icons/feedback-do-cliente.png";


export const section_first = [
    {
      id: 1,
      name: 'Início',
      source: `${HomeIcon}`,
      link: '/'
    },

    {
      id: 2,
      name: 'Shorts', 
      source: `${ShortsIcon}`,
      link: '/Shorts'
    },

    {
      id: 3,
        name: 'Inscrições',
        source: `${InscriptionIcon}`,
        link: '/Inscriptions'
    }
]

export const section_user = [
    {
      id: 4,
      name: 'Seu canal',
      source: `${CanalIcon}`
    },

    {
      id: 5,
      name: 'Histórico',
      source: `${HistoricIcon}`
    },

    {
      id: 6,
      name: 'Playlists',
      source: `${PlayListIcon}`
    },

    {
      id: 7,
      name: 'Seus Vídeos',
      source: `${UserVideosIcon}`
    },

    {
      id: 8,
      name: 'Assistir mais tarde',
      source: `${LaterVideosIcon}`
    },

    {
      id: 9,
      name: 'Vídeos com "Gostei"',
      source: `${LikeIcon}`
    }
]

export const section_inscriptions = [
  {
    id: 10,
    name: 'Cazé TV',
    source: `${CazeTv}`
  },

  {
    id: 11,
    name: 'Yoga Mudra',
    source: `${YogaMudra}`
  }
]

export const section_explore = [  
  {
    id: 12,
    name: 'Em alta',          
    source: `${FireIcon}`
  },

  {
    id: 13,
    name: 'Shopping',
    source: `${ShoppingIcon}`
  },

  {
    id: 14,
    name: 'Música',
    source: `${MusicIcon}`
  },

  {
    id: 15,
    name: 'Filmes',
    source: `${FilmsIcon}`
  },

  {
    id: 16,
    name: 'Ao vivo',
    source: `${LiveIcon}`
  },

  {
    id: 17,
    name: 'Jogos',
    source: `${GamesIcon}`
  },

  {
    id: 18,
    name: 'Notícias',
    source: `${NoticesIcon}`
},

{
  id: 19,
  name: 'Esportes',
  source: `${SportsIcon}`
},

{
  id: 20,
  name: 'Cursos',
  source: `${CoursesIcon}`
},

{
  id: 21,
  name: 'Podcasts',
  source: `${PodcastsIcon}`
}
]

export const section_suport = [
  {
    id: 22,
    name: 'Configurações',
    source: `${ConfigIcon}`    
  },

  {
    id: 23,
    name: 'Histórico de denúncias',
    source: `${DenuncIcon}`
  },

  {
    id: 24,
    name: 'Ajuda',
    source: `${HelpIcon}`
  },

  {
    id: 25,
    name: 'Enviar feedback',
    source: `${FeedbackIcon}`
  }
]