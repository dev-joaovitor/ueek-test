import { useEffect } from 'react';
import { Button } from "./Button";

interface AlertModalProps {
    title: string;
    message: string;
    onClose: () => void;
    isOpen: boolean;
}

export function AlertModal({ title, message, onClose, isOpen }: AlertModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleEsc);

        return () =>
            document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed z-50 flex top-0 left-0 w-full h-full items-center justify-center bg-black/50">
            <div className="bg-[#080F17] text-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl border border-[#A7EE43]">

                <header className="mb-4">
                    <h2 className="text-xl font-bold text-[#A7EE43]">{title}</h2>
                </header>

                <main className="text-sm text-gray-200 mb-6">
                    <p>{message}</p>
                </main>

                <footer className="flex justify-end">
                    <Button
                        onClick={onClose}
                        text='Fechar'
                        type='primary'
                    />
                </footer>

            </div>
        </div>
    );
}
