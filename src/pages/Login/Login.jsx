import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleGoogleLogin() {
    try {
      await login();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center">

      <div className="w-full max-w-md p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white">
          Admin Login
        </h1>

        <p className="text-center text-white/70 mt-3 mb-10">
          Sign in to manage your bonsai collection.
        </p>

        <button
          onClick={handleGoogleLogin}
          className="btn w-full bg-green-600 hover:bg-green-500 border-none text-white"
        >
          Continue with Google
        </button>

      </div>

    </section>
  );
}

export default Login;