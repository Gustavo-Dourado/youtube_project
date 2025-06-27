import { ButtonContainer, ButtonIcon, FiltersButtonsContainer, TopBarFiltersContainer, VideoFilter } from "./styles";
import ArrowLeftIcon from "../../assets/seta-esquerda.png";
import ArrowRightIcon from "../../assets/seta-direita.png";

interface FilterCategoryProps{
    filterName: string
    categoryId: number
}

interface FilterContextInterface{
    currentFilterActive: FilterCategoryProps,
    setCurrentFilterActive: (filter : FilterCategoryProps ) => void,
    filterCategory: FilterCategoryProps[],
}

function TopBarFilters( {currentFilterActive, setCurrentFilterActive, filterCategory} : FilterContextInterface ){

    let isFilterActive: boolean;

    function scrollTopBar(direction: string){
        const element = document.getElementById('top-bar');

            if (direction === 'right'){
                
                element?.scrollBy({
                    left: 200,
                    behavior: 'smooth'
                })
            } else{ //Left                
                
                element?.scrollBy({
                    left: -200,
                    behavior: 'smooth'
                })
            }      
    } 
    
    return(
        <TopBarFiltersContainer>
            <ButtonContainer id='left-button' onClick={() => scrollTopBar('left')} $margin="0 12px 0 0" >
                <ButtonIcon alt="" src={ArrowLeftIcon}/>
            </ButtonContainer>

            <FiltersButtonsContainer id='top-bar'>
                {filterCategory.map((filter) => {
                    currentFilterActive.filterName === filter.filterName? isFilterActive = true : isFilterActive = false
                
                    return (
                        <VideoFilter 
                        key={filter.filterName}
                        $isFilterActive={isFilterActive} 
                        onClick={() => setCurrentFilterActive(filter)}
                        > 
                            {filter.filterName} 
                        </VideoFilter>
                )})}
            </FiltersButtonsContainer>

            <ButtonContainer id='right-button' onClick={() => scrollTopBar('right')} $margin="0 0 0 12px" >
                <ButtonIcon alt="" src={ArrowRightIcon}/>
            </ButtonContainer>

        </TopBarFiltersContainer>
    )
}

export { TopBarFilters }