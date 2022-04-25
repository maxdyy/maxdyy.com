import { useEffect } from 'react';

// Hooks
import { useStyletron } from 'baseui';

// Constants
import CONTENT from '@utils/data';

// Interface
import IBlogFilters from '@interface/blogFilters';
import { blogPostTypes } from '@interface/post';

// Components
import { H4 } from 'baseui/typography';
import BlogFilter from '@components/Blog/BlogFilter';

const {
  BLOG: { FILTERS_LABEL },
} = CONTENT;

const BlogFilters: React.FC<IBlogFilters> = ({
  selectedFilters,
  setSelectedFilters,
}) => {
  // Style
  const [css] = useStyletron();
  const labelStyle = css({
    marginTop: '65px',
    marginBottom: '20px',
  });

  // Filter Logics
  useEffect(() => {
    setSelectedFilters([]);

    return () => {
      setSelectedFilters([]);
    };
  }, [setSelectedFilters]);

  const onFilterClick = (filter: string) => {
    const newSelectedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((selectedFilter) => selectedFilter !== filter)
      : [...selectedFilters, filter];

    setSelectedFilters(newSelectedFilters);
  };

  const filters = Object.keys(blogPostTypes).map((filter) => {
    const isSelected = selectedFilters.includes(filter);

    return (
      <BlogFilter
        key={filter}
        filterName={filter}
        isSelected={isSelected}
        onClick={() => onFilterClick(filter)}
      />
    );
  });

  return (
    <div>
      <H4 className={labelStyle}>{FILTERS_LABEL}</H4>
      {filters}
    </div>
  );
};

export default BlogFilters;
