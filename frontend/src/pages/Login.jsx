// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../utils/api";
// import { useMutation, useQuery } from "react-query";
// import { toast } from "react-toastify";
// import UserDetailsContext from "../context/UserDetailsContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const { setUserDetails } = useContext(UserDetailsContext);

//   const { mutate: userLogin, isLoading: cancelling } = useMutation({
//     mutationFn: () => loginUser({ email, password }),
//     onSuccess: (res) => {
//       console.log("userData", res);
//    //   setUserDetails((prev) => ({ ...prev, token: res.token }));
//       toast.success("user logged in", { position: "bottom-right" });
// const payload={
//   email:res?.user.email,
//   token:res.token,
//   name:res.user.name,
//   id:res.user.id
// }
//       localStorage.setItem("user", JSON.stringify(payload));
//       localStorage.setItem("token", res.token);
//       setUserDetails((prev) => ({ ...prev, token: res.token, email:res.user.email }));
//       navigate("/");
//     },
//   });

//   const handleSubmit = (e) => {
//     console.log(email, password);
//     userLogin();
//   };
//   console.log(email);
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Password</label>
//             <input
//               type="text"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button
//             type="button"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//             onClick={() => {
//               handleSubmit();
//             }}
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{" "}
//           <button
//             onClick={() => navigate("/signup")}
//             className="text-blue-500 hover:underline"
//           >
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import UserDetailsContext from "../context/UserDetailsContext";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUserDetails } = useContext(UserDetailsContext);

  const { mutate: userLogin, isLoading } = useMutation({
    mutationFn: () => loginUser({ email, password }),
    onSuccess: (res) => {
      const payload = {
        email: res?.user.email,
        token: res.token,
        name: res.user.name,
        id: res.user.id,
      };
      localStorage.setItem("user", JSON.stringify(payload));
      localStorage.setItem("token", res.token);
      setUserDetails((prev) => ({ ...prev, token: res.token, email: res.user.email }));
      toast.success("User logged in", { position: "bottom-right" });
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }
    userLogin();
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-gray-100"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-md w-96"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form>
          <motion.div className="mb-4" whileFocus={{ scale: 1.05 }}>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your email"
              required
            />
          </motion.div>
          <motion.div className="mb-6" whileFocus={{ scale: 1.05 }}>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your password"
              required
            />
          </motion.div>
          <motion.button
            type="button"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white py-2 rounded-lg"
            onClick={handleSubmit}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? "Logging in..." : "Login"}
          </motion.button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? {" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Login;
