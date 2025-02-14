import {useState,useEffect} from 'react';

export default function TimerUseEffect(){
    const [count,setCount] = useState(0)

    // 1️⃣ Mount
    // Runs only once when the Virtual DOM is first rendered (First Rendering)
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Timer working...");
        }, 1000);

        // 3️⃣ Unmount
        return () => {
            clearInterval(interval); // ✅ Prevents memory leaks
            console.log("Timer finished");
        };
    }, []); // ✅ Empty dependency array → Runs only on mount

    // 2️⃣ Update
    // Runs whenever `count` changes
    useEffect(() => {
        console.log(`Count Changed: ${count}`);
    }, [count]); // ✅ Runs every time `count` updates


    return(
        <div>
            <h1>TimerUserEffect</h1>
            <button onClick={()=>{setCount(prev=>prev+1)}}>Add Count</button>
        </div>
    )
}