import React from 'react';
import { createRoot } from 'react-dom/client';

const Mount = (Component, mountNodeId) => {
  const mountNode = document.getElementById(mountNodeId);
  const props = JSON.parse(mountNode.getAttribute('data'));
  console.log(props)
  createRoot(mountNode).render(<Component {...props}/>)
}

export default Mount
