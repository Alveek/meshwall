import { forwardRef } from "react";
import { getRandomNumber as rn } from "../helpers";

const MeshWall = forwardRef<HTMLDivElement>(function MeshWall(props, ref) {
  return (
    <div
      ref={ref}
      className="imageContainer"
      style={{
        backgroundColor: `hsla(${rn(10, 350)}, 100%, 50%, 1)`,
        backgroundImage: `
        radial-gradient(at ${rn(10, 90)}% ${rn(10, 90)}%, hsla(${rn(10, 340)}, ${rn(60, 90)}%, ${rn(60, 90)}%, 1) 0px, transparent ${rn(48, 51)}%),
        radial-gradient(at ${rn(10, 90)}% ${rn(10, 90)}%, hsla(${rn(10, 340)}, ${rn(60, 90)}%, ${rn(60, 90)}%, 1) 0px, transparent ${rn(48, 51)}%),
        radial-gradient(at ${rn(10, 90)}% ${rn(10, 90)}%, hsla(${rn(10, 340)}, ${rn(60, 90)}%, ${rn(60, 90)}%, 1) 0px, transparent ${rn(48, 51)}%),
        radial-gradient(at ${rn(10, 90)}% ${rn(10, 90)}%, hsla(${rn(10, 340)}, ${rn(60, 90)}%, ${rn(60, 90)}%, 1) 0px, transparent ${rn(48, 51)}%),
        radial-gradient(at ${rn(10, 90)}% ${rn(10, 90)}%, hsla(${rn(10, 340)}, ${rn(60, 90)}%, ${rn(60, 90)}%, 1) 0px, transparent ${rn(48, 51)}%),
        radial-gradient(at ${rn(10, 90)}% ${rn(10, 90)}%, hsla(${rn(10, 340)}, ${rn(60, 90)}%, ${rn(60, 90)}%, 1) 0px, transparent ${rn(48, 51)}%),
        radial-gradient(at ${rn(10, 90)}% ${rn(10, 90)}%, hsla(${rn(10, 340)}, ${rn(60, 90)}%, ${rn(60, 90)}%, 1) 0px, transparent ${rn(48, 51)}%)
         `,
      }}
    ></div>
  );
});

export default MeshWall;
