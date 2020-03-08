import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Constants
import CONSTS from '../../utils/consts';

// Hooks
import {useStyletron} from 'baseui';

// Components
import {Button} from 'baseui/button';
import {Search} from 'baseui/icon';
import {Input} from 'baseui/input';

import SearchResults from './SearchResults';

const SearchBar = () => {
  // State
  const [searchOpen, toggleSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [initialSearchPosts, setInitialSearchPosts] = useState([]);

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
    const searchQuery = e.target.value.toLowerCase();

    if (searchQuery.length >= 2) {
      const filteredSearchResults = initialSearchPosts.filter(post =>
        post.postText.toLowerCase().includes(searchQuery),
      );
      setSearchResults(filteredSearchResults);
      return;
    }
    setSearchResults([]);
    return;
  };

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
        <Input
          endEnhancer={<Search size="18px" />}
          placeholder="Search..."
          onChange={e => handleSearch(e)}
        />
      </div>
      {searchResults.length ? (
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
