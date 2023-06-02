import React, { memo, useCallback, useState, useEffect, FormEvent } from "react";

// Components
import InputText from "@/Components/InputText";
import InputSelect from "@/Components/InputSelect";
import InputPassword from "@/Components/InputPassword";
import InputCheckBox from "@/Components/InputCheckBox";

import { useForm } from "@inertiajs/react";

//Icons
import UserIcon from "/public/assets/images/icon/user-2.svg";
import EmailIcon from "/public/assets/images/icon/email-2.svg";
import CompanyIcon from "/public/assets/images/icon/company-2.svg";
import CategoryIcon from "/public/assets/images/icon/category-2.svg";

interface RegisterFormProps {
  variant: string,
}
type initialValues = Record<string, unknown> & {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  companyName?: string;
  companyType?: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
};
// Options for  <InputSelect>
const options = ["Digital Agency", "Digital Marketing Agency", "Software Company"];

//Default for useForm values
const condidateFields: initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreement: false,
}

const RegisterForm: React.FC<RegisterFormProps> = memo(({ variant }) => {

  const { data, setData, processing, reset } = useForm(condidateFields)

  useEffect(() => {
    if (variant === "company") {
      setData({
        ...condidateFields,
        companyName: "",
        companyType: options[0]
      });

    } else {
      setData(condidateFields);
    }
  }, [variant]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    reset()
  }

  return (
    <div className="tab-pane fade show active"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab">

      <form onSubmit={onSubmit}>
        <div className="row">

          <InputText
            onChange={e => setData('firstName', e.target.value)}
            value={data.firstName}
            className="col-md-6"
            name="firstName"
            title="First Name*"
            srcIcon={UserIcon}
            placeholder="Mr. Robert" />

          <InputText
            value={data.lastName}
            onChange={e => setData('lastName', e.target.value)}
            className="col-md-6"
            name="lastName"
            title="Last Name*"
            srcIcon={UserIcon}
            placeholder="Jonson" />

          <InputText
            value={data.userName}
            onChange={e => setData('userName', e.target.value)}
            className="col-md-6"
            name="userName"
            title="User Name*"
            srcIcon={UserIcon}
            placeholder="Jonson" />

          <InputText
            value={data.email}
            onChange={e => setData('email', e.target.value)}
            className="col-md-6"
            name="email"
            title="Email*"
            srcIcon={EmailIcon}
            placeholder="info@example.com" />

          {variant === "company" ?
            <>
              <InputText
                value={data.companyName || ""}
                onChange={e => setData('companyName', e.target.value)}
                className="col-md-6"
                name="companyName"
                autoComplete="companyName"
                title="Company Name*" srcIcon={CompanyIcon}
                placeholder="Mr. Robert" />

              <InputSelect
                value={data.companyType || ""}
                onChange={e => setData('companyType', e.target.value)}
                className="col-md-6"
                name="companyType"
                title="Company Type*"
                srcIcon={CategoryIcon}
                options={options} />

            </> : null}

          <InputPassword
            value={data.password}
            onChange={e => setData('password', e.target.value)}
            className="col-md-6"
            name="password"
            title="Password*"
            placeholder="Password" />

          <InputPassword
            value={data.confirmPassword}
            onChange={e => setData('confirmPassword', e.target.value)}
            className="col-md-6"
            name="confirmPassword"
            title="Confirm Password*"
            placeholder="Confirm Password" />

          <InputCheckBox
            value={data.agreement}
            onChange={e => setData('agreement', e.target.checked)}
            className="col-md-12"
            name="agreement"
            text="Here, I will agree company terms & conditions." />

          <div className="col-md-12">
            <div className="form-inner">
              <button
                disabled={processing}
                className="primry-btn-2"
                type="submit">Sign Up</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
})

export default RegisterForm