import React, { useRef, useState } from "react";
import Card from "./card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is the first Notes for this app.",
      filesize: ".9mb",
      close: "false",
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Hello World DSA Padhlo guys.",
      filesize: ".9mb",
      close: "true",
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      desc: "Web Dev + Web 3 sikhlo mitron.",
      filesize: ".9mb",
      close: "true",
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap py-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
