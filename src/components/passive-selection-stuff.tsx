import { AnotherOne } from "./another-one";

export const PassiveSelectionStuff = () => {
  const arrNums = [1, 2, 3, 4, 5];
  const arrStrings = ["a", "b", "c", "d", "e"];
  const arrJsx = [<div>div 56</div>, <span>span</span>, <p>paragraph</p>];
  const arrComps = [<AnotherOne />, <AnotherOne />, <AnotherOne />];
  const arrOfKinds = [arrNums, arrStrings, arrJsx, arrComps];
  const arrSubjects = [
    "Array of Numbers",
    "Array of Strings",
    "Array of JSX Elements",
    "Array of Components",
  ];
  return (
    <div>
      <h1>Passive Selection Stuff</h1>
      <h4>Array of Numbers</h4>
      <ul>
        {arrNums.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <h4>Array of Strings</h4>
      <ul>
        {arrStrings.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
      <h4>Array of JSX Elements</h4>
      <ul>
        {arrJsx.map((jsx, index) => (
          <li key={index}>{jsx}</li>
        ))}
      </ul>
      <h4>Array of Components</h4>
      <ul>
        {arrComps.map((comp, index) => (
          <li key={index}>{comp}</li>
        ))}
      </ul>
      <h2>Render directly without map:</h2>
      <div>{arrNums}</div>
      <div>{arrStrings}</div>
      <div>{arrJsx}</div>
      <div>{arrComps}</div>
    </div>
  );
};
