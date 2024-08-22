import { useSyncExternalStore } from 'react';
// React 18에서 새로 도입된 훅
// 클라이언트와 서버 간의 상태 동기화하는 역할

function subscribe(callback) {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
    return () => {
        window.removeEventListener("online", callback);
        window.removeEventListener("offline", callback);
    };
}

function getSnapshot() {
    return window.navigator.onLine;
}

function BrowserApi() {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot);
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800">
                {isOnline ? (
                    <span className="flex items-center space-x-2">
                        👩‍💻
                        <span>Online</span>
                    </span>
                ) : (
                    <span className="flex items-center space-x-2">
                        🏄‍♀️
                        <span>Offline</span>
                    </span>
                )}
            </h1>
        </main>
    )
}

export default BrowserApi;