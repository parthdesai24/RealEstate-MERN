// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { createUser } from "../utils/api";
// import { toast } from "react-toastify";
// import { useMutation } from "react-query";
// import UserDetailsContext from "../context/UserDetailsContext";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const { userDetails, setUserDetails } = useContext(UserDetailsContext);
// console.log("userDetails",userDetails)
//   const { mutate: userSignup, isLoading: cancelling } = useMutation({
//     mutationFn: (userData) => createUser(userData),
//     onSuccess: (res) => {
//       const user = localStorage.setItem("user", JSON.stringify({ email: res.user.email, token: res.token }));
//       const token = localStorage.setItem("token", res.token);
//       console.log("user res",user,res)
//       setUserDetails((prev) => ({ ...prev, token: res?.token, email: res?.user?.email }));
//       toast.success("user registered successfully", {
//         position: "bottom-right",
//       });
//       navigate("/");
//     },
//   });

//   const handleSubmit = (e) => {
//   e.preventDefault();

//   if (!name || !email || !password) {
//     toast.error("All fields are required!");
//     return;
//   }

//   userSignup({ name, email, password });
// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-transparent">
//       <div className="bg-transparent p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2">Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
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
//             className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
//             onClick={(e) => handleSubmit(e)}
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Already have an account?{" "}
//           <button
//             onClick={() => navigate("/login")}
//             className="text-blue-500 hover:underline"
//           >
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../utils/api";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import UserDetailsContext from "../context/UserDetailsContext";
import { motion } from "framer-motion";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUserDetails } = useContext(UserDetailsContext);

  const { mutate: userSignup, isLoading } = useMutation({
    mutationFn: (userData) => createUser(userData),
    onSuccess: (res) => {
      localStorage.setItem("user", JSON.stringify({ email: res.user.email, token: res.token }));
      localStorage.setItem("token", res.token);
      setUserDetails((prev) => ({ ...prev, token: res?.token, email: res?.user?.email }));
      toast.success("User registered successfully", { position: "bottom-right" });
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }
    userSignup({ name, email, password });
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-transparent"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="bg-transparent p-8 rounded-lg shadow-md w-96"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <motion.div 
            className="mb-4"
            whileFocus={{ scale: 1.05 }}
          >
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your name"
              required
            />
          </motion.div>
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
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 rounded-lg"
            onClick={(e) => handleSubmit(e)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </motion.button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? {" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-500 hover:underline"
          >
            Login
          </button>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Signup;