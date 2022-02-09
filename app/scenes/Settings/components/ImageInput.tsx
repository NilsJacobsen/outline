import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Flex from "~/components/Flex";
import { LabelText } from "~/components/Input";
import ImageUpload, { Props as ImageUploadProps } from "./ImageUpload";

type Props = ImageUploadProps & {
  label: string;
  src?: string;
};

export default function ImageInput({ label, src, ...rest }: Props) {
  const { t } = useTranslation();

  return (
    <InputWrapper column>
      <LabelText>{label}</LabelText>
      <ImageBox>
        <ImageUpload {...rest}>
          <Avatar src={src} />
          <Flex auto align="center" justify="center">
            {t("Upload")}
          </Flex>
        </ImageUpload>
      </ImageBox>
    </InputWrapper>
  );
}

const InputWrapper = styled(Flex)`
  margin-bottom: 24px;
`;

const avatarStyles = `
  width: 80px;
  height: 80px;
`;

const Avatar = styled.img`
  ${avatarStyles};
`;

const ImageBox = styled(Flex)`
  ${avatarStyles};
  position: relative;
  font-size: 14px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.secondaryBackground};
  background: ${(props) => props.theme.background};
  overflow: hidden;

  div div {
    ${avatarStyles};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    transition: all 250ms;
  }

  &:hover div {
    opacity: 1;
    background: rgba(0, 0, 0, 0.75);
    color: ${(props) => props.theme.white};
  }
`;