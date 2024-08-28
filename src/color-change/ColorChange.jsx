import { useState, useDeferredValue } from "react";
import Avatars from './Avatars';

function ColorChange() {
    const [color, setColor] = useState("#92A1C6");
    const deferredColor = useDeferredValue(color); //useDeferredValue는 성능면에서 훨씬 빠르다
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="mb-4 w-16 h-8 border rounded-lg shadow-sm"
            />
            <Avatars color={deferredColor} />
        </main>
    )
}

export default ColorChange;