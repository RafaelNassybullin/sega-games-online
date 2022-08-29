import { GetStaticProps } from "next";
import styled from "styled-components";
import { ISega } from "interfaces";
import Head from "next/head";
import { Container, Main } from "styles/globalStyles";
import { Card } from "components";

export const getStaticProps: GetStaticProps = async () => {
  const responce = await fetch(`${process.env.API}/getSega`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const datas = await responce.json();

  return {
    props: {
      datas,
    },
    revalidate: 10,
  };
};

interface IHomeProps {
  datas: ISega[];
}

export default function Home({ datas }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Play sega games!!!</title>
      </Head>
      <Container>
        <Title>Играть Sega игры онлайн!</Title>
        <Main>
          {datas.map((data: ISega) => (
            <Card key={data._id} data={data} />
          ))}
        </Main>
      </Container>
    </>
  );
}
const Title = styled.h1`
  margin: 30px 0;
`;
