export const login = async (
    userId: string,
    password: string,
    setError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    try {
      const response = await fetch("http://localhost:9999/typhoon/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        // ここでトークンを保存したり、他のアクションを行います
      } else {
        setError("ログインに失敗しました");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("サーバーに問題が発生しました");
    }
  };
  