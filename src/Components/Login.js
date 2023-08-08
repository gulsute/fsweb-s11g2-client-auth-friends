import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="login">
      <h1 class="text-7xl font-black">LOGIN</h1>
      <form class="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span class="font-black">USERNAME</span> <br />
          <input
            type="text"
            name="username"
            class="bg-black text-white w-80 h-12"
            {...register("USERNAME", { required: true })}
          />
        </label>{" "}
        <br />
        <label>
          <span class="font-black">PASSWORD</span> <br />
          <input
            type="password"
            name="password"
            class="bg-black text-white w-80 h-12"
            {...register("PASSWORD", { required: true, min: 4 })}
          />
        </label>
        <br />
        <label>
          <input
            type="submit"
            class="bg-black text-white w-80 h-12 font-black my-5 capitalize"
          />
        </label>
      </form>
    </div>
  );
}
