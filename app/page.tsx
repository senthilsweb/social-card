import Image from 'next/image';

export default function Home() {
  const imageUrl = `/profile-card?name=Biker%20Gopher&email=biker.gopher@email.com&mobile=%2B1%20222-222-2222&title=Solutions%20Architect&profile_image_url=https://github.com/ashleymcnamara/gophers/blob/master/Biker_Gopher.png?raw=true&website=www.senthilsweb.com&bg_color=indigo`;
///profile-card?name=Senthilnathan%20Karuppaiah&email=nathansweb@icloud.com&mobile=%2B1%20222-222-2222&title=Solutions%20Architect&profile_image_url=https://res.cloudinary.com/nathansweb/image/upload/v1626488903/profile/Senthil-profile-picture-01_al07i5.jpg&website=www.senthilsweb.com&bg_image_url=https://res.cloudinary.com/nathansweb/image/upload/v1713628953/senthilsweb.com/abstract-pattern-indigo_cmo4fm.png
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image src={imageUrl} alt="Generated Social Card" width={600} height={300} />
      </div>
    </main>
  );
}
