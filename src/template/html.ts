export const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pre-Application Review</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    /* Base Reset and Typography */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      color: #333;
    }
    .container {
      max-width: 800px;
      margin: 20px auto;
      background: #fff;
      padding: 20px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    }
    /* Header Styling */
    .header {
      display: flex;
      align-items: center;
      border-bottom: 2px solid #000;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    .logo {
      width: 100px;
      height: auto;
      margin-right: 20px;
    }
    .title {
      font-size: 24px;
      font-weight: bold;
    }
    /* Static Content Blocks */
    .static-text {
      margin-bottom: 20px;
    }
    .disclaimer {
      border: 1px solid #ccc;
      background-color: #f1f1f1;
      padding: 10px;
      font-size: 0.9em;
      margin-bottom: 20px;
    }
    /* Meeting Details */
    .meeting-details p {
      margin: 5px 0;
    }
    /* Section Styling */
    .section {
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 20px;
      font-weight: bold;
      border-bottom: 1px solid #ddd;
      padding-bottom: 5px;
      margin-bottom: 10px;
    }
    /* AI-generated Content Area */
    .ai-section {
      padding: 10px;
      border: 1px dashed #aaa;
      background-color: #fafafa;
    }
    /* Divider between top static content and dynamic sections */
    .line-divider {
      border-top: 2px solid #000;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header with Organization Logo and Title -->
    <div class="header">
      <img src="{{org_logo_url}}" alt="Organization Logo" class="logo">
      <div class="title">Pre-Application Review</div>
    </div>

    <!-- Static Comments and Disclaimer -->
    <div class="static-text">
      <p><strong>Comments from Community Development Department</strong></p>
    </div>

    <div class="disclaimer">
      <p><strong>Disclaimers:</strong> It is impossible for the Pre-Application conference to be an exhaustive review of all potential issues. The discussion at the conference or the information form given to the applicant shall not bind, limit, or prohibit the City’s future application or enforcement of the applicable law; rather, it is intended to offer the applicant guidance in preparing a development proposal for submittal.</p>
    </div>

    <!-- Meeting & Application Details Section -->
    <div class="meeting-details">
      <p><strong>Meeting Date:</strong> {{meeting_date}}</p>
      <p><strong>Staff Member:</strong> {{staff_member_name}}, {{staff_member_designation}}<br>
         <strong>Email:</strong> {{staff_member_email}} | <strong>Phone:</strong> {{staff_member_phone}} {{staff_member_extension}}</p>
      <p><strong>Application No.:</strong> {{application_number}}</p>
      <p><strong>Location:</strong> {{location}}</p>
      <p><strong>Application Name:</strong> {{application_name}}</p>
      <p><strong>Zoning District:</strong> {{zoning_district}}</p>
      <p><strong>Use Classification:</strong> {{use_classification}}</p>
      <p><strong>Project Description:</strong> {{project_description}}</p>
    </div>

    <div class="line-divider"></div>

    <!-- Dynamic Sections Start Here -->

    <!-- Land Use Permits Required Section (AI-Generated Content) -->
    <div class="section" id="section-land-use-permits">
      <div class="section-title">Land Use Permits Required</div>
      <div class="ai-section">
        <!-- AI-generated bullet points or paragraph content -->
        {{land_use_permits_content}}
      </div>
    </div>

    <!-- Zoning Section (Dynamic with Potential Subsections/Lists) -->
    <div class="section" id="section-zoning">
      <div class="section-title">Zoning</div>
      <div class="ai-section">
        <!-- AI-generated zoning content; may include subsections and lists -->
        {{zoning_content}}
      </div>
    </div>

    <!-- Commercial Development Standards Section (Conditional - only for Commercial) -->
    <div class="section" id="section-commercial-standards">
      <div class="section-title">Commercial Development Standards</div>
      <div class="ai-section">
        <!-- AI will generate content for this section if applicable -->
        {{commercial_standards_content}}
      </div>
    </div>

    <!-- General Standards Section (Dynamic, may contain multiple subsections) -->
    <div class="section" id="section-general-standards">
      <div class="section-title">General Standards</div>
      <div class="ai-section">
        <!-- AI will generate dynamic subsections (each may include paragraphs, lists, etc.) -->
        {{general_standards_content}}
      </div>
    </div>

    <!-- You can add more dynamic sections as needed -->
  </div>
</body>
</html>
`;
