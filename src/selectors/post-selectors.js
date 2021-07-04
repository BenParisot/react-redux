export const getAllPosts = state => {
  return state.posts.map((post, id) => ({
    ...post,
    id
  })); 
};

export const getPostByIndex = (state, id) => {
  return getAllPosts(state)[id];
};
