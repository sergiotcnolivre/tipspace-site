import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

interface ButtonProps {
  primary?: boolean;
  block?: boolean;
}

const StyledA = styled.a<ButtonProps>`
  display: inline-block;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  background: ${({ theme, primary }) => (primary ? theme.colors.primary : 'transparent')};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 10px 24px;
  text-transform: uppercase;
  text-align: center;
`;

function Button({
  children, href, primary, block,
}) {
  return (
    <Link href={href} passHref legacyBehavior>
      <StyledA primary={primary} block={block}>{children}</StyledA>
    </Link>
  );
}

Button.defaultProps = {
  primary: false,
  block: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  block: PropTypes.bool,
};

export { Button };
