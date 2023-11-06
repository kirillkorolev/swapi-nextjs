export const getCharacterData = async (id: string) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
  
    if (!response.ok) throw new Error("Unable to fetch character details.");
  
    return response.json();
  };