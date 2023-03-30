import { FC } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  origanization: string;
  token: string;
}
interface SearchPanelProps {
  param: {
    name: string;
    personId: string;
  };

  user: User[];
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel: FC<SearchPanelProps> = ({
  param,
  user,
  setParam,
}) => {
  return (
    <form>
      <div>
        {/*  */}
        <input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={(e) => {
            setParam({
              ...param,
              personId: e.target.value,
            });
          }}
        >
          <option key="person" value="">
            负责人
          </option>
          {user.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
