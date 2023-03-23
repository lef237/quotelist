// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Mount from "./Mount";

const MountComponents = (
  component: unknown,
  divName: string,
  divElements:  NodeListOf<HTMLDivElement>
) => {
  // const names = Array.from(
  //   { length: numberOfComponents },
  //   (_, index) => `${divName}${index + 1}`
  // );
  console.log(divElements)

  const elements = [];

  for (let i = 0; i < divElements.length; i++) {
    if (divElements[i].id.includes(divName)) {
      elements.push(divElements[i]);
    }
  }

  console.log(elements);

  const divNames = Array.from(elements).map((div) => div.id);

  console.log(divNames)

  divNames.forEach((name) => {
    Mount(component, name);
  });
};

export default MountComponents;
