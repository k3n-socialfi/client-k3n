import Image from "next/image";
import styled from "styled-components";

interface IPropsCardHotKols {
  number?: number;
  avatar?: string;
  name?: string;
  des?: string;
}
export default function CardHotKols({
  avatar,
  des,
  name,
  number,
}: IPropsCardHotKols) {
  const avatarDefault = "";
  return (
    <WrapperCardHotKols>
      <HotKolsNumber>{number}</HotKolsNumber>
      <HotKolsContent>
        <HotKolsAvartar
          width={48}
          height={48}
          src={avatar ?? avatarDefault}
          alt="avatar"
        ></HotKolsAvartar>
        <HotKolsInfo>
          <HotKolsName>{name ?? "name"}</HotKolsName>
          <HotKolsDes>{des ?? "202 jobs completed"}</HotKolsDes>
        </HotKolsInfo>
      </HotKolsContent>
    </WrapperCardHotKols>
  );
}
const WrapperCardHotKols = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 340px;
  height: 80px;
`;
const HotKolsNumber = styled.div`
  color: #fff;
  font-size: 18px;
`;
const HotKolsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const HotKolsAvartar = styled(Image)`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: 3px solid #82ebff;
`;
const HotKolsInfo = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
const HotKolsName = styled.div`
  font-size: 18px;
  color: #82ebff;
  white-space: normal;
`;
const HotKolsDes = styled.div`
  font-size: 16px;
  color: #b9b9b9;
`;
