
const React = require("react");
const QAPI = require("./qapi").default;

export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shadows%20Into%20Light:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Parisienne:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Petit%20Formal%20Script:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel%20Decorative:ital,wght@0,400;0,700;0,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin%20Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Caveat:ital,wght@0,400;0,700&display=swap" />,
  ]);

  setPostBodyComponents([
        <script
            key="QAPI"
            dangerouslySetInnerHTML={{
                __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
            }}
        />,
  ]);
}
