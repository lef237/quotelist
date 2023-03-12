// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Mount from "./Mount";

const MountComponents = (
  component: unknown,
  divName: string,
  numberOfComponents = 30
) => {
  const names = Array.from(
    { length: numberOfComponents },
    (_, index) => `${divName}${index + 1}`
  );

  names.forEach((name) => {
    Mount(component, name);
  });
};

export default MountComponents;
