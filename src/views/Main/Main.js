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
    console.log('test');
    if (entry.isIntersecting && !isLoading) {
      // IntersectionObserver.unboserver -> 타겟 엘리먼트에 대한 관찰을 멈추고 싶을 때 사용.
      observer.unobserve(entry.target);
      await infiniteFetchPost();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    // 처음 target이 변경 되기때문에 초기1회 실행이 됨.
    // 그래서 따로 초기 실행 함수가 필요 없음

    let observer;

    if (!!target) {
      // IntersectionObserver(callback, options)
      // callback -> target Element가 교차되었을 때 실행할 함수
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });

      // IntersectionObserver.observe(targetElement) -> target Element에 대한 IntersectionObserver를 관찰을 시작할때 사용.

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
