import React from "react";

export const SearchPanel = ({ param, setParam, user }) => {
  return (
    <form>
      <div>
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
          onChange={(e) =>
            setParam({
              ...param,
              personId: e.target.value,
            })
          }
        >
          <option key="person" value="">
            负责人
          </option>
          {user.map((user) => (
            <option key={user.personId} value={user.personId}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
