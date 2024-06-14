import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig.tsx";

const Realtime1: NextPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
      setFilteredUsers(usersList);
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user =>
        user.namaLengkap.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.alamat.toLowerCase().includes(e.target.value.toLowerCase()) ||
        user.nomorWhatsApp.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };

  return (
    <div className="container mx-auto shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-3xs bg-white flex flex-col items-center justify-start pt-4 px-6 pb-3.5 box-border gap-4 text-left text-lg text-font-grey font-poppins">
      <div className="self-stretch flex flex-col items-start justify-between gap-4">
        <div className="relative font-semibold z-1">Daftar Pengguna</div>
        <div className="w-full flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border text-sm text-gainsboro-100">
          <div className="self-stretch rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-between pt-1 pb-1 pr-2.5 pl-2 gap-4 z-1">
            <input
              type="text"
              className="relative inline-block flex-grow p-2 rounded-md border border-gray-300"
              placeholder="Search.."
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img className="w-11px h-2.5 relative z-1" alt="" src="/group-166.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[-5px_8px_20px_rgba(87,_120,_131,_0.2)] rounded-8xs bg-white flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-4 text-base text-main1">
        <div className="self-stretch rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-between pt-2 pb-1.5 pr-6 pl-4 gap-4 z-1">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="w-12 flex items-center justify-center font-medium">No</div>
              <div className="flex-1 font-medium">Nama</div>
            </div>
            <div className="w-32 font-medium">Alamat</div>
            <div className="w-48 font-medium">Nomor WhatsApp</div>
            <div className="w-20 font-medium">Akses</div>
            <div className="w-20 font-medium">Aksi</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-font-grey">
          {filteredUsers.map((user, index) => (
            <div className="self-stretch flex flex-row items-center justify-between py-2 px-4 box-border border-b" key={user.id}>
              <div className="w-12 flex items-center justify-center">{index + 1}</div>
              <div className="flex-1">{user.namaLengkap}</div>
              <div className="w-32">{user.alamat}</div>
              <div className="w-48">{user.nomorWhatsApp}</div>
              <div className="w-20">USER</div>
              <div className="w-20 flex flex-row items-center justify-center gap-2">
                <a href={`/edit/${user.id}`}>
                  <img className="h-6 w-6 cursor-pointer" loading="lazy" alt="Edit" src="/icon15.svg" />
                </a>
                <a href={`/delete/${user.id}`}>
                  <img className="h-6 w-6 cursor-pointer" loading="lazy" alt="Delete" src="/icon16.svg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Realtime1;