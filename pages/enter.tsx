import { NEXT_BUILTIN_DOCUMENT } from 'next/dist/shared/lib/constants';
import React from 'react';
import { auth, googleAuthProvider } from '../lib/firebase';
import styled from 'styled-components';

type Props = {};

const EnterPage = (props: Props) => {
  const user = null;
  const username = null;

  return (
    <Main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </Main>
  );
};

//Sign in with Google Button
const SignInButton = () => {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return <Button onClick={signInWithGoogle}>Sign in with Google</Button>;
};

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}

//STYLES
const Main = styled.main`
  display: grid;
  place-content: center;
  height: calc(100vh - 64px);
`;

const Button = styled.button`
  background-color: silver;
  padding: 8px 16px;
  font-size: 1.2rem;
  border-radius: 4px;
  font-weight: 500;
`;

export default EnterPage;
