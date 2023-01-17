import styled from 'styled-components';

export const UserCardContainer = styled.ul`
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
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0px 3px 3px rgba(0, 0, 0, 0.14),
    0px 6px 3px rgba(0, 0, 0, 0.2);
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

export const UserImg = styled.img`
  width: 119px;
  margin-bottom: 30px;
`;

export const UserName = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

