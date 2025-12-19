import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Button, Input, Card } from "../../components/UI";
import { Sparkles } from "lucide-react";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(async () => {
      await login(email);
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-6 text-stone-900"
          >
            <Sparkles size={28} className="text-primary-600" />
          </Link>
          <h2 className="text-3xl font-display font-bold text-stone-900">
            Welcome back
          </h2>
          <p className="mt-2 text-stone-500">
            Enter your details to access your workspace.
          </p>
        </div>

        <Card className="p-8 md:p-10 shadow-lg border-stone-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider ml-0.5">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-stone-400 hover:text-stone-900"
                >
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                className="block w-full px-4 py-2.5 bg-white border border-stone-200 rounded-md text-stone-900 focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-colors sm:text-sm placeholder-stone-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full justify-center"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-stone-500">
            New here?{" "}
            <Link
              to="/signup"
              className="font-medium text-stone-900 hover:underline"
            >
              Create an account
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const Signup: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-stone-900">
            Create Account
          </h2>
          <p className="mt-2 text-stone-500">Start writing naturally today.</p>
        </div>
        <Card className="p-8 md:p-10 shadow-lg border-stone-100">
          <form className="space-y-5">
            <Input
              id="name"
              type="text"
              label="Full Name"
              placeholder="John Doe"
              required
            />
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="you@example.com"
              required
            />
            <Input id="password" type="password" label="Password" required />

            <div className="pt-2">
              <Button type="submit" className="w-full justify-center">
                Join WriteNatural
              </Button>
            </div>
          </form>
          <div className="mt-8 text-center text-sm text-stone-500">
            Existing user?{" "}
            <Link
              to="/login"
              className="font-medium text-stone-900 hover:underline"
            >
              Log in
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-display font-bold text-stone-900">
            Reset Password
          </h2>
          <p className="mt-2 text-stone-500 text-sm">
            We'll email you a link to reset it.
          </p>
        </div>
        <Card className="p-8">
          <form className="space-y-6">
            <Input id="email" type="email" label="Email" required />
            <Button type="submit" className="w-full justify-center">
              Send Link
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm font-medium text-stone-500 hover:text-stone-900"
            >
              Back to Login
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
