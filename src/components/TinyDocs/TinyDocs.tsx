'use client';

import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState, useEffect } from 'react';
import { initialConfig, htmlValue, trialLicenseKey, viewOnlyConfig } from './data';

export default function TinyDocs() {
    const editorRef = useRef(null);
    const editorViewRef = useRef(null);

    const [mounted, setMounted] = useState(false);

    // Input HTML and CSS separately
    const [htmlContent, setHtmlContent] = useState(htmlValue);
    const [cssContent, setCssContent] = useState(initialConfig.content_style);

    // Output HTML and CSS
    const [outputHtml, setOutputHtml] = useState('');
    const [outputCss, setOutputCss] = useState('');

    const [viewMode, setViewMode] = useState('code'); // "code" or "visual"
    const previewRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Apply custom CSS to preview
    useEffect(() => {
        if (previewRef.current) {
            const styleElement = document.createElement('style');
            styleElement.id = 'custom-preview-style';
            styleElement.textContent = cssContent;

            // Replace existing style element if it exists
            const existingStyle = document.getElementById('custom-preview-style');
            if (existingStyle) {
                existingStyle.remove();
            }

            document.head.appendChild(styleElement);
        }
    }, [cssContent, previewRef.current]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setOutputHtml(htmlContent);
        setOutputCss(cssContent);
    };

    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === 'code' ? 'visual' : 'code'));
    };

    // Using useEffect to handle client-side initialization only
    useEffect(() => {
        setMounted(true);
        getEditorContent();
    }, []);

    const getEditorContent = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            setHtmlContent(content);
            console.log('Editor content:', content);
        }
    };

    if (!mounted) return null;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Advanced HTML & CSS Editor</h1>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* HTML Editor */}
                    <div className="border rounded p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-semibold">HTML Editor</h2>
                            <button
                                type="button"
                                onClick={toggleViewMode}
                                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm">
                                {viewMode === 'code' ? 'Switch to Visual Editor' : 'Switch to Code Editor'}
                            </button>
                        </div>

                        <div className="mb-4">
                            {viewMode === 'code' ? (
                                <div className="border rounded">
                                    <textarea
                                        className="w-full h-64 p-2 font-mono"
                                        value={htmlContent}
                                        onChange={(e) => setHtmlContent(e.target.value)}
                                        placeholder="Enter your HTML here..."
                                    />
                                </div>
                            ) : (
                                <Editor
                                    apiKey={trialLicenseKey}
                                    onInit={(_evt, editor) => (editorRef.current = editor)}
                                    initialValue={htmlValue}
                                    init={{ ...initialConfig, content_style: cssContent }}
                                    onEditorChange={setHtmlContent}
                                />
                            )}
                        </div>
                    </div>

                    {/* CSS Editor */}
                    <div className="border rounded p-4">
                        <h2 className="text-lg font-semibold mb-2">CSS Editor</h2>
                        <textarea
                            className="w-full h-64 p-2 border rounded font-mono"
                            value={cssContent}
                            onChange={(e) => setCssContent(e.target.value)}
                            placeholder="Enter your CSS here..."
                        />
                    </div>
                </div>

                {/* Preview Section */}
                <div className="border rounded p-4 mb-4">
                    <h2 className="text-lg font-semibold mb-2">Live Preview</h2>
                    <div ref={previewRef} className="preview-container p-4 border rounded bg-white">
                        <Editor
                            apiKey={trialLicenseKey}
                            onInit={(_evt, editor) => (editorViewRef.current = editor)}
                            initialValue={htmlContent}
                            init={{ ...viewOnlyConfig, content_style: cssContent }}
                        />
                    </div>
                </div>

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Generate Output
                </button>
            </form>

            {/* Output Section */}
            {(outputHtml || outputCss) && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Output</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* HTML Output */}
                        <div className="border rounded p-4">
                            <h3 className="text-lg font-semibold mb-2">HTML Output</h3>
                            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                                <code>{outputHtml}</code>
                            </pre>
                        </div>

                        {/* CSS Output */}
                        <div className="border rounded p-4">
                            <h3 className="text-lg font-semibold mb-2">CSS Output</h3>
                            <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                                <code>{outputCss}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
