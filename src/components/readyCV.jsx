export default function Result({ headings, currentData, edit }) {
  const mainHeadings = Object.keys(headings);

  return (
    <div className="CV">
      <h1>Your CV</h1>
      <div>
        {mainHeadings.map((header) => {
          return Section(header, headings, currentData);
        })}
      </div>
      <button type="button" onClick={edit}>
        Edit
      </button>
    </div>
  );
}

function Section(heading, headings, currentData) {
  const subHeadings = [...headings[heading]];
  return (
    <div key={heading} className="section">
      <h2>{heading}</h2>
      <ul>
        {subHeadings.map((item) => {
          return (
            <li key={item}>
              <h3>
                {item}
                {":"}
              </h3>
              <p>{currentData[item]}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
