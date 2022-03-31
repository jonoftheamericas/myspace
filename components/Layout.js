import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Layout({ children, meta: pageMeta }) {
  const router = useRouter();
  const meta = {
    title: `Jon's Resume`,
    description:
      'Please Hire Me',
    cardImage: '/og.png',
    ...pageMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://myspace.leerob.io${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-blue-500">
          <a href="#skip" className="sr-only focus:not-sr-only">
            Skip to content
          </a>
          <ul className="w-full space-x-3 text-white text-sm px-8 py-1 flex justify-center">
            <li>
              <a
                href="mailto:x@jonoftheamericas.com"
              >
                Email Me
              </a>
            </li>
            <li className="hidden md:block">#BlackLivesMatter</li>
            <li className="hidden md:block">#Javascript</li>
            <li className="hidden md:block">#CleanCode</li>
            <li className="hidden md:block">#Feminism</li>
            <li className="hidden md:block">#TransLivesMatter</li>
          </ul>
        </nav>
        <main
          id="skip"
          className="flex max-w-4xl mx-auto  mb-auto flex-col md:flex-row"
        >
          {children}
        </main>
        <footer className="bg-gray-300">
          <ul className="w-full space-x-3 text-blue-800 underline text-sm px-8 py-1 flex justify-center">
            <li>FAQ</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </footer>
      </div>
    </>
  );
}
