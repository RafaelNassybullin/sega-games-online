import { FC, useState } from "react";
import { ISega } from "interfaces";
import Link from "next/link";
import styled from "styled-components";

interface ICardProps {
  data: ISega;
}

export const Card: FC<ICardProps> = ({ data }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Link key={data._id} href={`/page/${data._id}`}>
      <a>
        <ImageWrapper
          onMouseOver={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
        >
          <img src={data.poster} alt={data.title} />
          <p>{data.title}</p>
          {showPreview && (
            <video
              src={data.preview}
              muted
              preload="auto"
              onMouseOver={(event: any) => event.target.play()}
              onMouseOut={(event: any) => event.target.pause()}
            ></video>
          )}
        </ImageWrapper>
      </a>
    </Link>
  );
};

const ImageWrapper = styled.div`
  width: 250px;
  height: 187px;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
  p {
    width: 100%;
    background: #4944447d;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 7px;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    object-fit: contain;
    z-index: 3;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
