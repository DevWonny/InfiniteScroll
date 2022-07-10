import { api } from '.';

// 전체 post fetch
export const apiFetchPosts = async () => {
  try {
    const res = await api.get(`/posts`);
    if (!res) {
      return null;
    } else {
      return res.data;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
