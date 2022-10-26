import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  const user = null;
  const username = null;

  return (
    <NavbarWrapper>
      <Nav>
        <ul>
          <Feed_li>
            <Link href="/">
              <Button_logo>FEED</Button_logo>
            </Link>
          </Feed_li>

          {/* user is signed-in and has username */}
          {username && (
            <>
              <li className="push-left">
                <Link href="/admin">
                  <Button_blue className="btn-blue">Write Posts</Button_blue>
                </Link>
              </li>
              <li>
                <Link href={`/${username}`}>
                  <img src={user?.photoURL} />
                </Link>
              </li>
            </>
          )}

          {/* user is not signed OR has not created username */}
          {!username && (
            <li>
              <Link href="/enter">
                <Button_blue className="btn-blue">Log in</Button_blue>
              </Link>
            </li>
          )}
        </ul>
      </Nav>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  width: 100%;
  background-color: gray;
  padding: 10px;
`;

const Nav = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  ul {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
  }
`;

const Feed_li = styled.li`
  margin-right: auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
`;

const LoginUserWrapper = styled.div`
  display: flex;
  gap: 32px;
  font-size: 1.5rem;
  color: white;
`;

const Button_logo = styled.button`
  background-color: var(--color-text);
  color: white;
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 4px 16px;
  border-radius: 4px;
`;

const Button_blue = styled(Button_logo)`
  background-color: var(--color-blue);
  color: white;
`;

export default Navbar;
