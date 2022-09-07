import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

function Question({ title, info }) {
  const [more, setMore] = useState(false)

  return (
    <article>
      <div className="accordition__top">
        <p>{title}</p>
        <button onClick={() => setMore(!more)} className="btn">
          {more ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className="accordition__content">{more && info}</div>
    </article>
  );
}

export default Question;
