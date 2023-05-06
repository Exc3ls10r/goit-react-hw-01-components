import Profile from './Profile/Profile';
import ProfileData from './Profile/user.json';

const { username, tag, location, avatar, stats } = ProfileData;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatarUrl={avatar}
        stats={stats}
      />
    </div>
  );
};
