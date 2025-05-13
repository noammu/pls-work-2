import { memo } from "react";
import styles from "./dom-tree.module.css";

export const DomTree = memo(() => {
  const asidi = "I am aside";
  return (
    <div className="dom-tree">
      lalala lksfdjhb lsdkjgf hkjdflhjdkjs hf kfhkfhkfhlkfjflkjgflk fkh lk
      hsglhkghlkhflkhdlghs jhsdlh dskjgl hdsfk jglhfkgs fse dfkljg
      <h1 className={styles.subject}>DOM Tree</h1>
      {true ? <div>True</div> : <div>False</div>}
      <p>
        This is a placeholder
        <br /> for the DOM tree.
      </p>
      <ul className={styles.text}>
        <li>HTML</li>
        <li>HEAD</li>
        <li>BODY</li>
      </ul>
      <div className={styles.displayNone}>lol you cant see me</div>
      <aside
        className={`${styles.lala} ${styles.lil} ${styles.lul} ${styles.lol} ${styles.na} ${styles.one} ${styles.two} ${styles.three} ${styles.oneTwo} ${styles.oneThree} ${styles.oneFour} ${styles.oneFive} ${styles.oneSix} ${styles.oneSeven} `}
      >
        {asidi}
        <h2>Elements</h2>
        <button>Click me</button>
        <input
          type="text"
          placeholder="Type here"
          className={`${styles.lala} ${styles.lil} ${styles.lul} ${styles.lol} ${styles.na} ${styles.one} ${styles.two} ${styles.three} ${styles.oneTwo} ${styles.oneThree} ${styles.oneFour} ${styles.oneFive} ${styles.oneSix} ${styles.oneSeven} `}
        />
        <input type="checkbox" /> Check me
        <input type="radio" /> Radio me
        <input type="file" /> Upload me
        <input type="color" /> Color me
      </aside>
      <h3>Sub-elements</h3>
      {/* stop adding ul and li, p and divs. add something else */}
      <canvas id="canvas" width="500" height="500"></canvas>
      <img
        src="https://i.ebayimg.com/images/g/B~gAAOSwhNthhdjn/s-l1200.jpg"
        alt="Placeholder"
        className={styles.img}
      />
      <main>
        main
        <br />
        <h4>h444444444</h4>
        <article>article</article>
        <h5>h555555555</h5>
        <section>
          section
          <pre>lala</pre>
          <span>spany</span>
        </section>
      </main>
      <h6>h666666666</h6>
      <ul>
        {Array.from({ length: 5 }, (_, i) => (
          <li key={i}>Element {i + 1}</li>
        ))}
      </ul>
      <footer>woohoo i'm a footer</footer>
    </div>
  );
});
