function Numbers({onInput}) {

    return (
        <div>
            <div>
                <button onClick={() => onInput("AC")} className="number ac-glow-on-hover">AC</button>
                <button onClick={() => onInput("C")} className="number glow-on-hover">C</button>
                <button onClick={() => onInput("%")} className="number glow-on-hover">%</button>
                <button onClick={() => onInput("/")} className="operator dark-glow-on-hover">÷</button>
            </div>
            <div>
                <button onClick={() => onInput(7)} className="number">7</button>
                <button onClick={() => onInput(8)} className="number">8</button>
                <button onClick={() => onInput(9)} className="number">9</button>
                <button onClick={() => onInput("*")} className="operator dark-glow-on-hover">×</button>
            </div>
            <div>
                <button onClick={() => onInput(4)} className="number">4</button>
                <button onClick={() => onInput(5)} className="number">5</button>
                <button onClick={() => onInput(6)} className="number">6</button>
                <button onClick={() => onInput("-")} className="operator dark-glow-on-hover">−</button>
            </div>
            <div>
                <button onClick={() => onInput(1)} className="number">1</button>
                <button onClick={() => onInput(2)} className="number">2</button>
                <button onClick={() => onInput(3)} className="number">3</button>
                <button onClick={() => onInput("+")} className="operator dark-glow-on-hover">+</button>
            </div>
            <div>
                <button onClick={() => onInput("00")} className="number">00</button>
                <button onClick={() => onInput(0)} className="number">0</button>
                <button onClick={() => onInput(".")} className="number">.</button>
                <button onClick={() => onInput("=")} className="operator dark-glow-on-hover">=</button>
            </div>
    </div>

    )
};

export default Numbers;