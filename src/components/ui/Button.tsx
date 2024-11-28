import React from "react";
// import Spinner from "./Spinner";

interface ButtonProps {
  children: React.ReactNode; // Correct type for children
  type: "button" | "submit" | "reset"; // Can be 'button', 'submit', or 'reset'
  fn?: () => void; // The function to be executed when the button is clicked
  loading?: boolean;
  disabled?: boolean;
  style: "primary" | "secondary" | "reverse";
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  fn,
  loading,
  disabled,
  style,
}) => {
  return (
    <button
      onClick={fn}
      disabled={loading || disabled} // Disable the button when loading or manually disabled
      type={type}
      className={`btn whitespace-nowrap  ${
        style === "primary" && "bg-primary text-white  "
      } 
      ${style === "secondary" && "text-primary border border-primary"} 
      ${style === "reverse" && "bg-white text-primary "} 
      
      ${disabled && style === "primary" && "bg-primary-200  text-white-200"} ${
        disabled && style === "secondary" && "bg-secondary-300  text-white-200"
      } `} // Add your button styles here
    >
      {loading ? (
        <div className="flex justify-center w-full">
          <span className="btn-loader"></span>
        </div>
      ) : (
        <span className="label">{children}</span>
      )}
    </button>
  );
};

export default Button;
