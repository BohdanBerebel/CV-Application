import { useState } from "react";
import Button from "./button";
import GeneralInformation from "./generalInformation";
import Result from "./readyCV";
import "../styles/styles.css";

export default function Form() {
  const [ready, setReady] = useState(false);
  const [page, setPage] = useState(0);
  const [inputData, setData] = useState({
    Name: "",
    Email: "",
    "Phone number": "",
    "School name": "",
    "Title of study": "",
    "Date of study": "",
    "Company name": "",
    "Position title": "",
    "Main responsibilities": "",
    "Period of work": "",
  });

  function renovateData(e) {
    setData({ ...inputData, [e.target.id]: e.target.value });
    // console.log(newData);
  }
  function toFirstPage() {
    setReady(false);
    setPage(0);
  }
  const headings = {
    "General information": ["Name", "Email", "Phone number"],
    "Educational experience": [
      "School name",
      "Title of study",
      "Date of study",
    ],
    "Practical experience": [
      "Company name",
      "Position title",
      "Main responsibilities",
      "Period of work",
    ],
  };
  let count = 0;
  for (let k in headings) {
    if (headings.hasOwnProperty(k)) {
      ++count;
    }
  }

  // console.log(headings);
  return ready ? (
    <Result headings={headings} currentData={inputData} edit={toFirstPage} />
  ) : (
    <form>
      <GeneralInformation
        mainHeading={Object.keys(headings)[page]}
        headings={Object.values(headings)[page]}
        changeData={renovateData}
        currentData={inputData}
      />
      <div className="buttons">
        <Button
          text={"Previous page"}
          shiftPage={() => {
            page > 0 && setPage(page - 1);
          }}
          disabled={page === 0}
        />
        {page < count - 1 ? (
          <Button
            text={"Next page"}
            shiftPage={() => {
              page < count - 1 && setPage(page + 1);
            }}
            disabled={page === count - 1}
          />
        ) : (
          <Button
            text="Submit"
            shiftPage={() => {
              if (Object.values(inputData).includes("")) console.log("Not yet");
              else {
                setReady(true);
              }
            }}
          />
        )}
      </div>
      <p>
        Page {page + 1} out of {count}
      </p>
    </form>
  );
}
