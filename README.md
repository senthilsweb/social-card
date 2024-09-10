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
# Purple color background
http://localhost:3000/profile-card?name=Senthilnathan%20Karuppaiah&email=senthilnathan@email.com&mobile=%2B1%20222-222-2222&title=Solutions%20Architect&profile_image_url=https://res.cloudinary.com/nathansweb/image/upload/v1626488903/profile/Senthil-profile-picture-01_al07i5.jpg&website=www.senthilsweb.com&bg_color=teal

```

![Profile card](public/profile-card-senthilnathan.png)

### **Parameters**

- `name`: The full name of the person.
- `email`: The person's email address.
- `mobile`: The person's mobile number.
- `title`: The person's job title.
- `profile_image_url`: A publicly accessible URL to the profile image.
- `website`: A publicly accessible URL to the website or blog.
- `bg_color`: Tailwind css colors[indigo, orange, pink, yellow, teal, green], the default is indigo.


### **Usage**

You can use the generated URL directly as an image source, embed it in websites, or share it across social platforms. The card will be dynamically generated based on the parameters provided.

Example usage in HTML:

```html
<img src="http://localhost:3000/profile-card?name=Senthilnathan%20Karuppaiah&email=nathansweb@icloud.com&mobile=%2B1%20222-222-2222&title=Solutions%20Architect&profile_image_url=https://res.cloudinary.com/nathansweb/image/upload/v1626488903/profile/Senthil-profile-picture-01_al07i5.jpg&website=www.senthilsweb.com&bg_image_url=https://res.cloudinary.com/nathansweb/image/upload/v1713628953/senthilsweb.com/abstract-pattern-indigo_cmo4fm.png" />
```

### **QR Code Generation API**

This API dynamically generates a QR code as a PNG image based on the query parameters provided in the request.

### **Endpoint**

- **URL:** `/api/qr/code`
- **Method:** `GET`
- **Response Type:** `image/png`

### **Query Parameters**

The API accepts several query parameters that control the content and appearance of the QR code.

| Parameter     | Type   | Description                                                                                                    | Default Value                      |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `cht`         | string | Type of chart to generate. Always set to `"qr"` for QR code generation.                                          | `qr`                               |
| `chs`         | string | Size of the QR code in pixels, formatted as `widthxheight` (e.g., `150x150`).                                   | `150x150`                          |
| `chl`         | string | The data to encode within the QR code (e.g., a URL or text).                                                    | `https://www.senthilsweb.com`      |
| `choe`        | string | The character encoding for the QR code content. Supported values include `UTF-8`.                               | `UTF-8`                            |
| `chld`        | string | The error correction level and margin, formatted as `L|4` (error correction level `L`, margin size `4`).        | `L|4` (low error correction, margin 4 pixels) |

### **Example Usage**

```http
GET /api/qr/code?cht=qr&chs=200x200&chl=https://www.senthilsweb.com&choe=UTF-8&chld=M|6
```

This request will generate a 200x200 QR code that encodes the URL `https://www.senthilsweb.com` with medium error correction and a margin of 6 pixels.

### **Response**

The API returns the QR code as a PNG image directly in the response.

#### **Successful Response**

- **Content-Type:** `image/png`
- **Status Code:** `200 OK`
- The response will be a PNG image of the generated QR code that can be embedded or downloaded.

#### **Error Handling**

If an error occurs during QR code generation, it will be logged, and the server will return a status code of `500 Internal Server Error` with a generic error message.

```json
{
  "error": "Failed to return content."
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
