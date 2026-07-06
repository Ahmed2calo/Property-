type Props = {
  locations: string[];
  selectedLocations: string[];
  setSelectedLocations: React.Dispatch<
    React.SetStateAction<string[]>
  >;

  superhostOnly: boolean;
  setSuperhostOnly: React.Dispatch<
    React.SetStateAction<boolean>
  >;

  bedrooms: number | null;
  setBedrooms: React.Dispatch<
    React.SetStateAction<number | null>
  >;
};

function Filters({
  locations,
  selectedLocations,
  setSelectedLocations,
  superhostOnly,
  setSuperhostOnly,
  bedrooms,
  setBedrooms,
}: Props) {

  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location)
      );
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  return (
    <div>
      <fieldset>
        <legend>Locations</legend>
        {locations.map((location) => (
          <label key={location}>
            <input
              type="checkbox"
              checked={selectedLocations.includes(location)}
              onChange={() => toggleLocation(location)}
            />
            {location}
          </label>
        ))}
      </fieldset>

      <label>
        <input
          type="checkbox"
          checked={superhostOnly}
          onChange={(event) => setSuperhostOnly(event.target.checked)}
        />
        Superhost only
      </label>

      <fieldset>
        <legend>Bedrooms</legend>
        <label>
          <input
            type="radio"
            name="bedrooms"
            checked={bedrooms === null}
            onChange={() => setBedrooms(null)}
          />
          All
        </label>
        {[1, 2, 3].map((count) => (
          <label key={count}>
            <input
              type="radio"
              name="bedrooms"
              checked={bedrooms === count}
              onChange={() => setBedrooms(count)}
            />
            {count}
          </label>
        ))}
      </fieldset>
    </div>
  );
}

export default Filters;