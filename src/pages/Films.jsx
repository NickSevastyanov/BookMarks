import React, { useEffect } from 'react';
import { ContentLayout } from '../components/Layout/ContentLayout';

const Films = () => {
  const firstLoadItems = [
    {
      id: 1,
      Name: 'Стефен Карри: Недооцененный',
      URL: 'https://www.kinopoisk.ru/film/4541988/?utm_referrer=www.google.com',
      Image: 'https://static.hdrezka.ac/i/2023/7/26/d144367f02292ng52o27s.jpg',
      rating: 7.5,
    },
    {
      id: 2,
      Name: 'Зовите меня Тихиро',
      URL: 'https://www.kinopoisk.ru/film/5213797/',
      Image: 'https://static.hdrezka.ac/i/2023/2/23/w4f65685b6decjp22c92d.jpg',
      rating: 4.5,
    },
    {
      id: 3,
      Name: 'Air: Большой прыжок',
      URL: 'https://www.kinopoisk.ru/film/5000997/',
      Image: 'https://static.hdrezka.ac/i/2023/3/7/mfe3465b6416ben99b13p.jpg',
      rating: 9.5,
    },
  ];

  if (!localStorage.getItem('Films')) {
    localStorage.setItem('Films', JSON.stringify(firstLoadItems));
  }

  const LSFilmsData = JSON.parse(localStorage.getItem(`Films`));

  const [Newcontent, setNewcontent] = React.useState(LSFilmsData);
  const [searchValue, setSearchValue] = React.useState('');

  useEffect(() => {
    const newFilm = JSON.stringify(Newcontent);
    localStorage.setItem('Films', newFilm);
  }, [Newcontent]);

  return (
    <>
      <ContentLayout
        Newcontent={Newcontent}
        searchValue={searchValue}
        setNewcontent={setNewcontent}
        setSearchValue={setSearchValue}
      />
    </>
  );
};

export default Films;
