import React from "react";

const Chip = ({ title }) => {
  return (
    <div class="center mr-2 mb-3 relative inline-block select-none whitespace-nowrap rounded-lg bg-gradient-to-tr from-primary-800 to-primary-600 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
      <div class="mt-px">{title}</div>
    </div>
  );
};

export default Chip;
