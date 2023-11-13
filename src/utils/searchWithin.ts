/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
const searchWithinObject = (searchTerm: string, arrayOfObjects: any) => {
  // Convert the search term to lowercase for case-insensitive search
  const searchTermLower = searchTerm.toLowerCase();

  function deepSearch(object: any) {
    // Loop through the properties of the object
    for (const key in object) {
      const value = object[key];

      if (typeof value === 'object' && value !== null) {
        // If the property is an object, recursively search its properties
        if (deepSearch(value)) {
          return true; // Found a match in nested properties
        }
      } else if (value.toString().toLowerCase().includes(searchTermLower)) {
        return true; // Found a match in this property
      }
    }

    return false; // No match in this object
  }

  // Use the filter method to find objects that match the search term
  const matchingObjects = arrayOfObjects.filter((object: any) => {
    return deepSearch(object);
  });

  return matchingObjects;
};

export default searchWithinObject;
