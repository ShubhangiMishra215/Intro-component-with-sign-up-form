import React, { useState } from "react";
import { CircleAlert } from "lucide-react";

const InputField = ({
  name,
  type,
  placeholder,
  formData,
  setFormData,
  submitted,
}) => {
  const isError = submitted && !formData[name];

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={changeHandler}
          placeholder={placeholder}
          className={`
            border
            rounded-md
            p-[0.8rem]
            pr-[3rem]
            w-full
            text-[1rem]
            text-[hsl(0,0%,7%)]
            font-semibold
            focus:outline-1

            ${isError ? "border-[hsl(0,100%,74%)]" : "border-[hsl(252,4%,77%)]"}
          `}
        />

        {isError && (
          <CircleAlert
            size={20}
            className="
              absolute
              right-[1rem]
              top-1/2
              -translate-y-1/2
              text-white
              fill-[hsl(0,100%,74%)]
            "
          />
        )}
      </div>

      {isError && (
        <p className="text-[hsl(0,100%,74%)] text-right text-[0.7rem] italic pt-1">
          {placeholder} cannot be empty
        </p>
      )}
    </div>
  );
};

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function submitHandler(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main
      className={`
      bg-[hsl(0,100%,74%)]
      bg-[url('/bg-intro-mobile.png')]
      min-h-screen
      px-[1.5rem]
      py-[5.5rem]

      md:grid
      md:grid-cols-2
      md:justify-center
      md:items-center
      md:px-[10rem]
      md:gap-[6rem]
      md:py-0
      md:bg-[url('/bg-intro-desktop.png')]
    `}
    >
      {/* Heading */}
      <div className="md:text-left">
        <h1 className="text-[2rem] font-bold text-white leading-tight text-center md:text-[3rem] md:text-left px-[1rem]">
          Learn to code by watching others
        </h1>

        <p className="text-[1rem] pt-[1.8rem] px-[1rem] text-[hsl(240,17%,93%)] text-center font-medium md:text-[1.1rem] md:pt-[2rem] md:text-left">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div>
        <div className="pt-[3.8rem]">
          <p className="bg-[hsl(248,32%,49%)] text-[1rem] text-center font-normal px-[2rem] py-[1rem] rounded-xl shadow-[0_8px_0_rgba(0,0,0,0.1)] text-white">
            <span className="font-bold">Try it free 7 days </span>
            then $20/mo. thereafter
          </p>
        </div>

        {/* Form */}
        <div className="pt-[2rem]">
          <form
            onSubmit={submitHandler}
            className="bg-white p-[1.5rem] rounded-xl flex flex-col gap-4 shadow-[0_6px_0_rgba(0,0,0,0.2)]"
          >
            <InputField
              name="firstName"
              type="text"
              placeholder="First Name"
              formData={formData}
              setFormData={setFormData}
              submitted={submitted}
            />

            <InputField
              name="lastName"
              type="text"
              placeholder="Last Name"
              formData={formData}
              setFormData={setFormData}
              submitted={submitted}
            />

            <InputField
              name="email"
              type="email"
              placeholder="Email Address"
              formData={formData}
              setFormData={setFormData}
              submitted={submitted}
            />

            <InputField
              name="password"
              type="password"
              placeholder="Password"
              formData={formData}
              setFormData={setFormData}
              submitted={submitted}
            />

            <button
              type="submit"
              className="bg-[hsl(154,59%,51%)] p-[1rem] text-[1rem] text-white font-semibold uppercase rounded-md shadow-inner"
            >
              Claim your free trial
            </button>

            <p className="text-[0.8rem] text-center text-[hsl(240,10%,77%)] font-medium px-[0.5rem]">
              By clicking the button, you are agreeing to our
              <span className="text-[hsl(0,100%,74%)] font-semibold">
                {" "}
                Terms and Services
              </span>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
