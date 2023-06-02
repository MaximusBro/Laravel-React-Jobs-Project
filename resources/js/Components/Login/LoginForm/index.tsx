import { useCallback, FormEvent } from "react";
//Icons
import EmailIcon from "/public/assets/images/icon/email-2.svg";

//useForm Inertia
import { useForm } from '@inertiajs/react';

//Components
import InputText from "@/Components/InputText";
import InputPassword from "@/Components/InputPassword";
import InputCheckBox from "@/Components/InputCheckBox";

const LoginForm = () => {

  const { data, setData, reset, processing } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const onSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    reset();
  }, [])

  return (
    <>
      <form onSubmit={onSubmit} >
        <div className="row">
          <InputText
            value={data.email}
            onChange={e => setData('email', e.target.value)}
            className="col-lg-12"
            name="email"
            title="Email*"
            srcIcon={EmailIcon}
            placeholder="Jonson" />

          <InputPassword
            value={data.password}
            onChange={e => setData('password', e.target.value)}
            className="col-lg-12"
            name="password"
            title="Password*"
            placeholder="Password" />

          <InputCheckBox
            onChange={e => setData('remember', e.target.checked)}
            value={data.remember}
            className="col-lg-12"
            name="remeber"
            text="Remember Me" >
            <a href="#" className="forgot-pass">Forget Password?</a>
          </InputCheckBox>

          <div className="col-lg-12">
            <div className="form-inner">
              <button
                disabled={processing}
                className="primry-btn-2" type="submit">LogIn</button>
            </div>
          </div>
          <h6>Don’t have an account? <a href="register.html">Sign Up</a></h6>
        </div>
      </form >

    </>
  )
}

export default LoginForm