import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const VideosContainer = styled.div<{$isOpenMenu: boolean}>`
    width: 100%;
    padding-top: 24px;
    display: grid;
    grid-template-columns: ${({$isOpenMenu}) => ($isOpenMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)')};
    column-gap: 20px;
    row-gap: 50px;
`;