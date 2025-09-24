import Image from 'next/image';
import Navbar from './navbar';
import Link from 'next/link';
import { Hedvig_Letters_Sans } from 'next/font/google';
import { Lato } from 'next/font/google';
import { useContactModalStore } from './zustand/contactSlice';
import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent } from 'react';

const hedvig = Hedvig_Letters_Sans({
  variable: '--font-hedvig',
  subsets: ['latin'],
  weight: ['400'],
});
const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

function Header() {
  const modalState = useContactModalStore((state) => state.isOpen);
  const openModal = useContactModalStore((state) => state.openModal);
  const closeModal = useContactModalStore((state) => state.closeModal);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append('access_key', 'a36f3058-9f5e-4e43-bd1f-930c123ea325');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      closeModal();
    } else {
      console.log(result);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <header className="flex flex-col items-center justify-between gap-8">
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        <Image
          aria-hidden
          src="/Updated Logo resized.svg"
          alt="Aaser Zypher logo"
          width={200}
          height={38}
          priority
        />
        <section className="grid grid-rows-1 gap-8 items-center justify-center">
          <Dialog.Root
            open={modalState}
            onOpenChange={(open) => (open ? openModal() : closeModal())}
          >
            <Dialog.Trigger
              className={`text-xl px-6 py-3 mx-10 tracking-wider font-bold text-azb-5 bg-azg-2 rounded-md hover:bg-azb-1 hover:text-azg-2 ${lato.className}`}
            >
              Contact
            </Dialog.Trigger>
            <Dialog.Overlay
              className="fixed inset-0 bg-black md:sm:bg-gray md:sm:bg-opacity-30 md:sm:backdrop-blur-sm flex items-center justify-center w-full"
              style={{ backdropFilter: 'none' }}
            />
            <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-azs-2 rounded-md p-6 w-screen max-w-2xl">
              <Dialog.Title
                className={`${lato.className} text-3xl text-shadow-md shadow-azb-5 tracking-wider text-azg-2 text-center my-4 font-bold`}
              >
                Contact Me
              </Dialog.Title>
              <form
                onSubmit={handleSubmit}
                className={`${lato.className} flex flex-col items-center text-lg tracking-wider justify-center`}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-1/2  h-10 text-center m-4 rounded-md placeholder-text-azb-4 focus:placeholder-transparent"
                />

                <input
                  className="w-1/2 h-10 text-center m-4 rounded-md placeholder-text-azb-4 focus:placeholder-transparent"
                  type="email"
                  required={true}
                  name="email"
                  placeholder="Email"
                />

                <textarea
                  className="w-3/4 h-40 text-center m-4 rounded-md p-2 text-black placeholder-text-azb-4 focus:text-margin-5 focus:text-left focus:placeholder-transparent"
                  name="message"
                  required={true}
                  placeholder="Type your message..."
                ></textarea>

                <button
                  className="px-4 py-2 m-5 text-azs-1 text-lg tracking-wider bg-azb-4 rounded-md hover:bg-azb-2"
                  type="submit"
                >
                  Submit Form
                </button>
              </form>
            </Dialog.Content>
          </Dialog.Root>
          <section className="grid grid-cols-3 gap-4 items-center justify-center">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61564678755375"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/640px-2023_Facebook_icon.svg.png"
                alt="Facebook"
                width={50}
                height={50}
              />
            </a>
            <a target="_blank" href="https://github.com/MinhaalAaser">
              <Image
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                alt="Github"
                className={modalState ? 'hidden' : 'filter invert'}
                width={50}
                height={50}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/minhaal-aaser/"
              className="filter brightness-150 "
            >
              <Image
                src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                alt="Linkedin"
                width={50}
                height={50}
              />
            </a>
          </section>
        </section>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
