// react
import React, { useState, useEffect } from 'react';

// components
import ListBox from '../components/ListBox';
import LoadingMask from '../components/LoadingMask';

// server
import { apiFetchPosts } from '../../lib/api/posts';

const Main = () => {
  // posts data
  const [data, setData] = useState([]);
  // 마지막 요소 확인
  const [target, setTarget] = useState(null);
  // loading
  const [isLoading, setIsLoading] = useState(false);

  // post data useEffect
  // api 호출
  const infiniteFetchPost = async () => {
    setIsLoading(true);
    const res = await apiFetchPosts();

    if (!res) {
      alert('업체 목록을 불러오는 중 오류가 발생했습니다.');
    } else {
      setData((prevData) => [...prevData, ...res]);
    }
    setIsLoading(false);
  };

  // intersection
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      await infiniteFetchPost();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;

    if (!!target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });

      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <>
      {data &&
        data.map((data, index) => {
          return (
            <ListBox
              key={`main-data-list-box-${index}`}
              listNumber={data.id}
              listTitle={data.title}
              listContents={data.body}></ListBox>
          );
        })}

      <div ref={setTarget} className='Target-El'></div>

      {isLoading && <LoadingMask />}
    </>
  );
};

export default Main;
