export const getComponentByFramework = (
  framework: string,
  components: any,
  type: string
) => {
  const frameworkComponent = components[type][framework];

  if (frameworkComponent === undefined) return <span>Not available</span>;

  return frameworkComponent;
};
