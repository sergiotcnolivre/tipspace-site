import {
  Section,
  WithBackground,
} from '../components/sharedstyles';
import { Hero } from '../components/home/Hero';
import { FeaturedCards } from '../components/home/FeaturedCards';
import { HomeBoxes } from '../components/home/HomeBoxes';
import { HomeVideo } from '../components/home/HomeVideo';
import { FAQ } from '../components/faq/FAQ';
import theme from '../theme';

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <WithBackground color={theme.colors.white}>
        <Section>
          <FeaturedCards />
        </Section>
      </WithBackground>
      <Section>
        <HomeBoxes />
        <HomeVideo />
        <FAQ />
      </Section>
    </>
  );
}
