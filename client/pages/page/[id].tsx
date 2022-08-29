import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { ISega } from "interfaces";
import styled from "styled-components";
import { Container, Main } from "styles/globalStyles";
import { Card } from "components";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.API}/getSega`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  const paths = data.map((item: ISega) => {
    return {
      params: { id: item._id.toString() },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  const itemResopnce = await fetch(`${process.env.API}/getSega/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const item = await itemResopnce.json();

  const responce = await fetch(`${process.env.API}/getSega`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const datas = await responce.json();

  return {
    props: {
      item,
      datas,
    },
    revalidate: 10,
  };
};

interface IPageIdProps {
  datas: ISega[];
  item: ISega;
}

export default function PageID({ item, datas }: IPageIdProps) {
  return (
    <>
      <Head>
        <title>{item.title}</title>
      </Head>
      <Container>
        <Link href="/">
          <a>
            <h1>{item.title}</h1>
          </a>
        </Link>
        <Emulator width={"100%"} src={item.gameLink} frameBorder="0"></Emulator>
        <Main>
          {datas.map((data: ISega) => (
            <Card key={data._id} data={data} />
          ))}
        </Main>
      </Container>
    </>
  );
}

const Emulator = styled.iframe`
  width: 100%;
  height: 88vh;
  display: grid;
  place-items: center;
`;
