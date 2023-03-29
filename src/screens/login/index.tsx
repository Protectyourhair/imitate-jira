export const Login = () => {
  const baseUrl = process.env.REACT_APP_API_URL;
  const login = (params: { username: string; password: string }) => {
    fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };
  const handleSubmit = (env: React.FormEvent<HTMLFormElement>) => {
    //阻止事件默认行为
    env.preventDefault();
    const username = (env.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (env.currentTarget.elements[1] as HTMLInputElement).value;
    login({
      username,
      password,
    });
  };
  return (
    <form onSubmit={(env) => handleSubmit(env)}>
      <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id="username" placeholder="请输入用户名" />
      </div>
      <div>
        <label htmlFor="password">密码</label>
        <input type="password" id="password" placeholder="请输入密码" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
};
