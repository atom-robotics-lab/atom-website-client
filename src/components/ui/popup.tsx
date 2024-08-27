import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Adjust the props to include children
const Popup: React.FC<{ isOpen: boolean; onClose: () => void; children?: React.ReactNode }> = ({ isOpen, onClose, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        role="dialog"
                        aria-labelledby="popup-title"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
                            <button
                                className="absolute top-3 right-3 text-xl text-gray-700 hover:text-red-900"
                                onClick={onClose}
                                aria-label="Close"
                            >
                                &times;
                            </button>

                            {/* Render the children here */}
                            <div className="text-center">
                                {/* <h2 id="popup-title" className="text-xl text-gray-700 font-semibold mb-4">Popup Title</h2> */}
                                {children}
                                <button
                                    className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={onClose}
                                >
                                    OK!
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Popup;