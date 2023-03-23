// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Mount from "./Mount";

const MountComponents = (
  component: unknown,
  divName: string,
  divElements: NodeListOf<HTMLDivElement>
) => {
  const elements = [];

  for (let i = 0; i < divElements.length; i++) {
    if (divElements[i].id.includes(divName)) {
      elements.push(divElements[i]);
    }
  }

  const divNames = Array.from(elements).map((div) => div.id);

  divNames.forEach((name) => {
    Mount(component, name);
  });
};

export default MountComponents;
