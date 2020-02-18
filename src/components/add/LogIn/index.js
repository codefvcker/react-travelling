import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button";
import { Label } from "../Label";
import { Input } from "../Input";

import "./LogIn.css";

export const LogIn = () => {
  return (
    <form className="login-form">
      <div className="login-form__top-wrap">
        <div className="login-form__logo-wrap">
          <Label type="bold">Logo</Label>
        </div>
        <h2 className="login-form__descr-wrap">
          <Label type="semi">Sign in to your account</Label>
        </h2>
      </div>
      <div className="login-form__inputs-wrap">
        <div className="login-form__input-wrap">
          <Input
            className="login-form__input"
            type="text"
            placeholder="username / e-mail"
          />
        </div>
        <div className="login-form__input-wrap">
          <Input
            className="login-form__input"
            type="text"
            placeholder="password"
          />
        </div>
      </div>
      <div className="login-form__bottom-wrap">
        <div className="login-form__btn-wrap">
          <Button className="login-form__sbmt" type="submit">
            Sign In
          </Button>
        </div>
        <div className="login-form__links-wrap">
          <Link to="#">
            <Label className="login-form__link" type="semi">
              Create account
            </Label>
          </Link>
          <Link to="#">
            <Label className="login-form__link" type="semi">
              Forgot password?
            </Label>
          </Link>
        </div>
      </div>
    </form>
  );
};
