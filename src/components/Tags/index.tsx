import { ITag, tagsBg, tagsColor } from "@/utils/tag";
import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface ITagsProps {
  dataTag: string[];
}

interface IItemTag {
  bg?: string;
  color?: string;
}

const Tags = ({ dataTag = [] }: ITagsProps) => {
  return dataTag.map((item) => (
    <ItemTag
      key={item}
      bg={tagsBg[item as keyof ITag]}
      color={tagsColor[item as keyof ITag]}
    >
      <Typography variant="subtitle2">{item}</Typography>
    </ItemTag>
  ));
};

export default Tags;

const ItemTag = styled.div<IItemTag>`
  padding: 2px 8px;
  border-radius: 99px;
  background-color: ${(props) => props.bg ?? "#FFD7F4"};
  color: ${(props) => props.color ?? "#F23581"};
`;
