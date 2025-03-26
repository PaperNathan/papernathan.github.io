import "@/shared/styles/typography.scss";
import "./StyleGuide.scss";
import Image from "@/components/Image/Image";
import Code from "@/components/Code/Code";

export default function StyleGuide() {
  const colors = ["#201127", "#201433", "#1b1e34", "#355d68", "#6aaf9d", "#94c5ac", "#ec9a6d", "#ffc27a", "#ffeb99", "#a73169", "#c24b6e", "#d9626b"]

  const code = `
  // Logic stored in Code component
  <Code code={ code } />
  `
  return (
    <div className="StyleGuide">
      <h1 style={{ color: "white", borderBottom: "1px dashed white" }}>Style Guide</h1>

      <div className="StyleGuide__grid">
        <div className="StyleGuide__left">
          <h1>Heading Styles</h1>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>

          <h1>Text Styles</h1>
          <h2>Paragraphs</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a luctus nunc. Fusce nec justo pharetra, efficitur nisl eget, molestie eros. Etiam a dui turpis. Etiam quam nisi, dictum id felis vitae, laoreet vestibulum ex. Quisque id tincidunt eros. Nam ipsum nibh, dignissim eget sagittis ut, efficitur in urna. Sed bibendum maximus lorem vehicula tempor. Nunc eros elit, malesuada eu accumsan eget, facilisis quis lorem. Sed quis ipsum id tellus interdum finibus. Donec nulla sem, hendrerit et elit vitae, vulputate mattis mi. Proin mollis tellus eros, ut pharetra arcu auctor quis. Ut bibendum tincidunt turpis quis bibendum. Praesent sed aliquet urna.</p>
          <p>Fusce non ultricies urna, et vestibulum diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In maximus libero vitae ex vehicula, nec rutrum eros interdum. Aenean hendrerit elit vitae blandit efficitur. Duis ut purus augue. Curabitur id diam nec risus auctor ornare in id nulla. Ut congue purus dui. Etiam rhoncus ac diam sed feugiat. Aenean nec magna ut ante finibus imperdiet. Nunc blandit libero nec dictum mollis. Cras euismod placerat vestibulum. In hac habitasse platea dictumst.</p>
          
          <h2>Inline Formatting</h2>
          <b>Bold</b>
          <br />
          <i>Italic</i>
          <br />
          <mark>Marked</mark>
          <br />
          <del>Deleted</del>
          <br />
          <ins>Inserted</ins>
          <br />
          Sub<sub>script</sub>
          <br />
          Super<sup>script</sup>
          <br />

          <h3>Custom Inline Formatting</h3>
          <h4>Single Inline Code Snippet</h4>
          <span className="type__code">{ '<span class="type__code"> console.log("code") </span>' }</span>
          <h4>Multiline Code Snippet</h4>
          <Code code={ code } />

          <h1>List Styles</h1>
          <h2>Unordered List</h2>
          <ul>
            { Array.from({ length:3 }, (_, i) => <li key={ `first_ul_${i}` }>Unordered List Item</li>) }
            <ul>
              { Array.from({ length:3 }, (_, i) => <li key={ `second_ul_${i}` }>Unordered List Item</li>) }
            </ul>
          </ul>
  
          <h2>Ordered List</h2>
          <ol>
            { Array.from({ length:3 }, (_, i) => <li key={ `first_ol_${i}` }>Ordered List Item</li>) }
            <ol type="a">
              { Array.from({ length:3 }, (_, i) => <li key={ `second_ol_${i}` }>Ordered List Item</li>) }
            </ol>
          </ol>
  
          <blockquote>Blockquote</blockquote>
          <pre>Preformatted text</pre>    
        </div>

        <div className="StyleGuide__right">
          <h1>Colors</h1>
          <div className="StyleGuide__colors">
            { colors.map((c) => <div key={ c } className="StyleGuide__color" style={{ backgroundColor: `${c}` }}>{c}</div>) }
          </div>

          <h1>Images</h1>
          <Image alt="Placeholder" />
          <Image alt="Placeholder" caption="Image with caption" />
        </div> 
      </div> 
    </div>
  )
}
