import { useState, useRef, useEffect } from "react";

export default function PreviousValue() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(0);  // ✅ 이전 값 저장용 ref

    useEffect(() => {
        prevCountRef.current = count;  // ✅ useEffect에서 이전 값 저장
    }, [count]);

    return (
        <div>
            <h2>useRef for Storing Previous Value</h2>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCountRef.current}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increase Count</button>
        </div>
    );
}
