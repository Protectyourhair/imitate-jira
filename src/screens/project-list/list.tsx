import React, { FC } from 'react';
import { User } from './search-panel';
export interface ListObj {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: string;
}
interface ListProps {
  list: ListObj[];
  user: User[];
}
export const List: FC<ListProps> = ({ list, user }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((projects) => (
          <tr key={projects.personId}>
            <td>{projects.name}</td>
            <td>
              {user.find((el) => el.id === projects.personId)?.name || '未知'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
