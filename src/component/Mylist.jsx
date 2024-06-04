
export default function MyList() {
  const songs = [
    {
      id: 1,
      namaPenyanyi: "Rian Ekky Pradipta",
      namaLagu: "Merindukanmu",
      bandnya: "DMASIV",
      image: "https://1.bp.blogspot.com/-E9gKcxPySD0/YVXOJ2bsWwI/AAAAAAAAOzQ/YReCh59OXfkb1hxi3IVwN8ogqTq9tM3CQCLcBGAsYHQ/s400/band%2Bindonesia%2Bterbaik%2Bdmasiv.jpg",
    },
    {
      id: 2,
      namaPenyanyi: "Cikini Stones Complex",
      namaLagu: "Bisikan mama",
      bandnya: "Slank",
      image: "https://1.bp.blogspot.com/-qY9-psSK1VI/YVXOLoepk-I/AAAAAAAAOzo/wrtSzZzIB4QMXfYdZdpnhvftoG9DCYK7gCLcBGAsYHQ/s400/band%2Bindonesia%2Bterbaik%2Bslank.jpg",
    },
    {
      id: 3,
      namaPenyanyi: "virgoun",
      namaLagu: "seluruh nafas ini",
      bandnya: "Last child",
      image: "https://4.bp.blogspot.com/--5aCNAnUT9k/WrDsJJrUvXI/AAAAAAAADdA/1pCk_sqkpOsrqd8ZOdB7UKs8Ivf1pd_wwCLcBGAs/s1600/last-child.jpg",
    },
    {
      id: 4,
      namaPenyanyi: "Akhdiyat Duta Modjo",
      namaLagu: "Sephia",
      bandnya: "sheila on seven",
      image: "https://1.bp.blogspot.com/-LHK2_2LCpXE/YVXOLaoj6dI/AAAAAAAAOzk/PTdxN9uVGoADapC29I4_rxDCo7mOoUrqgCLcBGAsYHQ/s400/band%2Bindonesia%2Bterbaik%2Bsheila%2Bon%2B7.jpg",
    },
    {
      id: 5,
      namaPenyanyi: "TSigit Purnomo",
      namaLagu: "saat bahagia",
      bandnya: "ungu",
      image: "https://1.bp.blogspot.com/-ACQw7_YWnf0/YVXOMJkyn0I/AAAAAAAAOzw/oYnrdcTCLmU3qkaP8-AMl3CdgtIyEQMLACLcBGAsYHQ/s400/band%2Bindonesia%2Bterbaik%2Bungu.jpg",
    }
  ];

  const handleClick = (song) => {
    alert(`Penyanyi: ${song.namaPenyanyi}\nLagu: ${song.namaLagu}\nBand: ${song.bandnya}`);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        {songs.map((item) => (
          <div key={item.id} className="max-w-xs w-56 rounded overflow-hidden shadow-lg m-4 bg-gray-500 transition transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={item.image} alt={item.namaLagu} className="w-24 h-24 mx-auto mt-4 object-cover"/>
            <div className="px-4 py-2 text-center">
              <div className="font-bold text-md mb-1">{item.namaLagu}</div>
              <button 
                onClick={() => handleClick(item)} 
                className="mt-2 bg-green-700 text-white text-sm py-2 px-4 rounded hover:bg-gray-700"
              >
                Lihat selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
