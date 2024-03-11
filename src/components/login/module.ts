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
        //トークンを保存        
        localStorage.setItem("token", data.token);
        // 2回目以降ログイン成功時、エラーメッセージをクリア
        setError("");
      } else {
        setError("ログインに失敗しました");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("サーバーに問題が発生しました");
    }
  };
  
