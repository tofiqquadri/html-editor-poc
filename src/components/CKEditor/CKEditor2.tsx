import React, { useState } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';
import { htmlTemplate as initialHtmlTemplate } from '@/template/html';
export const CKEditor2 = () => {
    const [htmlTemplate, setHtmlTemplate] = useState<string>(
        initialHtmlTemplate ||
            `
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
  `
    );
    const cloud = useCKEditorCloud({
        version: '44.3.0',
        premium: true
    });

    if (cloud.status === 'error') {
        return <div>Error!</div>;
    }

    if (cloud.status === 'loading') {
        return <div>Loading...</div>;
    }

    const { ClassicEditor, Essentials, Paragraph, Bold, Italic } = cloud.CKEditor;

    return (
        <>
            <CKEditor
                editor={ClassicEditor}
                data={htmlTemplate}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setHtmlTemplate(data);
                }}
                config={{
                    licenseKey:
                        'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzU2MDYzOTksImp0aSI6Ijc0ZDY1ZjUxLTcyYzgtNDcxNy04Y2YyLTc5M2IwMjEyNzA2OSIsImxpY2Vuc2VkSG9zdHMiOlsiMTI3LjAuMC4xIiwibG9jYWxob3N0IiwiMTkyLjE2OC4qLioiLCIxMC4qLiouKiIsIjE3Mi4qLiouKiIsIioudGVzdCIsIioubG9jYWxob3N0IiwiKi5sb2NhbCJdLCJ1c2FnZUVuZHBvaW50IjoiaHR0cHM6Ly9wcm94eS1ldmVudC5ja2VkaXRvci5jb20iLCJkaXN0cmlidXRpb25DaGFubmVsIjpbImNsb3VkIiwiZHJ1cGFsIl0sImxpY2Vuc2VUeXBlIjoiZGV2ZWxvcG1lbnQiLCJmZWF0dXJlcyI6WyJEUlVQIl0sInZjIjoiMTgzZGFiODQifQ.P7Gi785SDQZVWZXYWJbSVaQLI7m21RwWephPw6o1RyIKsvprBDjzLmgWIeXy4fWWx5RFIk6HxCvfCGE9yUu1wA',
                    plugins: [Essentials, Paragraph, Bold, Italic],
                    toolbar: ['undo', 'redo', '|', 'bold', 'italic']
                }}
            />

            <div style={{ marginTop: '20px' }}>
                <h3>Preview:</h3>
                <div dangerouslySetInnerHTML={{ __html: htmlTemplate }} />
            </div>
        </>
    );
};
