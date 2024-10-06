import {useNavigate } from "react-router";
import { userLogin } from "../../Api/auth";
import { useLogin } from "../../Context/login-Context";

const Login = () => {
  const { loginDispatch,email,password } = useLogin();
  const navigate=useNavigate()    
  const onFormSubmit = async(e) => {
    e.preventDefault();
    const data= await userLogin(email,password);
    
    loginDispatch({
      type:'TOKEN',
      payload:{
        token:data
      }
    })
    if(data.access_token){
      navigate('/')
    }
  };

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="bg-white shadow-2xl  w-[400px] p-10 rounded-lg mt-28"
    >
      < h1 className=" flex justify-center bg-rose-200 mb-5 font-semibold text-2xl rounded-md p-2">
        LOGIN
      </h1>
      <div className="flex flex-col gap-2 ">
        <span >Email </span>
        <input
          className="border rounded"
          onChange={onEmailChange}
          type="email"
          required
          placeholder="email"
        />
      </div>
      <div className="flex flex-col gap-2 r mt-4">
        <span>password </span>
        <input
          className="border rounded"
          onChange={onPasswordChange}
          type="password"
          required
          placeholder="password"
        />
      </div>
      <div className="mx-8 flex gap-4">
        <button className="button bg-slate-500 cart-btn d-flex   gap btn-margin cursor ">
          SignIn
        </button>
        <div>
        <button onClick={()=>navigate('/usercreation')} className="button bg-slate-500 cart-btn d-flex   gap btn-margin cursor ">
          SignUp
        </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
