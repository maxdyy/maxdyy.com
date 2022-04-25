// Hooks
import { useStyletron } from 'baseui';

// Utils
import { getBlogPostTagKind } from '@utils/index';

// Interface
import IBlogFilter from '@interface/blogFilter';
import { blogPostTypes } from '@interface/post';

// Components
import { Tag, VARIANT, SIZE } from 'baseui/tag';

const BlogFilter: React.FC<IBlogFilter> = ({
  filterName,
  isSelected,
  onClick,
}) => {
  // Style
  const [css] = useStyletron();
  const tagStyle = css({
    borderRadius: '24px',
    border: isSelected ? '2px solid transparent' : 'none',
  });

  const tagKind = getBlogPostTagKind(blogPostTypes[filterName]);

  return (
    <span className={tagStyle}>
      <Tag
        variant={isSelected ? VARIANT.solid : VARIANT.outlined}
        size={SIZE.medium}
        closeable={false}
        onClick={onClick}
        kind={tagKind}
      >
        {filterName}
      </Tag>
    </span>
  );
};

export default BlogFilter;
