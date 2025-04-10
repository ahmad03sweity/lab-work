import { useState, useEffect } from "react";

export function useCustomHook() {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem("count");
        return savedCount ? parseInt(savedCount, 10) : 0;
    });
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [result, setResult] = useState(() => {
        return localStorage.getItem("result") || "";
    });
    const [currentTime, setCurrentTime] = useState(new Date());
    const [squareColor, setSquareColor] = useState("blue");

    useEffect(() => {
        if (count === 5) {
            alert("Counter is equal 5");
        }

        if (count === 0 || count === 5 || count === 10) {
            localStorage.setItem("count", count.toString());
        }
    }, [count]);

    useEffect(() => {
        localStorage.setItem("result", result);
    }, [result]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const colorInterval = setInterval(() => {
            setSquareColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        }, 100);

        return () => clearInterval(colorInterval);
    }, []);

    return {
        count,
        setCount,
        name,
        setName,
        age,
        setAge,
        result,
        setResult,
        currentTime,
        squareColor,
        setSquareColor,
    };
}