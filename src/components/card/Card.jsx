import React, { useEffect, useRef } from "react";
import { CardStyle } from "../styles/Style";

const Card = () => {
  const ref = useRef();

  const colorArray = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige ",
    "bisque ",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    " brown ",
    "burlywood ",
    "cadetblue",
    "chartreuse",
    " chocolate ",
    " coral ",
    " cornflowerblue ",
    " cornsilk ",
    " crimson ",
    " cyan ",
    " darkblue ",
    " darkcyan ",
    " darkgoldenrod ",
    " darkgray ",
    " darkgreen ",
    " darkgrey ",
    " darkkhaki ",
    " darkmagenta ",
    " darkolivegreen ",
    " darkorange ",
    " darkorchid ",
    " darkred ",
    " darksalmon ",
    " darkseagreen ",
    " darkslateblue ",
    " darkslategrey ",
    " darkturquoise ",
    " darkviolet ",
    " deeppink ",
    " deepskyblue ",
    " dimgray ",
    " dimgrey ",
    " dodgerblue ",
    " firebrick ",
    " floralwhite ",
    " forestgreen ",
    " fuchsia",
    " gainsboro ",
    " ghostwhite ",
    "gold",
    "goldenrod",
    "gray",
    "green",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      ref.current.style.background =
        colorArray[Math.round(Math.random() * colorArray.length)];
    }, 1000);
  }, [ref, colorArray]);

  return <CardStyle ref={ref}></CardStyle>;
};

export default Card;
