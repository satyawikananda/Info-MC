import { database } from './db';

export const pinPemain = (
  nama,
  posisi,
  no_baju,
  kewarganegaraan,
  tempat_lahir,
  tgl_lahir,
  status,
) => {
  database
    .then((db) => {
      const tx = db.transaction('pin_pemain', 'readwrite');
      const store = tx.objectStore('pin_pemain');
      const data = {
        nama: nama,
        posisi: posisi,
        no_baju: no_baju,
        kewarganegaraan: kewarganegaraan,
        tempat_lahir: tempat_lahir,
        tgl_lahir: tgl_lahir,
        status: status,
      };
      return store.add(data);
    })
    .then((e) => {
      console.log(e);
      M.toast({
        html: 'Berhasil pin data',
        classes: 'Rounded',
      });
    })
    .catch((error) => {
      M.toast({
        html: `Error: ${error}`,
      });
    });
};

export const getPinPemain = () => {
  database.then((db) => {
    const tx = db.transaction('pin_pemain', 'readonly');
    const store = tx.objectStore('pin_pemain');
    return store.getAll();
  });
};

export const deletePinPemain = (id) => {
  database.then((db) => {
    const tx = db.transaction('pin_pemain', 'readwrite');
    const store = tx.objectStore('pin_pemain');
    store.delete(id);
    return tx.complete;
  });
};
