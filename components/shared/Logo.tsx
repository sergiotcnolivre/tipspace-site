import Link from 'next/link';
import styled from 'styled-components';

const LogoImg = styled.svg`
  display: block;
`;

export function Logo() {
  return (
    <Link href="/">
      <LogoImg xmlns="http://www.w3.org/2000/svg" width="150" height="32" fill="none">
        <path d="M26.59 5.75V32h5.68v-7.98c1.35 1.8 3.35 2.65 5.79 2.65 5.3 0 9-4.6 9-10.67V5.75H26.6ZM41.3 16c0 3.41-1.67 6.08-4.56 6.08-2.88 0-4.48-2.59-4.48-6.08v-5.46h9.04V16ZM149.97 16.05c0-6.32-3.65-10.75-9.8-10.75-6.14 0-9.99 4.43-9.99 10.83s3.78 10.54 10.04 10.54c4.6 0 8.41-2.42 9.29-6.45h-5.59c-.6 1.43-1.78 2.18-3.53 2.18-2.78 0-4.28-1.6-4.6-4.84h14.16l.05-1.53-.03.02Zm-14.12-2.1c.52-2.58 1.82-4.35 4.33-4.35 2.5 0 3.77 1.73 4.08 4.35h-8.41ZM119.87 26.67c-6.07 0-10.08-4.15-10.08-10.67s3.81-10.71 10.08-10.71c5.15 0 8.8 2.79 9.4 7.71h-5.7c-.48-2.02-1.55-3.03-3.78-3.03-2.81 0-4.28 2.5-4.28 5.98 0 3.48 1.38 6.08 4.32 6.08 2.1 0 3.18-.98 3.73-3.08h5.69c-.68 4.9-4.13 7.72-9.37 7.72h-.01ZM99.26 5.29c-5.1 0-8.6 2.04-9.2 6.76h5.7c.4-1.81 1.68-2.72 3.53-2.72 1.86 0 3.3 1.15 3.3 3.21v1.03l-5.75.62c-4.25.37-7.1 2.25-7.1 6.37 0 3.85 3.05 6.1 7.13 6.1 2.7 0 4.76-.98 6.26-3.02v2.58h5.04V12.97c0-5.46-3.58-7.67-8.94-7.67l.03-.01Zm3.26 13c0 2.82-1.43 4.68-4.09 4.68-1.82 0-3.05-1.14-3.05-2.72 0-1.57 1.2-2.54 2.8-2.74l4.34-.57v1.35ZM87.57 10.25a8.29 8.29 0 0 0-7.59-4.96c-2.98 0-5.2 1.23-6.58 3.65V5.73H68.3v26.25h5.64v-8c1.38 1.81 3.38 2.67 5.79 2.67a8.2 8.2 0 0 0 4.43-1.27 9.05 9.05 0 0 0 3.33-3.7c.8-1.6 1.23-3.49 1.23-5.7 0-2.2-.4-4.19-1.2-5.74l.04.01Zm-5.84 10.13a3.88 3.88 0 0 1-3.25 1.68 4.1 4.1 0 0 1-3.3-1.63A7.34 7.34 0 0 1 73.95 16c0-1.89.43-3.29 1.23-4.4a4.06 4.06 0 0 1 3.3-1.68c1.32 0 2.42.57 3.25 1.68a7.21 7.21 0 0 1 1.3 4.4c0 1.81-.47 3.32-1.3 4.4v-.02ZM57.65 26.67c-4.92 0-8.62-1.73-9.45-6.45h5.49c.43 1.64 1.75 2.51 3.85 2.51 1.83 0 3.38-.5 3.38-2.13 0-1.06-.76-1.8-2.18-2.04l-4.26-.83c-3.48-.7-5.9-2.25-5.9-5.95 0-4.2 3.8-6.48 8.53-6.48 4.73 0 8.41 2.18 9.12 6.76h-5.51a2.97 2.97 0 0 0-1.16-2.04 3.8 3.8 0 0 0-2.53-.78c-1.03 0-1.75.2-2.25.65-.56.41-.83.9-.83 1.52 0 .5.15.94.52 1.24.35.33 1 .54 1.86.7l4.25.78c3.65.65 5.99 2.25 5.99 6.1 0 4.23-3.86 6.45-8.9 6.45l-.02-.01ZM23.33 5.75h-5.68v20.47h5.68V5.75ZM8.69 10.54v8.24c0 1.68.72 2.74 2.58 2.74.67 0 3.05-.04 3.45-.12v4.71c-.47.13-2.15.45-4.88.33-4.53-.2-6.83-2.5-6.83-7.46v-8.44H0v-4.8h3V0H8.7v5.75h6.03v4.79H8.7Z" fill="currentColor" />
      </LogoImg>
    </Link>
  );
}