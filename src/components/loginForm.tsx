import React, { useState } from 'react';

function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9999/typhoon/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
      });

      if (response.ok) {
          const data = await response.json();
          console.log('Login successful:', data);
          // ここでトークンを保存したり、他のアクションを行います
        } else {
            setError('ログインに失敗しました');
        }

    } catch (error) {
      console.error('Login error:', error);
      setError('サーバーに問題が発生しました');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p>{error}</p>}
      <button type="submit">ログイン</button>
    </form>
  );
}

export default LoginForm;

