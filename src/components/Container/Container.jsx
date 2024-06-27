import React from "react";

function Container({ children }) {
  return (
    <div class="max-w-screen-xl mx-auto px-4">
      {children}
    </div>
  );
}

export default Container;
