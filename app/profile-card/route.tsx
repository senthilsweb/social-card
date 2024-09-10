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
              
              {mobile}
            </p>
            <p tw="text-xl my-1 flex items-center">
             
              {email}
            </p>
            <p tw="text-xl my-1 flex items-center">
            
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
