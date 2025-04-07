'use client';

import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface CKEditorProps {
    initialValue: string;
    onChange?: (html: string) => void;
    height?: string;
    customConfig?: any;
}

const CustomCKEditor: React.FC<CKEditorProps> = ({ initialValue = '', onChange, height = '400px', customConfig = {} }) => {
    const [editorData, setEditorData] = useState<string>(initialValue);
    const [editorInstance, setEditorInstance] = useState<any>(null);

    // Update the editor when initialValue changes externally
    useEffect(() => {
        if (editorInstance && initialValue !== editorData) {
            editorInstance.setData(initialValue);
        }
    }, [initialValue, editorInstance]);

    // Default configuration for the editor
    const editorConfig = {
        toolbar: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            '|',
            'undo',
            'redo',
            '|',
            'sourceEditing'
        ],
        htmlSupport: {
            allow: [
                {
                    name: /.*/,
                    attributes: true,
                    classes: true,
                    styles: true
                }
            ]
        },
        licenseKey:
            'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzU2MDYzOTksImp0aSI6Ijc0ZDY1ZjUxLTcyYzgtNDcxNy04Y2YyLTc5M2IwMjEyNzA2OSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTgzZGFiODQifQ.P7Gi785SDQZVWZXYWJbSVaQLI7m21RwWephPw6o1RyIKsvprBDjzLmgWIeXy4fWWx5RFIk6HxCvfCGE9yUu1wA',
        ...customConfig
    };

    return (
        <div style={{ height }}>
            <CKEditor
                editor={ClassicEditor}
                config={editorConfig}
                data={initialValue}
                onReady={(editor: any) => {
                    setEditorInstance(editor);

                    // Add custom CSS to the editor content
                    const editorElement = editor.ui.view.editable.element;
                    if (editorElement) {
                        // Extract CSS from the initial value
                        const styleTagMatch = initialValue.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
                        if (styleTagMatch && styleTagMatch[1]) {
                            const styleElement = document.createElement('style');
                            styleElement.innerHTML = styleTagMatch[1];
                            styleElement.setAttribute('data-cke-temp', 'true');
                            editorElement.appendChild(styleElement);
                        }
                    }
                }}
                onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    setEditorData(data);
                    if (onChange) {
                        onChange(data);
                    }
                }}
            />
        </div>
    );
};

// Usage example component
const HtmlTemplateEditor: React.FC = () => {
    const [htmlTemplate, setHtmlTemplate] = useState<string>(`
    <style>
      .custom-box {
        background-color: #f5f5f5;
        border: 1px solid #ddd;
        padding: 15px;
        border-radius: 5px;
        margin: 10px 0;
      }
      .highlight {
        color: #ff6600;
        font-weight: bold;
      }
    </style>
    <div class="custom-box">
      <h2>Welcome to my template, Tofiq</h2>
      <p>This is a <span class="highlight">styled</span> HTML template.</p>
    </div>
  `);

    const handleChange = (newHtml: string) => {
        setHtmlTemplate(newHtml);
        console.log('HTML template updated:', newHtml);

        // You can perform additional actions with the updated HTML here
    };

    return (
        <div>
            <h1>HTML Template Editor</h1>
            <CustomCKEditor
                initialValue={htmlTemplate}
                onChange={handleChange}
                height="500px"
                customConfig={{
                    // Additional custom configuration can be added here
                    htmlEmbed: {
                        showPreviews: true
                    }
                }}
            />

            <div style={{ marginTop: '20px' }}>
                <h3>Preview:</h3>
                <div dangerouslySetInnerHTML={{ __html: htmlTemplate }} />
            </div>
        </div>
    );
};

export default HtmlTemplateEditor;
