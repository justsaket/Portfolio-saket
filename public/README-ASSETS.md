# Assets Setup Guide

This guide explains how to add your personal assets to the portfolio.

## Required Assets

### 1. Professional Photo
- **Filename:** `saket-photo.jpg`
- **Location:** `/public/saket-photo.jpg`
- **Requirements:**
  - High-resolution professional photograph
  - Minimum 1200px width recommended
  - Good lighting, sharp focus, professional appearance
  - Format: JPG or PNG
  - Keep file size under 500KB for optimal performance

### 2. Resume
- **Filename:** `Resume.pdf`
- **Location:** `/public/Resume.pdf`
- **Requirements:**
  - Latest PDF version of your resume
  - Properly formatted and readable
  - File size under 2MB

### 3. Creative Work
- **Location:** `/public/creative/`
- **Structure:**
  ```
  /public/creative/
    ├── branding/
    ├── packaging/
    ├── social-media/
    ├── advertising/
    ├── festivals/
    └── campaigns/
  ```
- **Requirements:**
  - High-quality images of your creative work
  - Formats: JPG, PNG, WebP
  - Optimized for web (under 800KB per image)
  - Descriptive filenames (e.g., `client-name-project-type.jpg`)

### 4. Certificates
- **Location:** `/public/certificates/`
- **Requirements:**
  - PDF or image format
  - Clear and readable
  - Organized by category if needed

## Current Status

- ✅ Professional photo: Present (`saket-photo.jpg`)
- ❌ Resume: **MISSING** - Please add `Resume.pdf`
- ⚠️ Creative work: Folder structure needs to be created
- ⚠️ Certificates: Folder structure needs to be created

## How to Add Assets

1. Place your files in the appropriate `/public/` subdirectories
2. Ensure filenames match exactly as specified
3. Run `npm run dev` to verify assets load correctly
4. Check browser console for any 404 errors
5. Build and deploy: `npm run build && npm start`

## Image Optimization Tips

- Use modern formats (WebP) when possible
- Compress images before uploading
- Provide different sizes for responsive images
- Use descriptive alt text in the code

## Notes

- The public folder is served statically by Next.js
- Assets are accessible at `/filename` from the root
- Changes to public folder require server restart
- In production (Vercel), ensure all files are committed to Git
