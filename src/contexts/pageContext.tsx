import { createContext, useState } from "react";

interface menuContextInterface{
    isOpenMenu: boolean,
    setIsOpenMenu: (isOpenMenu: boolean) => void,
    isHiddenHeaderAndMenu: boolean,
    setIsHiddenHeaderAndMenu: (isOpenMenu: boolean) => void
}

interface menuStoreInterface{
    children: React.ReactNode
}

export const PageContext = createContext<menuContextInterface>({} as menuContextInterface);

export const PageStorage = ({ children }: menuStoreInterface) => {

    const [isOpenMenu, setIsOpenMenu] = useState(true)
    const [isHiddenHeaderAndMenu, setIsHiddenHeaderAndMenu] = useState(false);

    return(
        <PageContext.Provider value={{
            isHiddenHeaderAndMenu,
            setIsHiddenHeaderAndMenu,
            isOpenMenu,
            setIsOpenMenu
        }}>
            { children }
        </PageContext.Provider>
    )
}