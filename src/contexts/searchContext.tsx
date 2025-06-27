import api from "../api";
import { createContext, useState } from "react";

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

interface searchContextInterface{
    searchContent: string
    setSearchContent: (value: string) => void
    arrayVideosFound: videoProps[]
    setArrayVideosFound: (arrayVideos : videoProps[]) => void
    searchItem: (searchContent: string) => void
}

interface serachStorageInterface{
    children: React.ReactNode
}

export const SearchContext = createContext<searchContextInterface>({} as searchContextInterface)

export const SearchStorage = ({children} : serachStorageInterface) => {

    const [searchContent, setSearchContent] = useState('');
    const [arrayVideosFound, setArrayVideosFound] = useState<videoProps[]>([]);

    const searchItem = (searchContent: string) =>{
        api.get('/videos/search', {params: {searchContent}}).then(({data}) => {
            setArrayVideosFound(data.videos)    
        }).catch((error) =>{
            console.log(error)                   
        })
    }

    return(
        <SearchContext.Provider value={{
            searchContent,
            setSearchContent,
            arrayVideosFound,
            setArrayVideosFound,
            searchItem
        }}>
            {children}
        </SearchContext.Provider>
    )
}