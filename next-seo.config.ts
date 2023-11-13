import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Tipspace - Partidas mais emocionantes',
  description: 'O Tipspace é mais do que uma plataforma de jogos - é uma comunidade de entusiastas que levam os jogos a sério. Nossa plataforma é 100% baseada em habilidades, garantindo que cada partida seja um desafio justo.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://tipspace.gg/',
    siteName: 'Tipspace',
  },
  twitter: {
    site: '@tipspace',
    cardType: 'summary_large_image',
  },
};

export default config;
