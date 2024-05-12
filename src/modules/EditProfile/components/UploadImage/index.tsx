import { IconUpload } from "@/assets/icons";
import styled from "styled-components";
import image from "@/assets/images/imagedefault.png";
import Image from "next/image";
import { useState } from "react";

export default function UploadImage() {
  const [url, setUrl] = useState("");
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setUrl(url);
    }
  };

  return (
    <>
      <ChangeImage>
        <ChoseFile type="file" name="image" onChange={handleChangeImage} />
        {url ? (
          <ImageFile width={100} height={100} src={url} alt="imageFile" />
        ) : (
          <ChangeImageDefault>
            <ImageDefault src={image} alt="image" />
            <ChangeImageDefaultTitle>
              <IconUpload />
              Select photo to upload
            </ChangeImageDefaultTitle>
          </ChangeImageDefault>
        )}
      </ChangeImage>
    </>
  );
}

const ChangeImage = styled.label`
  margin-top: 100px;
  min-width: 100%;
  height: 300px;
  border: 2px dashed #e0faff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;
const ChangeImageDefault = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 100%;
`;

const ImageDefault = styled(Image)`
  position: absolute;
`;
const ChangeImageDefaultTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChoseFile = styled.input`
  display: none;
`;

const ImageFile = styled(Image)`
  width: 220px;
  height: 220px;
  border-radius: 100%;
  border: 2px dashed #e0faff;
`;
