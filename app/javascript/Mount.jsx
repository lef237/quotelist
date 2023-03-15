import React from "react";
import { createRoot } from "react-dom/client";

const Mount = (Component, mountNodeId) => {
  const mountNode = document.getElementById(mountNodeId);
  // 受け渡す`data`がある場合とない場合があるので、ブラウザコンソール上で「Uncaught TypeError: Cannot read properties of null (reading 'getAttribute')」が表示されても大丈夫。
  // また、MountComponents.tsxでも使われているので、ここではまだ明確な値が入っておらず、それが上記のメッセージが表示される理由になっている。
  const props = JSON.parse(mountNode.getAttribute("data"));
  createRoot(mountNode).render(<Component {...props} />);
};

export default Mount;
