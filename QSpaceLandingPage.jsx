import styled, { keyframes } from 'styled-components';

const navy = '#0A1433';
const navyDark = '#070F26';
const gradient = 'linear-gradient(120deg, #0A1433 60%, #162043 100%)';
// Subtle red accent for highlights and CTAs
const accentRed = '#FF375F';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px);}
  to   { opacity: 1; transform: translateY(0);}
`;

const Hero = styled.section`
  min-height: 100vh;
  background: ${gradient}, url('/qspace-hero-visual.jpg') center/cover no-repeat; // Replace with actual immersive visual
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

const HeroInner = styled.div`
  z-index: 1;
  max-width: 760px;
  padding: 40px 0;
  animation: ${fadeIn} 1.2s cubic-bezier(.77,.02,.41,.94);
`;

const HeroTitle = styled.h1`
  font-size: 5rem;
  letter-spacing: -0.04em;
  line-height: 1.07;
  font-weight: 900;
  margin-bottom: 2rem;
  text-shadow: 0 8px 32px rgba(10,20,51,0.35);
  background: linear-gradient(90deg, #fff, #b1badf 77%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const HeroSubtitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #e1e6f7;
  margin-bottom: 2.5rem;
`;

const CTAButton = styled.button`
  background: ${accentRed};
  color: #fff;
  border: none;
  border-radius: 100px;
  padding: 1.2rem 3.5rem;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  box-shadow: 0 2px 24px 0 rgba(255,55,95,0.23);
  cursor: pointer;
  transition: background 0.35s cubic-bezier(.77,.02,.41,.94), transform 0.18s;
  &:hover, &:focus {
    background: #c42b4c;
    transform: translateY(-2px) scale(1.025);
  }
`;

const FeaturedArtist = styled.section`
  background: ${navyDark};
  padding: 8rem 0 5.5rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 7vw;
  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 6rem 0 3rem 0;
  }
`;

const ArtistVisual = styled.div`
  min-width: 380px;
  max-width: 480px;
  aspect-ratio: 4/5;
  background: url('/featured-artist.jpg') center/cover;
  border-radius: 38px;
  box-shadow: 0 18px 64px 0 rgba(10,20,51,0.38), 0 2px 16px 0 #141e36 inset;
  transition: box-shadow 0.33s cubic-bezier(.77,.02,.41,.94);
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0 28px 90px 0 rgba(255,55,95,0.22);
  }
  @media (max-width: 950px) {
    min-width: 240px;
    max-width: 290px;
    margin: 0 auto 2.5rem auto;
  }
`;

const ArtistMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 430px;
`;

const ArtistName = styled.h3`
  font-size: 2.7rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1.1rem;
  letter-spacing: -0.02em;
`;

const ArtistBio = styled.p`
  color: #d8e0f7;
  font-size: 1.22rem;
  font-weight: 400;
  letter-spacing: 0.015em;
  margin-bottom: 1.8rem;
  opacity: 0.92;
`;

const ArtistCTA = styled(CTAButton)`
  font-size: 1.06rem;
  padding: 0.9rem 2.7rem;
  margin-top: 0.6rem;
`;

const MasonrySection = styled.section`
  padding: 5.5rem 0 5rem 0;
  background: ${gradient};
  @media (max-width: 650px) {
    padding: 3.2rem 0 2rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.9rem;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 2.4rem;
  text-align: center;
  font-weight: 800;
`;

const MasonryGrid = styled.div`
  display: flex;
  gap: 2.5vw;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1400px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2.7rem;
  }
`;

const MasonryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  width: 21vw;
  min-width: 225px;
  max-width: 360px;
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 100vw;
  }
`;

const ArtistCard = styled.div`
  background: #131b3b;
  border-radius: 24px;
  box-shadow: 0 2px 18px 0 rgba(10,20,51,0.18);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.26s cubic-bezier(.77,.02,.41,.94), transform 0.22s;
  &:hover {
    box-shadow: 0 10px 32px 0 rgba(255,55,95,0.16);
    transform: translateY(-4px) scale(1.035);
  }
`;

const CardImage = styled.div`
  width: 100%;
  aspect-ratio: 4/3;
  background: url(${props => props.imgurl}) center/cover;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  transition: transform 0.39s cubic-bezier(.77,.02,.41,.94);
  ${ArtistCard}:hover & {
    transform: scale(1.04);
  }
`;

const CardName = styled.h4`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 1.4rem 1.1rem 0.6rem 1.1rem;
`;

const CardDiscipline = styled.div`
  color: ${accentRed};
  font-size: 0.98rem;
  text-transform: uppercase;
  margin: 0 1.1rem 1.3rem 1.1rem;
  font-weight: 600;
  opacity: 0.88;
`;

const HowItWorks = styled.section`
  background: ${navyDark};
  color: #fff;
  padding: 5.7rem 0 6.2rem 0;
  text-align: center;
`;

const HowRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 8.3vw;
  margin-top: 3.9rem;
  flex-wrap: wrap;
`;

const HowStep = styled.div`
  min-width: 220px;
  margin: 1.2rem;
`;

const NumberCircle = styled.div`
  width: 74px;
  height: 74px;
  background: ${accentRed};
  color: #fff;
  border-radius: 50%;
  font-size: 2.65rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.2rem auto;
  box-shadow: 0 0 0 0 #fff, 0 2px 24px ${accentRed}30;
`;

const HowTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  letter-spacing: -0.01em;
`;

const HowDesc = styled.p`
  color: #f7f8fd;
  font-size: 1.04rem;
  opacity: 0.82;
  letter-spacing: 0.01em;
  max-width: 270px;
  margin: 0 auto;
`;

const CallToActionSection = styled.section`
  background: ${accentRed};
  color: #fff;
  padding: 6rem 0 6.8rem 0;
  text-align: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 -10px 40px #99173021;
`;

const CTATitle = styled.h2`
  font-size: 3.
