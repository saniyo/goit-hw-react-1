import styled from 'styled-components';

export const UserCardContainer = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  background-color: lightgray;
  border-radius: 1px;
  /* border: 1px solid brown; */
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0px 3px 3px rgba(0, 0, 0, 0.14),
    0px 6px 3px rgba(0, 0, 0, 0.2);
`;

export const UserDescription = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 119px;
  margin-bottom: 30px;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const UserStats = styled.ul`
  margin: 0;
  display: flex;
  gap: 5px;
  justify-content: space-around;
  padding: 0;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex-basis: calc((100% - 10px) / 3);
  padding: 15px;
  background-color: darkgray;
`;

export const UserSpanStats = styled.span`
  font-weight: bold;
  color: black;
`;
