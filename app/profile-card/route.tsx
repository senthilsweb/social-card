import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') ?? 'Default Title';
  const title = url.searchParams.get('title') ?? 'Default Title';
  const email = url.searchParams.get('email') ?? 'Default Title';
  const mobile = url.searchParams.get('mobile') ?? 'Default Title';
  const website = url.searchParams.get('website') ?? 'Default Title';
  const bg_image_url = url.searchParams.get('bg_image_url') ?? 'https://res.cloudinary.com/nathansweb/image/upload/v1697941162/healthbuddy/background/blue_smbfxv.png';
  const profile_image_url = url.searchParams.get('profile_image_url') ?? '';
  const bg_color = url.searchParams.get('bg_color') ?? 'indigo';

  return new ImageResponse(
    (
      <div tw={`flex flex-col justify-between bg-${bg_color}-600 w-full h-full bg-cover bg-center p-10 box-border font-sans text-white`}>
        <div tw="flex flex-row items-start justify-start">
          {profile_image_url && <img src={profile_image_url} alt="Profile" tw="w-[150px] h-[150px] mr-5 mt-8" />}

          {/* Profile Details */}
          <div tw="flex flex-col items-start">
            <h1 tw="text-4xl mb-2">{name}</h1>
            <p tw="text-xl my-1">{title}</p>
            <p tw="text-xl my-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" tw="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {mobile}
            </p>
            <p tw="text-xl my-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" tw="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
              </svg>
              {email}
            </p>
            <p tw="text-xl my-1 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" tw="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              {website}
            </p>
          </div>
        </div>

        {/* Bottom Right Section with QR Code */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img
            src={`http://localhost:3000/api/qr/code?chl=${encodeURIComponent(website)}&chs=200x200&chld=M|2`}
            alt="QR Code"
            style={{
              width: '100px',
              height: '100px',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
