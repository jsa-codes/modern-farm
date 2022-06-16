// Define and Export a function that creates an array of (2) identical objects
// It should RETURN an array of identical objects. Each with the proper key/value pairs.
//      type, height, output

export const createCorn = () => {
  const corn = [
    {
      type: 'Corn',
      height: 180,
      output: 6,
    },

    {
      type: 'Corn',
      height: 180,
      output: 6,
    },
  ];
  return corn;
};
