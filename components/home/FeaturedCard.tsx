import styled from 'styled-components';
import PropTypes from 'prop-types';

const FeaturedCardStyles = styled.div<{ align?: 'left' | 'right'; }>`
  display: flex;
  flex-direction: ${({ align }) => (align === 'left' ? 'row' : 'row-reverse')};
  column-gap: 60px;
  margin-bottom: 40px;
  border-radius: 16px;
  background: white;
  color: ${({ theme }) => theme.colors.navy};
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1280px) {
    flex-direction: column;
  }

  > img {
    object-fit: cover;
  }

  > div {
    padding: 40px;
  }
`;

function FeaturedCard({
  children, src, alt, align,
}) {
  return (
    <FeaturedCardStyles align={align}>
      <img src={src} alt={alt} />
      <div>
        {children}
      </div>
    </FeaturedCardStyles>
  );
}

FeaturedCard.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  align: PropTypes.string,
};

FeaturedCard.defaultProps = {
  align: 'left',
};

export { FeaturedCard };
