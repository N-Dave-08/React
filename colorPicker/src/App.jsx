import React, { useState } from "react"
import ChooseColor from "./ChooseColor"
import CssCode from "./cssCode"

function App() {

  const [color, setColor] = useState("#FFFFFF");
  const [radius, setRadius] = useState("10px");
  const [shadowColor, setshadowColor] = useState("#dbdbdb");
  const [shadowHorizontal, setshadowHorizontal] = useState("0px");
  const [shadowVertical, setshadowVertical] = useState("0px");
  const [shadowBlur, setshadowBlur] = useState("30px");

  return (
    <>
      <ChooseColor
        color={color} setColor={setColor}
        radius={radius} setRadius={setRadius}
        shadowColor={shadowColor} setshadowColor={setshadowColor}
        shadowHorizontal={shadowHorizontal} setshadowHorizontal={setshadowHorizontal}
        shadowVertical={shadowVertical} setshadowVertical={setshadowVertical}
        shadowBlur={shadowBlur} setshadowBlur={setshadowBlur}

      />
      <CssCode
      color={color}
      radius={radius}
      shadowColor={shadowColor}
      shadowHorizontal={shadowHorizontal}
      shadowVertical={shadowVertical}
      shadowBlur={shadowBlur}
      
      />
    </>
  )
}

export default App
