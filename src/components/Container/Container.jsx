import React from "react";

function Container({ children }) {
  return (
    <div class="container mx-auto px-4">
      {children}
    </div>
  );
}

export default Container;
