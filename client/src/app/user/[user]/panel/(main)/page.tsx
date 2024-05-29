// app/user/[user]/panel/main.tsx
import { FC } from 'react';

interface UserPanelProps {
  params: {
    user: string;
  };
}

const UserPanel: FC<UserPanelProps> = ({ params }) => {
  return (
    <section>
      <h1>This is the main panel for user: {params.user}</h1>
    </section>
  );
};

export default UserPanel;
