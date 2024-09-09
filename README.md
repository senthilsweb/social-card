# social-card

social-card: A dynamic image generator for business, profile, and social cards using Vercel Open Graph, Next.js, and TailwindCSS. Easily customize and create visually appealing cards for any purpose!

## **Features**

- [x] **Business, Profile, and Social Cards:** Automatically generate profile cards for sharing across platforms.
- [x] **QR Code Generation:** A built-in API to create QR codes that can be embedded in profile cards.
- [x] **Image URL for Profile Cards:** Generate profile cards dynamically through URL parameters for easy sharing.
- [x] **Edge Deployment:** Optimized for edge platforms like Vercel, ensuring low latency and high availability.

## **Technology**

- **Vercel Open Graph:** Enables dynamic card generation and sharing functionality.
- **Next.js:** Powers the serverless routes for the project, including the QR code generation API.

## **Project Structure**

```bash
├── app
│   ├── profile-card
│   │   └── route.tsx       # Route for generating the social cards
├── pages
│   └── api
│       └── qr
│           └── code.js     # API for QR code generation
└── README.md               # Project documentation
```

## **Getting Started**

### **Prerequisites**

- Node.js (version 20.x and above)
- A platform for deployment (e.g., [Vercel](https://vercel.com/))

### **Installation**

1. **Clone the Repository:**

   ```bash
   https://github.com/senthilsweb/profile-card.git
   
   cd profile-card
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run Locally:**

   To run the project locally:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## **Using Social Cards as Image URLs**

You can dynamically generate and use social cards as image URLs by specifying the required parameters in the URL.

### **URL Structure**

```bash
http://localhost:3000/profile-card?name=<name>&email=<email>&mobile=<mobile>&title=<title>&profile_image_url=<profile_image_url>&website=<website>
```

### **Example**


Here is an example URL that generates a social card for a user:

```bash
http://localhost:3000/profile-card?name=Senthilnathan%20Karuppaiah&email=nathansweb@icloud.com&mobile=%2B1%20222-222-2222&title=Solutions%20Architect&profile_image_url=https://res.cloudinary.com/nathansweb/image/upload/v1626488903/profile/Senthil-profile-picture-01_al07i5.jpg&website=www.senthilsweb.com&bg_image_url=https://res.cloudinary.com/nathansweb/image/upload/v1713628953/senthilsweb.com/abstract-pattern-indigo_cmo4fm.png
```

![Profile card](public/profile-card-senthilnathan.png)

### **Parameters**

- `name`: The full name of the person.
- `email`: The person's email address.
- `mobile`: The person's mobile number.
- `title`: The person's job title.
- `profile_image_url`: A publicly accessible URL to the profile image.
- `website`: A publicly accessible URL to the website or blog.


### **Usage**

You can use the generated URL directly as an image source, embed it in websites, or share it across social platforms. The card will be dynamically generated based on the parameters provided.

Example usage in HTML:

```html
<img src="http://localhost:3000/profile-card?name=Senthilnathan%20Karuppaiah&email=nathansweb@icloud.com&mobile=%2B1%20222-222-2222&title=Solutions%20Architect&profile_image_url=https://res.cloudinary.com/nathansweb/image/upload/v1626488903/profile/Senthil-profile-picture-01_al07i5.jpg&website=www.senthilsweb.com&bg_image_url=https://res.cloudinary.com/nathansweb/image/upload/v1713628953/senthilsweb.com/abstract-pattern-indigo_cmo4fm.png" />
```

## **API Endpoints**

### **POST /api/qr/generate**

Generates a QR code for embedding in social cards.

- **URL:** `/api/qr/generate`
- **Method:** `POST`
- **Content-Type:** `application/json`

### **Request Payload**

```json
{
  "text": "Your text or URL here"
}
```

- **text**: The content you want to encode into the QR code.

### **Response**

#### **Successful Response**

If the request is successful, the API returns a base64-encoded QR code.

```json
{
  "qrCode": "data:image/png;base64,iVBORw..."
}
```

#### **Validation Error Response**

If the `text` field is missing or invalid, the API returns a validation error response with a 400 status code.

```json
{
  "error": "Text is required.",
  "message": "Please provide valid text for QR code generation."
}
```

## **Deployment**

### **Deploy on Vercel:**

1. **Connect Your GitHub Repository to Vercel:**
   - Follow Vercel’s instructions to deploy your project.

2. **Deploy Your Project:**
   - Once connected, Vercel will automatically deploy the project whenever changes are pushed to the repository.

## **Usage**

This project is designed to allow users to generate dynamic social cards with QR codes that can be shared across different platforms. Use the `/app/profile-card/route.tsx` for card generation and customization.

---
