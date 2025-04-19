import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { FaTimes } from "react-icons/fa";

const SignUpForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("✅ Account created successfully!");
      setEmail("");
      setPassword("");
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white text-black p-8 rounded-xl shadow-lg w-[90%] max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-red-500 hover:text-red-700">
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="email"
            className="w-full border p-2 rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full border p-2 rounded"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </form>
        {message && <p className="mt-4 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default SignUpForm;
