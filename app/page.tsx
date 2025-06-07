export default function Home() {
  return (
    <div className="w-full flex items-center mt-0 sm:mt-2 px-4 justify-center my-2">
      <main className="flex flex-col gap-y-2 mx-auto items-center max-w-7xl">
        <h1 className="text-center text-2xl font-medium px-4">
          Добре дошли в официалния сайт на село Паскалевец , община Павликени.
        </h1>
        <h2 className="text-center font-light px-4">
          Тук ще откриете информация за случващото се в селото, интересни снимки
          и исторически факти.
        </h2>
        <div className="flex xl:flex-row flex-col gap-4 xl:m-3 w-full">
          <div className="flex flex-col xl:max-h-[596px] xl:max-w-[560px] gap-y-2 w-full xl:w-auto">
            <div className="w-full">
              <iframe
                className="rounded-xl w-full h-[200px] sm:h-[350px] md:h-[298px]"
                src="https://www.youtube.com/embed/FE4U5BcrbK4?si=VvMDJzS7UkGfZD_1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                allowFullScreen
              ></iframe>
            </div>
            <img
              className="rounded-xl h-[200px] sm:h-[250px] md:h-[298px] w-full object-cover object-center"
              src="https://res.cloudinary.com/dwshro2zn/image/upload/v1738613764/0-02-05-a4869f155719a226336b0a2ac73099cee0c5cedd322ad9e781682dfa04e783c1_e07d39bb7687b137_kj5o1q.jpg"
              alt="church"
            />
            <p className="text-sm font-light pt-2 text-end mr-5 -mt-3">
              снимка от Десислава Ташева
            </p>
          </div>
          <div className="w-full xl:w-auto flex justify-center">
            <iframe
              className="rounded-xl "
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fmibextid%3DwwXIfr%26v%3D1434936257638483%26rdid%3D532HUZbDE8LxDfYt&width=560&show_text=false&height=996&appId"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              height="605"
              width="400"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
