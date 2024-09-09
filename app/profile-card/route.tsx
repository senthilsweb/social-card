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

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bg_image_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '40px',
          boxSizing: 'border-box',
          fontFamily: 'Arial, sans-serif',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {profile_image_url && (
            <img
              src={profile_image_url}
              alt="Profile"
              style={{
                width: '150px',
                height: '150px',
                marginRight: '20px',
              }}
            />
          )}

          {/* Profile Details */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>{name}</h1>
            <p style={{ fontSize: '20px', margin: '5px 0' }}>{title}</p>
            <p style={{ fontSize: '20px', margin: '5px 0' }}>{email}</p>
            <p style={{ fontSize: '20px', margin: '5px 0' }}>{mobile}</p>
            <p style={{ fontSize: '20px', margin: '5px 0' }}>{website}</p>
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
