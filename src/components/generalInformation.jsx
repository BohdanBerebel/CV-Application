export default function GeneralInformation({
  mainHeading,
  headings,
  changeData,
  currentData,
}) {
  return (
    <>
      <h1>{mainHeading}</h1>
      <div>
        {headings.map((item) => {
          return (
            <p key={item}>
              <label htmlFor={item}>{`${item}: `}</label>
              <input
                id={item}
                type={
                  item.includes("mail")
                    ? "email"
                    : item.includes("number")
                    ? "tel"
                    : item.includes("Date")
                    ? "date"
                    : "text"
                }
                onChange={changeData}
                value={currentData[item]}
              ></input>
            </p>
          );
        })}
      </div>
    </>
  );
}
