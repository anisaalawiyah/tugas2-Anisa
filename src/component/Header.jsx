export default function Header(){
    const author = "hello Alawiyah";
    const tampungan = author ? author : "Tanpa Nama";
    return (
        <div className="bg-green-700 text-white py-4">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-2xl font-bold">Daftar Lagu</p>
            <p className="text-lg">{tampungan}</p>
          </div>
        </div>
      );
}
