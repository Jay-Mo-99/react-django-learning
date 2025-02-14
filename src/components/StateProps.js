import { useEffect, useState } from "react";
export default function StateProps() { // ✅ Top-Level Component
    const [count, setCount] = useState(0);
    const [initial, setInitial] = useState(0);
    // ✅ Runs only once when the Virtual DOM is first rendered (First Rendering)
    //1️⃣Mount: componentDidMount 
    useEffect(()=>{
        console.log(`First Count: ${count}`)
        console.log(`First Initial: ${initial}`)
    },[])

    // ✅ Triggers when "count" changes
    //2️⃣Update: state,props 변경 시 실행 
    useEffect(()=>{
        console.log(`Count changed: ${count}`);
    },[count])
    // ✅ Triggers when "initial" changes
    //Update
    useEffect(()=>{
        console.log(`Click Initial Button: ${initial}`);
    },[initial])

    
    function Parent() { // ✅ Parent Component

        // ✅ Function for handling initial button
        const handleInitial = () =>{
            setCount(0) // ✅ Count 초기화
            setInitial(prev=>prev+1) // ✅ Initial 증가
        }

        //When call child component, include props for sending data(state or method)
        return <Child
            firstCount={count}
            addCount={() => setCount(prev=>prev+1)}
            subCount={()=>setCount(prev=>prev-1)}
            initialCount={handleInitial}
        />;
        
    }

    // ✅ Child Component
    // props: firstCount(state), addCount(method), subCount
    function Child({ firstCount, addCount,subCount,initialCount }) { 
        return (
            <div>
                <h1>{firstCount}</h1>
                <p><button onClick={addCount}>Add Count</button></p>
                <p><button onClick={subCount}>Sub Count</button></p>
                <p><button onClick={initialCount}>Initialize</button></p>
            </div>
        );
    }

    return (
        <div>
            <Parent /> {/* ✅ Using Parent Component */}
        </div>
    );
}
