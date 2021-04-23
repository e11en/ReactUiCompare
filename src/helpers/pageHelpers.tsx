export const getComponentByFramework = (
  framework: string,
  components: any,
  type: string
) => {
  const frameworkComponent = components[type][framework];

  if (frameworkComponent === undefined)
    return <h3>This is not available in this kit.</h3>;

  return frameworkComponent;
};
