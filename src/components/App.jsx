import { Profile } from './Profile/Profile';
import { Stactics } from './Statistics/Statistics';
import {Friends} from './Friends list/FriendsList'
import user from '../user.json';
import stactics from '../statistics.json';
import friends from '../friends.json';


const statsTitle = 'Upload stats';


export const App = () => {
  return (
    <>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
 <Stactics
 title={statsTitle}
  stats={stactics}
      />
      <Friends
      friends={friends}
      />
 </>
  );
};

