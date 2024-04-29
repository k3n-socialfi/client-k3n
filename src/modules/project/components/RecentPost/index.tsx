import { ButtonSecondary } from "@/components/ButtonCustom";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import PostUser from "@/modules/profile/components/PostUser";
import styled from "styled-components";

interface IPropRecentPost {
  dataPosts: any;
  isLoading?: boolean;
}
export default function RecentPosts({ dataPosts, isLoading }: IPropRecentPost) {
  return (
    <StyleBox>
      <Container>
        <StyleTitle>Recent posts</StyleTitle>
        <ServicesRight>
          <SeeAll>See all</SeeAll>
          <ButtonSecondary variant="outlined" colorBt="#F23581">
            Add New Services
          </ButtonSecondary>
        </ServicesRight>
      </Container>
      <Posts>
        {isLoading ? (
          <PostSkeleton />
        ) : dataPosts?.length > 0 ? (
          dataPosts?.map((item: any, index: number) => (
            <>
              <PostUser item={item} />
            </>
          ))
        ) : (
          <PostNotData>{`You haven't made any posts yet.`}</PostNotData>
        )}
      </Posts>
    </StyleBox>
  );
}

const StyleBox = styled.div`
  padding: 24px 14px;
  width: 100%;
  overflow-x: hidden;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyleTitle = styled.div`
  font-size: 40px;
  line-height: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServicesRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SeeAll = styled.div`
  color: #f23581;
  font-size: 18px;
  font-weight: 700;
`;

const Posts = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 24px;
  margin-right: 40px;
  margin-top: 50px;
`;

const PostNotData = styled.div`
  margin: 30px auto;
  color: #f23581;
`;
