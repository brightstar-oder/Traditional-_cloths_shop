import React from "react";

export default function Button({ children, variant = "primary" }) {
  // Base styling for all buttons
  const base = "px-5 py-3 rounded-full font-semibold transition-all duration-300";

  // Variant-specific styling
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
