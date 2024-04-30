import ComPletedProject from "@/modules/payment/components/CompletedProject";
import styled from "styled-components";

export default function TableProject() {
  return (
    <WrapperTable>
      <WraperTitle>
        <StyleTitle>Completed Project</StyleTitle>
        <SeeAll>View all</SeeAll>
      </WraperTitle>
      <ComPletedProject />
    </WrapperTable>
  );
}

const WrapperTable = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
`;

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 51px;
  font-weight: 700;
  padding-bottom: 24px;
`;

const WraperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SeeAll = styled.div`
  color: #f23581;
  font-size: 18px;
  font-weight: 700;
`;
