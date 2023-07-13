import './userPanel.css';

function UserPanel() {
  return (
    <div className='userPanel-container'>
      <section className='card-list'>
        <article className='card'>
          <header className='card-header'>
            <h2>Kullanıcılar</h2>
          </header>
          <img
            src='https://www.marasyenigun.com/images/haberler/ogrenciler-tercih-surecinde-panik-yapmayin.png'
            alt='Resim 1'
          />
        </article>
        <article className='card'>
          <header className='card-header'>
            <h2>Dersler</h2>
          </header>
          <img
            src='https://uzem.samsun.edu.tr/wp-content/uploads/sites/70/2019/09/dersler.png'
            alt='Resim 2'
          />
        </article>
        <article className='card'>
          <header className='card-header'>
            <h2>Sınavlar</h2>
          </header>
          <img
            src='https://i4.hurimg.com/i/hurriyet/75/0x0/604b3ea64e3fe019c496c5d9.jpg'
            alt='Resim 3'
          />
        </article>
        <article className='card'>
          <header className='card-header'>
            <h2>Bildirimler</h2>
          </header>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrp_jmmzOgy0Q1fplMx7b0FD4KXLwojLx_docEet4xRQhb4YS3u8n0YPjU33iMZ5zOCVw&usqp=CAU'
            alt='Resim 4'
          />
        </article>
      </section>
    </div>
  );
}

export default UserPanel;
