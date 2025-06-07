export default function Home() {
  return (
    <div className="w-full flex items-center mt-0 sm:mt-2">
      <main className="flex flex-col gap-y-2 mx-auto items-center">
        <h1 className="text-center text-2xl font-medium">
          Добре дошли в официалния сайт на село Паскалевец , община Павликени.
        </h1>
        <h2 className="text-center font-light">
          Тук ще откриете информация за случващото се в селото, интересни снимки
          и исторически факти.
        </h2>
        <div className="flex xl:flex-row flex-col gap-x-2">
          <div className="flex flex-col  max-w-[560px]">
            {" "}
            <div className="aspect-w-16 aspect-h-9 m-3">
              <iframe
                className="rounded-xl"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FE4U5BcrbK4?si=VvMDJzS7UkGfZD_1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                allowFullScreen
              ></iframe>
            </div>
            <img
              className="rounded-xl m-3 w-[560px]"
              src="https://res.cloudinary.com/dwshro2zn/image/upload/v1738613764/0-02-05-a4869f155719a226336b0a2ac73099cee0c5cedd322ad9e781682dfa04e783c1_e07d39bb7687b137_kj5o1q.jpg"
              alt="church"
            />
            <p className="text-sm font-light pt-2 text-end mr-5 -mt-3">
              снимка от Десислава Ташева
            </p>
          </div>

          <div className="aspect-w-16 aspect-h-9 m-3">
            <iframe
              className="rounded-xl"
              src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fmibextid%3DwwXIfr%26v%3D1434936257638483%26rdid%3D532HUZbDE8LxDfYt&width=560&show_text=false&height=996&appId"
              width="560"
              height="996"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}
