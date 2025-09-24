import Image from 'next/image';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <Head>
        <title>Home Page - AZ Next Blueprint</title>
        <meta name="description" content="View my newest work!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga saepe
        quaerat numquam mollitia officiis, nobis ipsum doloribus provident,
        minima suscipit. Molestiae, consequatur in rerum omnis possimus libero
        provident quasi. Rerum debitis reprehenderit tenetur earum voluptas sint
        eligendi, saepe at vel vitae quibusdam nam accusantium velit atque
        nostrum tempora voluptate magnam deserunt quam minima numquam
        dignissimos cumque eum illum. Illum. Reiciendis dolore alias nesciunt
        ex, at dignissimos, corrupti totam, odit recusandae debitis sit natus
        placeat eaque? Perferendis dolorum ex culpa, distinctio hic itaque
        voluptate vero, numquam, neque nihil molestiae enim. Cupiditate, quia
        libero! Officia saepe, beatae officiis vel eaque dicta cum voluptate
        dolores exercitationem esse tempore quod quidem sapiente ipsum! Maxime
        consequatur atque repellendus rem, nobis repellat. Cum, recusandae unde.
        Odio, nihil ipsam? Eligendi eum neque beatae maxime possimus accusantium
        dicta quaerat id modi nobis doloribus eaque aperiam repellendus sed,
        quis sit! Voluptates hic dignissimos unde natus, maxime eveniet?
        Inventore! Quasi quibusdam numquam voluptates, architecto deserunt unde
        saepe placeat veniam dicta nemo magnam porro. Aliquam adipisci
        accusantium distinctio, fugiat quisquam ipsa inventore ex aut cumque non
        voluptate tempora. Nihil, dicta? Consequuntur ipsam officia
        necessitatibus autem eos facilis reiciendis fugiat aspernatur vel
        numquam minus rerum doloribus cupiditate reprehenderit velit explicabo
        vero nam quos et, accusamus optio debitis, qui deserunt illum.
        Consequuntur! In, magnam esse reiciendis vitae illum saepe sunt,
        veritatis molestias aliquam iste corrupti ea repellat recusandae dolor
        ullam ad nemo natus necessitatibus sed. Earum magnam maiores possimus
        aspernatur fugit ab. Fugit voluptates doloribus voluptas. Quis aliquam
        saepe quibusdam nobis consectetur commodi natus voluptates repellat non
        laborum minima quos nostrum amet quasi cupiditate similique recusandae
        doloribus, minus molestias? Voluptate, tenetur quos! Odit cumque
        necessitatibus nostrum, iste voluptate, neque tempore officiis
        recusandae quaerat cupiditate quae itaque quam sapiente. Qui maxime
        minus quaerat nisi adipisci. Aperiam iste quasi recusandae vero impedit
        inventore sit.
      </p>
    </main>
  );
}
