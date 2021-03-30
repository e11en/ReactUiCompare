export const getComponentByFramework = (framework: string, components: any) => {
  const frameworkComponent = components[framework];

  if (frameworkComponent === undefined) return <span>Not available</span>;

  return frameworkComponent;
};
