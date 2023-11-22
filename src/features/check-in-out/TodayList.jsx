import styled from "styled-components";
import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledTodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function TodayList() {
  const { activities, isLoading } = useTodayActivity();

  if (isLoading) return <Spinner />;

  //activities?.length === 0
  if (!activities?.length) return <NoActivity>No activity today...</NoActivity>;

  return (
    <StyledTodayList>
      {activities?.map((activity) => (
        <TodayItem key={activity.id} activity={activity} />
      ))}
    </StyledTodayList>
  );
}

export default TodayList;
