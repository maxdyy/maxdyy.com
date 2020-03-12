import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

// Constants
import CONSTS from '../../utils/consts';

// Hooks
import {useStyletron} from 'baseui';
import useOnClickOutside from '../../hooks/useOnClickOutside';

// Components
import {Button} from 'baseui/button';
import {Search} from 'baseui/icon';
import {Input} from 'baseui/input';

import SearchResults from './SearchResults';

const SearchBar = () => {
  // State
  const [searchOpen, toggleSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState([]);
  const [initialSearchPosts, setInitialSearchPosts] = useState([]);

  // Ref
  const searchBarRef = useRef();
  useOnClickOutside(searchBarRef, () => toggleSearchOpen(false));

  useEffect(() => {
    const {
      API: {
        ENDPOINTS: {MASTER},
        QUERIES: {SEARCH_POSTS},
      },
    } = CONSTS;

    axios({
      url: MASTER,
      method: 'post',
      data: {
        query: SEARCH_POSTS,
      },
    }).then(result => setInitialSearchPosts(result.data.data.blogPosts));
  }, []);

  // Filter Search Function
  const handleSearch = e => {
    if (e.keyCode === 27) {
      toggleSearchOpen(false);
      return;
    }

    const newSearchQuery = e.target.value.toLowerCase();

    if (newSearchQuery.length >= 2) {
      toggleSearchOpen(true);
      const filteredSearchResults = initialSearchPosts.filter(
        post =>
          post.postTitle.toLowerCase().includes(newSearchQuery) ||
          post.postText.toLowerCase().includes(newSearchQuery),
      );
      setSearchResults(filteredSearchResults);
      setSearchQuery(newSearchQuery);
      return;
    }
    setSearchResults([]);
    setSearchQuery('');
    return;
  };

  // Style
  const [css, theme] = useStyletron();

  const searchWrapperStyle = css({
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
    flexShrink: 1,
    maxWidth: '50px',
    [theme.mediaQuery.medium]: {
      position: 'relative',
      maxWidth: '360px',
    },
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
    <div ref={searchBarRef} className={searchWrapperStyle}>
      <div className={searchBarStyle}>
        <Input
          endEnhancer={<Search size="18px" />}
          placeholder="Search..."
          aria-label="search"
          onFocus={() => toggleSearchOpen(true)}
          onKeyDown={e => handleSearch(e)}
        />
      </div>
      {searchOpen && searchQuery ? (
        <SearchResults searchResults={searchResults} />
      ) : null}
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
