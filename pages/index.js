import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.Pi) {
      window.Pi.init({
        version: "2.0",
        sandbox: false, // true se in testnet
      });

      window.Pi.authenticate(["username", "payments"], function (authData) {
        console.log("Authenticated:", authData);
      });
    }
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>Benvenuto in SwitchPi</h1>
      <p>Login con Pi Network attivo...</p>
    </main>
  );
}
