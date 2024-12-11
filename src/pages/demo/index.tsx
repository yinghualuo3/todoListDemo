import React,{ useEffect, useState, useMemo,useRef } from 'react';

const Demo = () => {
const [content,setContent] = useState('This is demo Page')

useEffect(() => {
 console.log(content);
}, [content]);

return <div className='m-64'>{content}</div>

}

export default Demo;