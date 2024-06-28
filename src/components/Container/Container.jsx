import React from "react";

function Container({ children }) {
  return (
    <div class="max-w-screen-xl mx-auto px-5 py-10">
      {children}
    </div>
  );
}

export default Container;
