import { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } from "react";

// ✅ 1. Context 생성 (전역 상태 관리)
const ClickContext = createContext();

export default function TimerApp() {
    const [time, setTime] = useState(0);  // ✅ useState: 타이머 상태 관리
    const [isRunning, setIsRunning] = useState(false);
    const [clicks, setClicks] = useState(0); // ✅ useState: 버튼 클릭 수 저장
    const timerRef = useRef(null); // ✅ useRef: setInterval 저장 (타이머 정지 구현)

    // ✅ 2. useEffect: 타이머 자동 증가 및 정리
    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timerRef.current);
        }
        return () => clearInterval(timerRef.current); // ✅ Cleanup (메모리 누수 방지)
    }, [isRunning]); // ✅ isRunning 변경될 때 실행

    // ✅ 3. useMemo: 계산된 값 캐싱 (불필요한 연산 방지)
    const doubleTime = useMemo(() => {
        console.log("Calculating double time...");
        return time * 2;
    }, [time]);

    // ✅ 4. useCallback: 불필요한 함수 재생성 방지
    const resetTimer = useCallback(() => {
        setTime(0);
        setIsRunning(false);
        setClicks(prev => prev + 1); // ✅ useContext와 함께 사용
    }, []);

    return (
        <ClickContext.Provider value={{ clicks, setClicks }}>
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>⏳ Timer: {time} sec</h1>
                <h2>⏩ Double Time: {doubleTime} sec</h2> {/* ✅ useMemo 결과 */}
                <button onClick={() => setIsRunning(!isRunning)}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button onClick={resetTimer}>Reset</button>
                <ClickCounter /> {/* ✅ useContext 활용 */}
            </div>
        </ClickContext.Provider>
    );
}

// ✅ 5. useContext 사용: 클릭 횟수 전역 관리
function ClickCounter() {
    const { clicks } = useContext(ClickContext);
    return <h3>🔄 Resets: {clicks}</h3>;
}
