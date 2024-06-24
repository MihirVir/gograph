import { ButtonProps } from "../../types/button-props";

const Button = ({ text, className }: ButtonProps) => {
  return (
    <>
      <button
        className={`w-full p-2 border-2 border-black rounded-sm ${className}`}
        style={{ boxShadow: "2px 4px rgb(0,0,0)" }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
