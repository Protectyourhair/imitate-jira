import { SearchPanel } from './search-panel';
import { List } from './list';
import { useState, useEffect } from 'react';
import { cleanObj, useDebounce, useMount } from 'utils';
import * as qs from 'qs';

export interface ParamProps {
  name: string;
  personId: string;
}

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState<ParamProps>({
    name: '',
    personId: '',
  });
  const [user, setUser] = useState([]);
  const [list, setList] = useState([]);

  const debounceParam = useDebounce(param, 500);

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObj(debounceParam))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debounceParam]);

  useMount(() =>
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUser(await response.json());
      }
    })
  );

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} user={user} />
      <List list={list} user={user} />
    </div>
  );
};
