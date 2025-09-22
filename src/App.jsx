import "./App.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import PlaylistCard from "./components/PlaylistCard";
function App() {
  const playlists = [
    {
      image:
        "https://c.saavncdn.com/042/Peed-Tere-Jaan-Di-Lofi-Flip-Punjabi-2025-20250312093349-500x500.jpg",
      title: "Hits of Gurdas maan",
      artist: "Sidhu Moosewala",
    },
    {
      image:
        "https://c.saavncdn.com/712/Rangrez-Punjabi-2014-20240417143543-500x500.jpg",
      title: "Zikr Tera",
      artist: "Satinder Sartaj",
    },
    {
      image: "https://c.saavncdn.com/936/Masoomiat-Punjabi-2017-500x500.jpg",
      title: "Masoomiat",
      artist: "Satinder Sartaj",
    },
    {
      image:
        "https://cdn-images.dzcdn.net/images/cover/e8bd87f10e4b6fa9e03f179ff6be7959/0x1900-000000-80-0-0.jpg",
      title: "Masoomiat",
      artist: "Satinder Sartaj",
    },
    {
      image:
        "https://i1.sndcdn.com/avatars-eHuj38cbyKxFdEfo-fABNQw-t1080x1080.jpg",
      title: "Moosetape",
      artist: "Sidhu Moosewala",
    },
  ];
  return (
    <>
      {/* <h1 class="text-3xl font-bold underline">Hello world!</h1> */}
      <Navbar />
      <Hero />
      {/* <div className="bg-gray-700 py-10 px5 grid grid-cols-2 md:grid-cols-4 gap-6"> */}
      {/* {playlists.map((playlists, idx) => (
          <PlaylistCard
            key={idx}
            image={playlists.image}
            title={playlists.title}
            artist={playlists.artist}
          />
        ))} */}

      {/* Hip-Hop Section */}
      <div className="bg-gray-700">
        <section className="p-10">
          <h2 className="text-3xl mb-6 text-white  font-bold ">Punjabi Hits</h2>
          <div className="grid grid-cols-4 gap-6">
            <PlaylistCard
              image="https://i1.sndcdn.com/avatars-eHuj38cbyKxFdEfo-fABNQw-t1080x1080.jpg"
              title="Moosetape"
              artist="Sidhu Moosewala"
            />
            <PlaylistCard
              image="https://www.karanaujlamusic.com/images/mf-gabhru-cover.jpg"
              title="P-POP Culture"
              artist="Karan Aujla"
            />
            <PlaylistCard
              image="https://i.scdn.co/image/ab67616d0000b2732fa209635435ce6909d395d6"
              title="A for Arjan 2"
              artist="Arjan Dhillon"
            />
            <PlaylistCard
              image="https://i1.sndcdn.com/artworks-XPGw6P8tOYrt-0-t500x500.png"
              title="2 Cheene"
              artist="Khan Bhaini"
            />
          </div>
        </section>
      </div>

      {/*Romantic Songs */}
      <div className="bg-gray-700">
        <section className="p-10">
          <h2 className="text-3xl mb-6 text-white  font-bold ">
            Romantic Songs
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <PlaylistCard
              image="https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/k9KN8zvJWB/size_m_1749706411.jpg"
              title="Tere Sang Yarra"
              artist="Atif Aslam"
            />
            <PlaylistCard
              image="https://c.saavncdn.com/751/Hawa-Banke-Single-Punjabi-2019-20190710170223-500x500.jpg"
              title="Hawa Banke"
              artist="Darshan Raval"
            />
            <PlaylistCard
              image="https://i1.sndcdn.com/artworks-000412241097-uxby5j-t500x500.jpg"
              title="A for Arjan 2"
              artist="Satinder Sartaj"
            />
            <PlaylistCard
              image="https://c.saavncdn.com/936/Masoomiat-Punjabi-2017-500x500.jpg"
              title="Masoomiat"
              artist="Satinder Sartaj"
            />
          </div>
        </section>
      
      
      </div>

      <div className="bg-gray-700">
        <section className="p-10">
          <h2 className="text-3xl mb-6 text-white font-bold ">
            90's Hits
          </h2>
          <div className="grid grid-cols-4 gap-6">
            <PlaylistCard
              image="https://c.saavncdn.com/454/Dhadkan-Hindi-2000-20210226131403-500x500.jpg"
              title="Dil Ne Yeh Kaha Hai Dil Se"
              artist="Udit Narayan"
            />
            <PlaylistCard
              image="https://i.ytimg.com/vi/MOHtJlKkSo0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLj5QhObL119nBEyCQjJPLeBnrDw"
              title="Meri Zindagi Mein"
              artist="Udit Narayan"
            />
            <PlaylistCard
              image="https://i.ytimg.com/vi/AQbZKt7LnxU/maxresdefault.jpg"
              title="Ek Aisi Ladki Thi"
              artist="Kumar Sanu"
            />
            <PlaylistCard
              image="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p25126_p_v8_ac.jpg"
              title="Dilwale Dulhania Le Jayenge"
              artist="Jatin-Lalit"
            />
          </div>
        </section>
      
      
      </div>
    </>
  );
}

export default App;
