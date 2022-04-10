import { NextPage } from "next";
import Head from "next/head";

import WidthLimiter from "@/atoms/WidthLimiter";
import Header from "@/components/Header";
import PageContainer from "@/atoms/PageContainer";
import Heading from "@/atoms/Heading";
import Paragraph from "@/atoms/Paragraph";

const PhotosPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rida F&apos;kih — Photos</title>
      </Head>
      <WidthLimiter>
        <Header />
        <PageContainer>
          <div className="space-y-4">
            <Heading type="h1">My Photos</Heading>
            <Paragraph weight="light">
              Get a glimpse into my daily life with one photo every day.
            </Paragraph>
          </div>
        </PageContainer>
      </WidthLimiter>
    </>
  );
};

export default PhotosPage;
