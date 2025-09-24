import React from 'react';
import { Lato } from 'next/font/google';
import Head from 'next/head';

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
});

function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - AZ Next Blueprint</title>
        <meta name="description" content="View my newest work!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${lato.className} flex w-screen min-h-screen flex-col items-center justify-start`}
      >
        <h1 className="text-3xl font-bold text-azg-2">Blog</h1>
        <p className="p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          adipisci provident possimus veniam nostrum sapiente, aspernatur
          laudantium minima obcaecati praesentium corrupti facere accusantium
          reprehenderit iusto eligendi sint quasi vitae quibusdam! Unde
          explicabo, facilis alias odit nobis ducimus ipsa culpa aliquam
          blanditiis voluptates expedita eum? Voluptatum, quibusdam. Doloremque
          delectus a officiis quibusdam, quae perferendis assumenda repudiandae
          dolorem excepturi magni rem provident. Rem corporis sapiente
          laudantium perspiciatis odit dolore unde illum nihil adipisci tempore!
          Sapiente quasi impedit facilis ipsam modi. Ut itaque sed non! Quis
          voluptates quas autem, enim neque rem corporis. Illum asperiores
          veniam quae, natus expedita magnam tenetur labore incidunt. Sed modi,
          neque dicta deleniti voluptatem ab, suscipit praesentium accusantium
          pariatur omnis provident repellendus ex delectus eaque, itaque facere
          maiores. Fugit voluptates repudiandae consectetur ad praesentium nisi
          ea harum eveniet laboriosam, impedit alias tenetur possimus?
          Asperiores voluptates voluptas distinctio ab quasi rem enim. Assumenda
          neque voluptates nam in? Impedit, hic.
        </p>
      </main>
    </div>
  );
}

export default Blog;
