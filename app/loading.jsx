import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="text-center">
                <div className="inline-block w-16 h-16 border-4 border-t-cyan-500 border-r-cyan-500 border-b-gray-200 border-l-gray-200 rounded-full animate-spin" role="status" aria-label="Loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;