import styled from "styled-components";

export const StyleContainer = styled.div`
  padding: 50px 50px;
  background-color: #161616;
`;

export const StyleSlide = styled.div``;

export const StyleFeaturedKOLs = styled.div``;
export const StyleFeaturedProject = styled.div``;

export const StyleTop = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const StyleBottom = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scrollbar-width: none;
`;

export const StyleLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
`;
export const StyleRight = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyleTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const StyleTrending = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  @media (max-width: 768px) {
    justify-content: start;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const StyleTrendingKOLs = styled.div`
  width: 100%;
`;

export const StyleTrendingTop = styled.div`
  margin-bottom: 10px;
`;

export const StyleTrendingTopCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyleTrendingProjects = styled.div`
  width: 100%;
`;

export const StyleTrendingProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyleTrendingCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
