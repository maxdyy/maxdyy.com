import React from 'react';

// Hooks
import {useStyletron} from 'baseui';

// Components
import {StatefulSelect, TYPE} from 'baseui/select';

const Search = () => {
  // Style
  const [css] = useStyletron();
  const searchWrapperStyle = css({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: '250px',
  });

  return (
    <div className={searchWrapperStyle}>
      <StatefulSelect placeholder="Search..." type={TYPE.search} onChange={val => console.log(val)} />
    </div>
  );
};

export default Search;
