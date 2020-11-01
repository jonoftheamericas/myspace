import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Layout({ children, meta: pageMeta }) {
  const router = useRouter();
  const meta = {
    title: `Lee's Myspace`,
    description:
      'A nostalgic look at what my MySpace profile (probably) looked like in 2009.',
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
                href="https://leerob.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
            </li>
            <li>Browse</li>
            <li>Search</li>
            <li>Invite</li>
            <li>Film</li>
            <li>Mail</li>
            <li className="hidden md:block">Blog</li>
            <li className="hidden md:block">Favorites</li>
            <li className="hidden md:block">Forum</li>
            <li className="hidden md:block">Groups</li>
            <li className="hidden md:block">Events</li>
            <li className="hidden md:block">Videos</li>
            <li className="hidden md:block">Music</li>
            <li className="hidden md:block">Comedy</li>
            <li className="hidden md:block">Classifieds</li>
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
            <li>
              <a
                href="https://github.com/leerob/myspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </li>
            <li>FAQ</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li className="hidden md:block">Safety Tips</li>
            <li className="hidden md:block">Contact MySpace</li>
            <li className="hidden md:block">Report Content</li>
            <li className="hidden md:block">Promote</li>
            <li className="hidden md:block">Advertise</li>
            <li className="hidden md:block">Jobs</li>
          </ul>
        </footer>
      </div>
    </>
  );
}
