import React, {useState} from 'react';
import {Button} from 'baseui/button';
import {Search} from 'baseui/icon';

// Hooks
import {useStyletron} from 'baseui';

// Components
import {StatefulSelect, TYPE} from 'baseui/select';

const SearchBar = () => {
  // State
  const [searchOpen, toggleSearchOpen] = useState(false);

  // Style
  const [css, theme] = useStyletron();

  const searchWrapperStyle = css({
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: '300px',
  });

  const searchBarStyle = css({
    width: '100%',
    transition: theme.animation.timing100,
    [theme.mediaQuery.small]: {
      display: searchOpen ? 'block' : 'none',
      opacity: searchOpen ? 1 : 0,
      position: 'absolute',
      top: '75px',
      left: 0,
    },
    [theme.mediaQuery.medium]: {
      display: 'block',
      opacity: 1,
      position: 'static',
      top: 'auto',
      left: 'auto',
    },
  });

  const searchBarButton = css({
    [theme.mediaQuery.medium]: {
      display: 'none',
    },
  });

  return (
    <div className={searchWrapperStyle}>
      <div className={searchBarStyle}>
        <StatefulSelect
          placeholder="Search..."
          type={TYPE.search}
          onChange={val => console.log(val)}
        />
      </div>
      <div className={searchBarButton}>
        <Button
          onClick={() => toggleSearchOpen(!searchOpen)}
          kind={'minimal'}
          $style={{padding: '10px'}}
        >
          <Search size={30} />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
