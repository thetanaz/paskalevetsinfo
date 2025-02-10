export default function Home() {
  return (
    <div className="w-full flex items-center mt-0 sm:mt-2">
      <main className="flex flex-col gap-y-2 mx-auto">
        <h1 className="text-center text-2xl font-medium">
          Добре дошли в официалния сайт на село Паскалевец , община Павликени.
        </h1>
        <h2 className="text-center font-light">
          Тук ще откриете информация за случващото се в селото, интересни снимки
          и исторически факти.
        </h2>
        <div className="lg:max-w-[1024px] lg:max-h-[800px]  mt-2 rounded-xl overflow-hidden object-center m-3">
          <img
            src="https://res.cloudinary.com/dwshro2zn/image/upload/v1738613764/0-02-05-a4869f155719a226336b0a2ac73099cee0c5cedd322ad9e781682dfa04e783c1_e07d39bb7687b137_kj5o1q.jpg"
            alt="paskalevets"
          />
        </div>
        <p className="text-sm font-light text-end mr-5 -mt-3">
          снимка от Десислава Ташева
        </p>
      </main>
    </div>
  );
}
