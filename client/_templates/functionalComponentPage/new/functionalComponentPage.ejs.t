---
to: src/pages/<%= name %>/<%= name %>.js
---

import React from 'react';
import "./<%= name %>.css";

// Function based React Page Component 
const <%= name %> = (props) => {

  // Default Class to apply to Component
  let classList = `<%= name %>`;


  return(
    <div className={classList}>
      <%= name %>
    </div>
  );
}

export default <%= name %>;