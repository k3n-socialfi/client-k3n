import { IconCheck } from "@/assets/icons";
import { ButtonPrimary } from "@/components/ButtonCustom";
import { LinkCustom } from "@/components/CardFeaturedKOLs/style";
import Image from "next/image";
import styled from "styled-components";

interface IPropCardDeal {
  name?: string;
  title?: string;
  price?: string;
  image?: string;
  isIcon?: boolean;
  fontSize?: string;
}

export default function CardDeal({
  image,
  name,
  price,
  title,
  isIcon,
  fontSize,
}: IPropCardDeal) {
  const image1 =
    "https://s3-alpha-sig.figma.com/img/7ced/9416/2bdd4f76ed7acb376c32adcd351ada59?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VeFqZeM-G6rrKQSSn9bFkxhgkXykNKt5sIYTw0nmRBoFYVpbORjTmEZCLudDC7IhKWrs4~vSm0TQ1~Lt4cU5GaSuwjW9pBHwRbBySndBobMT0AB9~-n4Uhd0~ZtyC4AXDSN3gOphrgwbLqxb40r9QQBsRgd6dNqUljgKMdFfXkCFXmfdDVamq0ZsasmjyOvI~VY4jpEsI-AsxY5mVTFRuYWS0vWzPOruCokJQGhCmRMVEp~bRJ8nXAxiXvjkh3uW8mqs49qGpuTTRv21B91tgR03oPJMeqkoqasL6YhF0L7gqJp0u1xKdBwoqmeaL36rnCJ0RNmSF5B9TYoMWbr-1A__";
  return (
    <LinkCustom href="">
      <WrapperCardDeal>
        <CardImage width={100} height={100} src={image ?? image1} alt="" />
        <DealContent>
          <ContentFlex>
            <MainName>
              <SubName>Project</SubName>
              <Name>
                {name ?? "Solana"}
                {isIcon && <IconCheck />}
              </Name>
            </MainName>
            <Avartar src={image ?? image1} alt="" width={36} height={36} />
          </ContentFlex>
          <Line />

          <ContentFlex>
            <MainName>
              <SubName>Job tittle</SubName>
              <Name>{title ?? "X Content creation"}</Name>
            </MainName>
            <Avartar src={image ?? image1} alt="" width={36} height={36} />
          </ContentFlex>
          <Line />
          <ContentFlex>
            <MainName>
              <SubName>Price</SubName>
              <Name fontSize="16px">${`${price ?? "7,500"}`}</Name>
            </MainName>
            <WrapperButton>
              <ButtonPrimary fullWidth borderRadius="15px">
                Apply
              </ButtonPrimary>
            </WrapperButton>
          </ContentFlex>
        </DealContent>
      </WrapperCardDeal>
    </LinkCustom>
  );
}

const WrapperCardDeal = styled.div`
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 234px;
`;
const DealContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MainName = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;
const SubName = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #919191;
`;
const Name = styled.span<IPropCardDeal>`
  font-size: ${({ fontSize }) => fontSize ?? "14px"};
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
`;

const Avartar = styled(Image)`
  width: 36px;
  height: 36px;
  border-radius: 100%;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #242932;
`;

const WrapperButton = styled.div`
  width: 50%;
`;
