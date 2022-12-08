import React { useRef, useEffect} from 'react'

const { tableau } = window;

function BasicEmbed() {
    const ref = useRef(null)
  const url =  'https://public.tableau.com/views/WorkingIteration2NBAHeight/FHeightbyPosition?'

    const initViz = () => { 
        new tableau.Viz(ref.current, url
            width: "100%",
            height: "90vh",)
     }

  UseEffect(initViz, []);

  return (
    <div>
        ref={ref}
    </div>
  )
}

export default BasicEmbed;