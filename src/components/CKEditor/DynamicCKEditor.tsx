'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Dynamically import the CKEditor component with no SSR
const CustomCKEditor = dynamic(() => import('./CKEditor').then((mod) => mod.default), {
    ssr: false,
    loading: () => (
        <div className="flex items-center justify-center h-[400px] border border-gray-200 rounded-lg">
            <div className="text-gray-500">Loading editor...</div>
        </div>
    )
});

interface DynamicCKEditorProps {
    initialValue?: string;
    onChange?: (html: string) => void;
    height?: string;
    customConfig?: any;
}

const DynamicCKEditor = ({ initialValue = '', onChange, height = '400px', customConfig = {} }: DynamicCKEditorProps) => {
    const [isMounted, setIsMounted] = useState(false);

    // Ensure we only render the editor after mounting
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="flex items-center justify-center h-[400px] border border-gray-200 rounded-lg">
                <div className="text-gray-500">Loading editor...</div>
            </div>
        );
    }

    return <CustomCKEditor />;
};

export default DynamicCKEditor;
