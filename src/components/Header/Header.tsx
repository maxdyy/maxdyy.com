import CONTENT from '@utils/data';

// Hooks
import { useStyletron } from 'baseui';

// Components
import Link from 'next/link';
import Image from 'next/image';
import {
  HeaderNavigation,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import logoImg from '@public/logo.png';
import SearchBar from '@components/Search/SearchBar';
import Navigation from '@components/Header/Navigation';

// Style
import { wrapper, flexBetween } from '@styles/styles';

const {
  HEADER: {
    NAVIGATION: { LOGO },
  },
} = CONTENT;

const Header = () => {
  // Style
  const [css] = useStyletron();

  const wrapperStyle = css({
    ...wrapper,
    ...flexBetween,
    width: '100%',
  });

  const logoWrapperStyle = css({
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    width: '40px',
    padding: '3px',
  });

  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: () => ({
            position: 'fixed',
            width: '100%',
            zIndex: 100,
            height: '65px',
            padding: '0px',
            backgroundColor: 'rgba(17, 17, 17, 0.7803921568627451)',
            backdropFilter: 'blur(10px)',
          }),
        },
      }}
    >
      <div className={wrapperStyle}>
        {/* LOGO */}
        <StyledNavigationList>
          <StyledNavigationItem>
            <Link href={LOGO.URL} passHref>
              <a href={LOGO.URL} className={logoWrapperStyle}>
                <Image alt={LOGO.ALT} src={logoImg} placeholder="blur" />
              </a>
            </Link>
          </StyledNavigationItem>
        </StyledNavigationList>

        {/* SEARCH BAR  */}
        <SearchBar />

        {/* NAVIGATION */}
        <Navigation />
      </div>
    </HeaderNavigation>
  );
};

export default Header;
