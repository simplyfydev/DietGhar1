import React from 'react';

export default function FAQHelpSection() {
    return (
        <div className="flex justify-center items-center py-8 bg-white rounded-lg mx-4 md:mx-0">
            <div className="text-center bg-green-50 py-12 px-6 md:px-12 rounded-lg">
                <p className="text-xl md:text-2xl font-medium text-black mb-4">Didn’t find the answer you were looking for?</p>
                <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-green-600">
                    We’re here to help!
                </button>
            </div>
        </div>
    );
}
