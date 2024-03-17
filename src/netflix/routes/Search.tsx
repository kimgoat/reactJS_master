import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { IGetSearchResult, getSearch } from "../api";
import styled from "styled-components";
import { makeImgPath } from "../utils";
import { useEffect } from "react";

const Wrapper = styled.div`
  height: 100vh;
  padding-bottom: 200px;
`;
const Card = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  color: aliceblue;
`;

const Img = styled.div<{ itemPhoto: string }>`
  height: 250px;
  background-image: url(${(props) => props.itemPhoto});
  background-size: cover;
`;

const Title = styled.div`
  color: pink;
`;

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  const { isLoading, data, refetch } = useQuery<IGetSearchResult>(
    ["keyword", "search"],
    () => getSearch(`${keyword}`)
  );

  useEffect(() => {
    refetch();
  }, [keyword]);

  return (
    <Wrapper>
      {isLoading ? (
        <div>is Loading...</div>
      ) : (
        <Card>
          {data?.results.map((result) => (
            <Img itemPhoto={makeImgPath(result.poster_path)}>
              <Title>{result.original_title} </Title>
            </Img>
          ))}
        </Card>
      )}
    </Wrapper>
  );
}
export default Search;
