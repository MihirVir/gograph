import { useState } from "react";
import { TextProps } from "../../types/text-props";

const TextField = ({ name, type, className, onChange, value }: TextProps) => {
  const [focus, setFocus] = useState<boolean>(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setFocus(false);
    }
  };

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className={`relative w-full rounded-lg ${className}`}>
      <label
        className="absolute left-2 bg-white transition-all duration-200"
        style={{
          top: `${focus ? "-25%" : "25%"}`,
        }}
        htmlFor={name}
      >
        {name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        className="border-2 border-black h-full  p-2 w-full rounded-lg"
      />
    </div>
  );
};

export default TextField;
