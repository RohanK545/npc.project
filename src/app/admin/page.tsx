// pages/admin/login.tsx
"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "../../styles/CSS.css";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  interface LoginRequestDto {
    email: string;
    password: string;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const payload: LoginRequestDto = { email, password };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/Auth/login`,
        payload
      );

      // Successful response assumed
      const data = res.data;

      if (data.token) {
        localStorage.setItem("token", data.token); // store JWT token

        // Redirect to admin dashboard
        // router.push("/admin/pages/");
        router.push("/admin/dashboard");
      } else {
        setError("Login failed: No token received.");
      }
    } catch (error) {
      // Log error securely or send to monitoring service
      // Avoid exposing sensitive details to user
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  const GoBack = () => {
    router.push("/");
  };

  return (
    <section className="maincontent ">
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="card p-4 shadow col-11 col-sm-8 col-md-6 col-lg-4">
            <h1 className="card-title text-center mb-4">Admin Login</h1>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="admin@example.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="d-flex justify-content-end gap-3 me-4">
                <button className="btn btn-secondary" onClick={() => GoBack()}>
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-100"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
