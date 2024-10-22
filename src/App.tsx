import "./App.css";
import domtoimage from "dom-to-image";
import { useRef, useState, useMemo, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Download, Shuffle, Copy, Github } from "lucide-react";
import MeshWall from "./components/MeshWall";
import Button from "./components/Button";

const App = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [screenWidth] = useState(window.screen.width);
  const [screenHeight] = useState(window.screen.height);

  // const state here just for triggering updage MeshWall component, when a user clicks on 'shuffle' button, state updates count + 1, which triggers useMemo hook to update component with gradient
  const [state, setState] = useState(1);
  const [copied, setCopied] = useState(false);
  const [cssStyles, setCssStyles] = useState("");

  useEffect(() => {
    if (imageContainerRef.current instanceof Node) {
      setCssStyles(`.meshwall {
        background-color: ${imageContainerRef.current.style.backgroundColor};
        background-image: ${imageContainerRef.current.style.backgroundImage};
      }`);
    }
  }, [state]);

  const meshWallComponent = useMemo(() => {
    return <MeshWall ref={imageContainerRef} />;
  }, [state]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1400);
  };

  const options = {
    width: screenWidth,
    height: screenHeight,
  };

  const handleDownload = () => {
    domtoimage
      .toPng(imageContainerRef.current!, options)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "meshwall.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <main className="main">
      <h1 className="logo gradient-text">Meshwall</h1>
      <a
        className="github-link"
        href="https://github.com/Alveek/meshwall"
        rel="noreferrer"
        target="_blank"
      >
        <Github color="white" />
      </a>

      {state && meshWallComponent}

      <div className="controls">
        <CopyToClipboard text={cssStyles} onCopy={handleCopy}>
          <Button>
            <Copy />
          </Button>
        </CopyToClipboard>

        <Button className="btn-shuffle" onClick={() => setState((prev) => prev + 1)}>
          <Shuffle />
        </Button>

        <Button onClick={handleDownload}>
          <Download />
        </Button>
      </div>

      {copied && <span className="message-copy">CSS copied!</span>}
    </main>
  );
};

export default App;
