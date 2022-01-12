import React from "react";

// Hooks
import { useStyletron } from "baseui";

// Components
import SearchResultItem from "./SearchResultsItem";

const SearchResults = ({ searchResults, onResultClick }) => {
  const searchResultsItems = searchResults.map((post) => (
    <SearchResultItem key={post.id} post={post} onResultClick={onResultClick} />
  ));

  // Style
  const [css, theme] = useStyletron();
  const searchResultsWrapper = css({
    width: "100%",
    [theme.mediaQuery.small]: {
      boxSizing: "border-box",
      border: `2px solid ${theme.colors.border}`,
      position: "absolute",
      top: "123px",
      left: 0,
      padding: "24px",
      zIndex: theme.zIndex.modal,
      backgroundColor: theme.colors.backgroundSecondary,
      [theme.mediaQuery.medium]: {
        top: "48px",
      },
    },
  });

  return searchResults.length ? (
    <div className={searchResultsWrapper}>{searchResultsItems}</div>
  ) : null;
};

export default SearchResults;
