import { useState, useEffect } from 'react';

const useMatchMedia = (query: string) => {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
    };

    media.addListener(listener);

    return () => {
      media.removeListener(listener);
    };
  }, [query, matches]);

  return matches;
};

export default useMatchMedia;
