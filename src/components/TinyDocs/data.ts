const cssStyles = `
.demo-inline {
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: left;
  color: #626262;
  line-height: 1.3;
  font-size: 14px;
  background-color: #ffffff;
  text-align: left;
  vertical-align: top;
  padding: 20px 20px 20px 20px;
}
.demo-inline .container {
  background-color: #fafafa;
  margin: -20px -20px 0 -20px;
  padding: 20px;
}
.demo-inline p {
  margin: 0 0;
}
.demo-inline h1 {
  color: #1976D2;
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  margin: 0 0;
}
.demo-inline h2 {
  color: #1976D2;
  font-size: 2em;
  margin-bottom: 0;
  margin-top: 0;
  line-height: 40px;
}
.demo-inline h3 {
  font-size: 1.5em;
  color: #403f42;
  margin-bottom: 0;
  margin-top: 0;
  line-height: 40px;
}
.demo-inline ul,
.demo-inline ol {
  padding-left: 20px;
}
.demo-inline ul {
  list-style: disc;
}
.demo-inline ol {
  list-style: decimal;
}
.demo-inline a {
  text-decoration: underline;
}
.demo-inline img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 10px 10px 10px;
}
.demo-inline textarea {
  display: none;
}
.demo-inline *[contentEditable="true"]:focus,
.demo-inline *[contentEditable="true"]:hover {
  outline: 2px solid #1976D2;
}`;

export const htmlValue = `<div class="demo-inline">
  <div class="container">
    <h1 class="tinymce-heading">The world's first rich text editor in the cloud</h1>
    <p><img src="https://www.tiny.cloud/images/image-two.jpg" /></p>
    <div class="tinymce-body">
      <p>Have you heard about Tiny Cloud? It's the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise.</p>
      <p>One of these enhancements is <strong>Tiny Drive</strong>: imagine file management for TinyMCE, in the cloud, made super easy. Learn more at <a href="#">here</a></p>
    </div>
  </div>
  <h2 class="tinymce-heading">An editor for every project</h2>
  <div class="tinymce-body">
    <p>Here are some of our customer's most common use cases for TinyMCE:</p>
    <ul>
      <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
      <li>Learning Management Systems (<em>e.g. Blackboard</em>)</li>
      <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
      <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
      <li>Content creation in SaaS systems (<em>e.g. Eventbrite, GoFundMe, Zendesk</em>)</li>
    </ul>
    <p>And those use cases are just the start. TinyMCE is incredibly flexible, and with hundreds of APIs there's likely a solution for your editor project</p>
  </div>
</div>`;

export const initialConfig = {
    height: 600,
    menubar: false,
    plugins: [
        'advlist',
        'autolink',
        'lists',
        'link',
        'image',
        'charmap',
        'preview',
        'anchor',
        'searchreplace',
        'visualblocks',
        'code',
        'fullscreen',
        'insertdatetime',
        'media',
        'table',
        'code',
        'help',
        'wordcount'
    ],
    toolbar:
        'undo redo | blocks | ' +
        'bold italic forecolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
    content_style: cssStyles
};

export const viewOnlyConfig = {
    ...initialConfig,
    disabled: true,
    menubar: false,
    toolbar: false
};

export const trialLicenseKey = 'ad201cz4v0tvuy84tb0h3kyrr5mqkrc7gb3c1tbtqxdco6xk';
